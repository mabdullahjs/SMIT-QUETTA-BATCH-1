import Link from "next/link";
import React from "react";

const User = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users" , {
    cache: "no-store"
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
        return <div key={item.id}>
          <Link href={`/user/${item.id}`} className="cursor-pointer" >{item.name}</Link>
        </div>
    })}
    </>
  );
};

export default User;
