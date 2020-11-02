import React, { useEffect, useState } from 'react';
import { Checkbox, Pagination } from 'antd';
import api from 'api';
import UserRowComponent from './user-row/UserRow.component';

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  function onChange(page){
    setPage(page);
  };

  useEffect(() => {
    api.get(`/users/${page}/${10}`).then(result => {
      setUsers(result.data.users);
    })
    return () => {

    }
  }, [page])
  return (
    <React.Fragment>
      <table className="orders-table" style={{ backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <td className="text-center" style={{ minWidth: 50 }}><Checkbox /></td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Created</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            users 
            && users.length 
            ? users.map(user => <UserRowComponent key={user._id} user={user} />) 
            : <React.Fragment>
                <tr>
                  <td colSpan={7} className="text-center">User not found!</td>
                </tr>
              </React.Fragment>
          }
        </tbody>
      </table>
      <Pagination onChange={onChange} current={page} total={50} style={{textAlign: 'right', marginTop: 20}} />
    </React.Fragment>
  )
}

export default UsersComponent;