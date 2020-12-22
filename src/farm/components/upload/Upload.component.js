import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import _ from 'lodash';

function UploadComponent({ images, limit, handleChangeImage }) {
  const [fileListCom, setFileListCom] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [previewTitle, setPreviewTitle] = useState();
  const [limitImage, setLimitImage] = useState(1);

  useEffect(() => {
    if (!fileListCom) {
      const imagesTemp = _.cloneDeepWith(images);
      imagesTemp.forEach(image => {
        image.url = `http://localhost:4000/${image.image_url}`;
        image.uid = image._id || image.uid;
        image.name = image.image_url.split("images/")[1];
      })
      setFileListCom(imagesTemp);
      if (limit && limit > 0) {
        setLimitImage(limit);
      } else {
        setLimitImage(-1);
      }
    }
    return () => {

    }
  }, [images, limit, fileListCom])

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  function handleCancel() {
    setPreviewVisible(false);
  }

  async function handlePreview(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    setPreviewImage(file.url || file.preview);
  };

  async function handleChange({ file, fileList }) {
    if (file.status === 'removed') {
      setFileListCom(fileList);
    } else {
      const fileTemp = fileList.find(f => f.uid === file.uid);
      if (fileTemp) {
        fileTemp.status = 'done';
        setFileListCom(fileList);
      }
    }
  }

  async function handleRequest({ file }) {
    const result = await getBase64(file);
    const type = file.type.split('/')[1];
    handleChangeImage(result, type);
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <React.Fragment>
      <Upload
        customRequest={handleRequest}
        listType="picture-card"
        fileList={fileListCom}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {!limitImage || limitImage < 0 || (fileListCom && fileListCom.length < limitImage) ? uploadButton : null}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </React.Fragment>
  )
}

export default UploadComponent;