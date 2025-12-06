// import axios from 'axios'
// import { useEffect, useRef, useState } from 'react'
// import shuffleArray from 'shuffle-array';

// const App = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [index, setIndex] = useState(0);
//   const [questionMarks, setQuestionMarks] = useState(0)
//   const [result, setResult] = useState(false);

//   const input = useRef([]);

//   // use effect ka callback ko async nahi bna skta.
//   useEffect(() => {
//     axios('https://the-trivia-api.com/v2/questions')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data)

//       }).catch((err) => {
//         console.log(err);
//         setError(true)

//       }).finally(() => {
//         setLoading(false)

//       })


//   }, [])

//   const changeIndex = () => {
//     const selectedOption = input.current.find(item => item && item.checked);
//     console.log(selectedOption.value);

//     setQuestionMarks(prevVal => selectedOption.value === data[index].correctAnswer ? prevVal + 10 : prevVal)


//     if (index === data.length - 1) {
//       setResult(true)
//       return
//     }
//     setIndex(preVal => preVal + 1)

//   }

//   return (
//     <>
//       <h1>Quiz App</h1>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>Error occured ...</h1>}

//       {result && <div>
//         <h1>Final result</h1>
//         <h1>Marks {questionMarks}</h1>
//       </div>}
//       {data && !result && <div>
//         <h5>Q{index + 1}:{data[index].question.text}</h5>

//         {shuffleArray([...data[index].incorrectAnswers, data[index].correctAnswer]).map((item, i) => {
//           return <div key={`option${i}`}>
//             <input type="radio" name='question' value={item} id={i} ref={el => input.current[i] = el} />
//             <label htmlFor={i}>{item}</label>
//           </div>
//         })}
//         <br />
//         <button onClick={changeIndex}>next</button>
//       </div>}
//     </>
//   )
// }

// export default App



import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import shuffleArray from 'shuffle-array';

const App = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [index, setIndex] = useState(0);
  const [questionMarks, setQuestionMarks] = useState(0);
  const [result, setResult] = useState(false);

  const input = useRef([]);

  // Fetch Data
  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Next Question Handler
  const changeIndex = () => {
    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);

    // Add marks
    setQuestionMarks(prev =>
      selectedOption.value === data[index].correctAnswer ? prev + 10 : prev
    );

    // End condition
    if (index === data.length - 1) {
      setResult(true);
      return;
    }

    setIndex(prev => prev + 1);
  };

  return (
    <>
      <h1>Quiz App</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occurred...</h1>}

      {result && (
        <div>
          <h1>Final Result</h1>
          <h1>Marks: {questionMarks}</h1>
        </div>
      )}

      {data && !result && (
        <div>
          <h5>
            Q{index + 1}: {data[index].question.text}
          </h5>

          {shuffleArray([
            ...data[index].incorrectAnswers,
            data[index].correctAnswer
          ]).map((item, i) => (
            <div key={`option${i}`}>
              <input
                type="radio"
                id={i}
                name="question"
                value={item}
                ref={el => (input.current[i] = el)}
              />
              <label htmlFor={i}>{item}</label>
            </div>
          ))}

          <br />
          <button onClick={changeIndex}>Next</button>
        </div>
      )}
    </>
  );
};

export default App;




//  {/* {data && data.map(item => {
//         return <div key={item.id}>
//           <h5>{item.question.text}</h5>
//         </div>
//       })} */}