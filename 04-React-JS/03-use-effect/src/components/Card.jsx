import React, { useEffect, useState } from 'react'

const Card = (props) => {
  const [counter , setCounter] = useState(0)
  const [secondcounter , setSecondCounter] = useState(100)
  
  // [] dependency array


  useEffect(()=>{
    console.log("card component mounted");


    // return ()=>{
    //   console.log("card unmounted");
      
    // }
    
  } , [secondcounter])

  return (
    <div style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px"
    }}>
    <h1>{props.itemName}</h1>
    <h1>${props.price}</h1>
    <button onClick={()=>setCounter(counter + 1 )}>+</button>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter - 1 )}>-</button> <br /><br />
    <button onClick={()=>setSecondCounter(secondcounter + 1 )}>+</button>
    <h1>{secondcounter}</h1>
    <button onClick={()=>setSecondCounter(secondcounter - 1 )}>-</button>
    </div>
  )
}

export default Card



// agar use effect ka undar dependency array naa doo to component ki koi bhi state ma change ayega to use effect cahlaiga.

// agar dependency array empty di ho to kisi state change pa use effect nahi chalaiga.

// or agar kisi state ko dependency array ka undar define krdia to usi state ka change ma use effect chalaiga.
