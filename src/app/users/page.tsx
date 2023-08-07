'use client'
import React, { useState, useEffect } from "react";
import  UserData  from "@/components/types/user"; // Importe o tipo UserData

const UserList = () => {
  const [data, setData] = useState<UserData[] | undefined>(); // Defina o tipo do estado

  useEffect(() => {
    const getData = () => {
      setData(UserData); // Aqui usamos a matriz `users` para simular a resposta do fetch
    };

    getData();
  }, []);

  if (!data) {
    // Adicione uma condição para quando o estado `data` ainda estiver indefinido
    return <div>Loading...</div>;
  }

  return (
    <div className="justify-center flex mt-9">
      <div className=" bg-zinc-300 rounded-md p-4 font-sans font-semibold">
        <h1>User List</h1>
        {data.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            {/* Exibir outras informações do usuário conforme necessário */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
