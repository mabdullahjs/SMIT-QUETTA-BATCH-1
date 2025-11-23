// import { useState } from "react"
// import Navbar from "./components/Navbar"
// import Card from "./components/Card"

// function App() {
//   // let username = "abdullah"
//   const [username, setUsername] = useState("abdullah")

//   return (
//     <>
//       <Navbar/>
//       <h1>Hello world {username}</h1>
//       <button onClick={()=> setUsername("Usman")}>change name</button>

//       <Card itemName={"Honda City"} price={"10000"}/>
//       <Card itemName={"Suzuki Swift"} price={2000}/>
//       <Card itemName={"Suzuki Cultus"} price={12000}/>


//     </>
//   )
// }

// export default App






// import React from 'react'
// import Btn from './components/Btn'

// const App = () => {

//   const submit = ()=>{
//     console.log("item submitted");

//   }
//   const testing = ()=>{
//     console.log("item testing");

//   }
//   const addTodo = ()=>{
//     console.log("item added");

//   }


//   return (
//     <>
//     <h1>Hello world</h1>
//     <Btn name={"submit"} func={submit}/>
//     <Btn name={"testing"} func={testing}/>
//     <Btn name={"addTodo"} func={addTodo}/>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import Btn from './components/Btn'
// import "../src/styles/app.css"

// const App = () => {
//   const [count, setCount] = useState(0)

//   const addCounter = () => {
//     setCount(count + 1)
//   }
//   return (
//     <>
//       <h1 >Hello world</h1>
//       {/* <h1 style={{
//         backgroundColor: "red",
//         color: "white",
//         padding: "20px"
//       }}>Hello world</h1> */}
//       <Btn name={`testing ${count}`} func={addCounter} />
//       <Btn name={`testing ${count}`} func={addCounter} ></Btn>
//     </>
//   )
// }

// export default App

// // hooks
// // usestate
// // use ref
// // conditional rendering
// // components

// // reuseable component (props)
// // use effect
// // styling
// // api calling
// // deployment on vercel


// import { useState } from 'react'
// import Card from './components/Card'

// const App = () => {
//   const [btn  , setBtn] = useState(true);
//   return (
//     <>
//       <h1>Hello world</h1>
//       <button onClick={()=> setBtn(!btn)}>{btn ? 'mount' : 'unmount'}</button>
//       {/* {!btn ? <Card itemName={"Iphone 17 pro"} price={200000}/> : null} */}
//       {!btn && <Card itemName={"Iphone 17 pro"} price={200000}/> }
//     </>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [users , setUsers] = useState(null);
//   const [error , setError] = useState(false)

//   useEffect(()=>{
//     fetch('https://jsonplaceholdertypicode.com/users')
//     .then(res => res.json())
//     .then(res => {
//       setUsers(res)
//     })
//     .catch(err => {
//       console.log(err)
//       setError(true)
//     })
//   } , [])
//   return (
//     <>
//       <h1>Hello world</h1>
//       {users ? users.map(item => {
//         return <h1>{item.name}</h1>
//       }): error ? <h1>Error occured</h1> : <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {
  const [loading , setLoading] = useState(true)
  const [user , setUser] = useState(null)
  const [error , setError] = useState(false)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setUser(res)
      })
      .catch((err) => {
        console.log(err);
        setError(true)
      }).finally(()=>{
        setLoading(false)
      })
  }, [])
  return (
    <>
      <h1>hello world</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      {user && user.map((item , index) => {
        return <h1 key={index}>{item.name}</h1>
      })}
    </>
  )
}

export default App