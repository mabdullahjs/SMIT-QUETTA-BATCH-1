import { useState } from "react"
import Form from "./components/Form"
import HeaderBtn from "./components/HeaderBtn"
import List from "./components/List";

const App = () => {
  const [transaction , setTransaction] = useState([]);
  const [cashIn , setCashIn] = useState(0)
  const [cashOut , setCashOut] = useState(0)
  


  const getValFromForm = (val) => {
    console.log("value received from form ===>" , val);
    transaction.push(val)
    setTransaction([...transaction])
    setCashIn(transaction.filter(item => item.option === "in").reduce((acc , cval)=> acc + cval.transaction , 0))
    setCashOut(transaction.filter(item => item.option === "out").reduce((acc , cval)=> acc + cval.transaction , 0))    
  }
  return (
    <div>
    <h1>Expense Management</h1>
    <HeaderBtn amount={cashIn} remarks={"Cash In"}/>
    <HeaderBtn amount={cashOut} remarks={"Cash Out"}/>
    <HeaderBtn amount={cashIn - cashOut} remarks={"Balance"}/> <br /><br />

    <Form func={getValFromForm}/>
    {transaction.length > 0 && transaction.map((item , index) => {
      return <List expense={item} key={index}/>
    })}
    </div>
  )
}

export default App


// usememo , usecallback (project using firebase)
// redux toolkit (ecommerce app)

// typescript (1 class)
// next js (2 classes)

// backend (5 classes)
// react native (3 classes)
// course end 