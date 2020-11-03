import { Checkbox, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React from 'react';

function CategoryRowComponent() {
    return (
        <React.Fragment>
            <tr>
                <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
                <td>Name</td>
                <td>
                    <Tag color="magenta" style={{ cursor: 'pointer' }}>Edit</Tag>
                    <Tag color="magenta" style={{ cursor: 'pointer' }}>Delete</Tag>
                </td>
            </tr>
        </React.Fragment>
    )
}

export default CategoryRowComponent;