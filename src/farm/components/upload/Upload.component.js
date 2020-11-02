import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import api from 'api';

function UploadComponent({ images, limit }) {
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [previewTitle, setPreviewTitle] = useState();
  const [limitImage, setLimitImage] = useState(1);

  useEffect(() => {
    setFileList(images);
    if (limit && limit > 0) {
      setLimitImage(limit);
    } else {
      setLimitImage(-1);
    }
    return () => {

    }
  }, [images, limit])

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

  function handleChange({file, fileList: newFileList}) {
    setFileList(newFileList);
    console.log(file);
    console.log(fileList);
    console.log(newFileList);
  }

  async function handleRequest({ file }) {
    // console.log(file)
    // const formData = new FormData();
    // fileList.forEach(file => {
    //   formData.append('files', file);
    //   console.log(formData)
    // });
    // api.put('/products/file', { file }).then(result => {
    //   console.log(result);
    // })
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
        name="file"
        customRequest={handleRequest}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        { !limitImage || limitImage < 0 || (fileList && fileList.length < limitImage) ? uploadButton : null}
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