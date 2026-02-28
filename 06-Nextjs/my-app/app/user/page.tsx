import React from "react";

const User = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users" , {
    next: {
        revalidate: 5000
    }
  });
//   const data = await fetch("https://jsonplaceholder.typicode.com/users" , {
//     cache: "no-store"
//   });
  const users = await data.json();
  console.log(users)
  return (
    <>
    <div>User {new Date().toLocaleTimeString()}</div>
    {users.map((item:{name: string; id: number}) => {
        return <p key={item.id}>{item.name}</p>
    })}
    </>
  );
};

export default User;
