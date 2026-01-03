import React, { useState } from 'react'

const Form = ({func}) => {
    const [transaction , setTransaction] = useState(null)
    const [remarks , setRemarks] = useState('')

    const confirmTransaction = (option) => {
        func({option , transaction: +transaction , remarks})
        
    }
  return (
    <>
    <input type="number" placeholder='enter expense' value={transaction} onChange={(e)=> setTransaction(e.target.value)}/> <br />
    <input type="text" placeholder='enter remarks' value={remarks} onChange={(e)=> setRemarks(e.target.value)}/> <br /><br />
    <button onClick={()=>confirmTransaction("in")}>Cash IN</button>
    <button onClick={()=>confirmTransaction("out")}>Cash OUT</button>
    </>
  )
}

export default Form