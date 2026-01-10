// import React, { useMemo, useState } from 'react';

// const arr = new Array(10_000_000).fill(0).map(() => Math.floor(Math.random() * 100_000)).map((item, index) => {
//   return {
//     index,
//     isMagical: index === 9_999_999
//   }
// })

// const App = () => {
//   const [count, setCount] = useState(0);


//   const findMagicalNumber = useMemo(()=>{
//     return arr.findIndex(item => item.isMagical === true)
//   } , []);

//   // const findMagicalNumber = arr.findIndex(item => item.isMagical === true)



//   return (
//     <>
//       <h1>Counter</h1>
//       <h2>{count} {findMagicalNumber}</h2>

//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </>
//   );
// };

// export default App;


// import React, { useCallback, useState } from 'react'
// import Btn from './component/Btn'

// const App = () => {
//   const [counter, setCounter] = useState(0)


// //   const testingFunc = ()=>{
// //     return 'hello'
// //   }


//   const testingFunc = useCallback(
//     () => {
//       return 'hello'
//     },
//     []
//   )

//   // const testingFunc = useCallback(
//   //   () => {
//   //     return 'hello' + counter
//   //   },
//   //   [],
//   // )


//   return (
//     <>
//     <h1>Hello world {counter}</h1>
//     <Btn title="hello click me" func={testingFunc}/>
//     {/* <Btn title="hello click me"/> */}
//     <button onClick={()=> setCounter(counter + 1)}>add counter</button>
//     </>
//   )
// }

// export default App


// import useFetch from './hooks/useFetch'

// const App = () => {
//    const [loading , error , data] = useFetch('https://dummyjson.com/test')
//     if (loading) {
//         return <h1>Loading...</h1>
//     }

//     if (error) {
//         return <h1>error occured..</h1>
//     }
//     return (
//         <>
//             <h1>Data agayaaa.</h1>
//             {data.status}
//         </>
//     )
// }

// export default App




// import React from 'react'

// const App = () => {
//     const api = import.meta.env.VITE_API_KEY

//   return (
//     <div>App {api.slice(0 , 4)}... {import.meta.env.VITE_USERNAME}</div>
//   )
// }

// export default App


import React from 'react'
import { useForm } from "react-hook-form"

const App = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <>
            <h1>React hook form</h1>
             { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </>
    )
}

export default App


// usecallback usememo
// custom hook
// enviromental variable
// react hook form
// react query