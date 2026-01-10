// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { addTodo, removeTodo } from "./config/reduxconfig/reducers/todoSlice";

// const App = () => {
//   const [input, setInput] = useState('');
//   const selector = useSelector(state => state.todos)

//   const dispatch = useDispatch()

//   const addTodoToRedux = () => {
//     dispatch(addTodo({ title: input }))
//     console.log(selector);

//   }

//   const deleteTodoFromRedux = (id) => {
//     console.log(id);
//     dispatch(removeTodo({id}))

//   }


//   return (
//     <>
//       <h1>Hello world</h1>
//       <input type="text" placeholder="enter todo" value={input} onChange={e => setInput(e.target.value)} />
//       <button onClick={addTodoToRedux}>add Todo</button>
//       <ul>
//         {selector.map(item => {
//           return <li key={item.id}>{item.title}
//             <button onClick={() => deleteTodoFromRedux(item.id)}>Delete</button>
//           </li>
//         })}
//       </ul>
//     </>
//   )
// }

// export default App

import React from 'react'
import Product from './components/Product'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <h1 style={{position: 'fixed'}}>My products <Cart/></h1>
    <Product/>
    </>
  )
}

export default App


// useselector
// usedispatch


// usecallback usememo
// custom hook
// enviromental variable
// react hook form
// react query