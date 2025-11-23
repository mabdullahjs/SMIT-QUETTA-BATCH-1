// import { useState } from "react";
// import "./app.css"
// function App() {
//   let [count , setCount] = useState(0)
//   function addCounter(){
//     setCount(count + 1)




//   }

//   function lessCounter(){
//     count > 0 ? setCount(count - 1) : null
//   }

//   return (
//     <>
//       <h1>Counter App {count}</h1>

//       <div className="container">
//         <button onClick={lessCounter}>-</button>
//         <h1>{count}</h1>
//         <button onClick={addCounter}>+ </button>
//       </div>

//     </>
//   )
// }

// export default App




// import { useState } from "react"

// function App() {
//   const [input , setInput] = useState("");

//   // function getVal(e){
//   //   setInput(e.target.value)
//   // }
//   return (
//     <>
//       <h1>Todo App</h1>

//       <form>
//         {/* <input type="text" placeholder="enter todo" value={input} onChange={getVal} /> */}
//         <input type="text" placeholder="enter todo" value={input} onChange={(e)=> setInput(e.target.value)} />
//         <button>submit {input}</button>
//       </form>


//       <ul>
//         <li>first todo</li>
//       </ul>
//     </>
//   )
// }

// export default App




import { useRef, useState } from "react"
import "./app.css"

function App() {
  const titleVal = useRef()
  const descVal = useRef()
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    console.log(titleVal.current.value);
    console.log(descVal.current.value);
    todo.push({
      title: titleVal.current.value,
      description: descVal.current.value
    })
    setTodo([...todo])
    // setTodo([...todo , {
    //   title: titleVal.current.value,
    //   description: descVal.current.value
    // }])

  }


  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1)
    setTodo([...todo]);
    
  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    
  }
  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter title" ref={titleVal} />
        <input type="text" placeholder="enter description" ref={descVal} />
        <button>submit</button>
      </form>


      <div className="parent">
        {todo.length > 0 ? todo.map((item, index) => {
          return <div key={index} className="children">
            <h1>title: {item.title}</h1>
            <h1>desc: {item.description}</h1>

            <button onClick={()=>deleteTodo(index)}>delete</button>
            <button onClick={()=> editTodo(index)}>edit</button>
          </div>
        }) : <h1>No todo found</h1>}

      </div>
    </>
  )
}

export default App


// ["sadasd"]
// // component
// // react fragment <> Virtual DOM
// // onclick
// // hooks (use state)
// // function hain react ka apna banaye hua fncton hain
// // use ka keyword sa start hain
// input ki value lena ka do tareeqa hain (use state , use ref)
// use ref and use state dono ka through input value get krna seekhna h