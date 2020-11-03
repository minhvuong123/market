import { Checkbox } from 'antd';
import React from 'react';
import CategoryRowComponent from './category-row/CategoryRow.component';

function CategoriesComponent() {
    return (
        <React.Fragment>
            <table className="orders-table" style={{ backgroundColor: '#fff' }}>
                <thead>
                    <tr>
                        <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
                        <td>Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <CategoryRowComponent />
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CategoriesComponent;