import { Checkbox, Tag, Modal, Button, Form, Select } from 'antd';
import { order_status } from 'const';
import React, { useEffect, useState } from 'react';

const { Option } = Select;

function OrderRowComponent() {
    const [visible, setVisible] = useState(false);

    function showModal() {
        setVisible(true);
    };

    function handleCancel() {
        setVisible(false);
    };

    function onFinish(values) {
        setVisible(false);
    };
    function onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };

    function handleChange(value) {
        console.log(`Selected: ${value}`);
      }

    return (
        <React.Fragment>
            <tr>
                <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
                <td>Product</td>
                <td>Price</td>
                <td>Amount</td>
                <td>Status</td>
                <td>Transaction</td>
                <td>Created</td>
                <td>
                    <Tag onClick={showModal} color="magenta" className="" style={{ cursor: 'pointer', height: 32, lineHeight: '30px' }}>Edit</Tag>
                </td>
            </tr>
            <Modal
                title="Edit Product"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                width={300}
            >
                <Form
                    name="product-form"
                    layout='vertical'
                    initialValues={{
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item label="Status" name="product_title" rules={[{ required: true, message: 'Proruct name not valid!' }]}  >
                        <Select onChange={handleChange}>
                            {
                                order_status.map(o => <Option key={o.order_key} value={o.order_value}>{o.order_value}</Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">Confirm</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </React.Fragment>
    )
}

export default OrderRowComponent;