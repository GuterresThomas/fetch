'use client'
import React, { useState, useEffect } from "react";
import users from '../../components/types/user'

const UserList = () => {
    const [data, setData] = useState<User[]>()

    useEffect (() => {
        const getData = () => {
            setData(users)
        }

        getData()
    }, [])
    return (
        <div>
          <h1>User List</h1>
          {data.map((user) => (
            <div key={user.id}>
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              {/* Exibir outras informações do usuário conforme necessário */}
            </div>
          ))}
        </div>
      );
    
}