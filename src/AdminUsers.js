import React from 'react'

const AdminUsers = ({users,role}) => {
  return (
    <div className='adminbooking'>
      {role==="ROLE_ADMIN" ?(
      <table>
        <thead>
          <tr>
            <th>
              id
            </th>
            <th>
              username
            </th>
            <th>
              role
            </th>
          </tr>
        </thead>
        <tbody>
      {
        users.map((item,index) =>{
          return(
            <tr key={index}>
            <td>
              {item.id}
            </td>
            <td>
              {item.userName}
            </td>
            <td>
              {item.role}
            </td>
            </tr>
          )
        })
      }
      </tbody>
      </table>
      )
      :
      (
        <div className="pop">
          you dont have access to this page..,
          </div>
      )
    }
      </div>
  )
}

export default AdminUsers