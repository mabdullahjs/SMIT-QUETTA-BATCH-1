// import React from 'react'
// import Btn from './component/Btn';


// interface User {
//   id: number
//   name: string
//   email: string
//   address: {
//     street: string
//     suite: string
//     city: string
//   }

// }

// const Home = async () => {


//   const getData = await fetch("https://jsonplaceholder.typicode.com/users")
//   const users = await getData.json()
//   console.log(users);

//   return (
//     <>
//       <h1 className='text-center text-6xl'>hello world</h1>
//       <div className='flex justify-center gap-10 flex-wrap m-5'>
//         {users.map((item: User) => {
//           return <div key={item.id} className="card w-96 bg-base-100 card-md shadow-sm border">
//             <div className="card-body">
//               <h2 className="card-title">{item.name}</h2>
//               <p>Address: {item.email} {item.address.street} {item.address.city} {item.address.suite}</p>
//               <div className="justify-end card-actions">
//                 <Btn/>
//               </div>
//             </div>
//           </div>

//         })}
//       </div>

//     </>
//   )
// }

// export default Home



import React from 'react'

const Home = async () => {
  const api = 'https://the-trivia-api.com/v2/questions'
    const getData = await fetch(api)
    const quiz = await getData.json()
    console.log(quiz);
  return (
    <div>Home</div>
  )
}

export default Home