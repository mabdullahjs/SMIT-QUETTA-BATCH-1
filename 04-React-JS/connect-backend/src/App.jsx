import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = 'http://localhost:3000/'
  useEffect(() => {
    axios(`${url}todos`)
      .then(res => {
        console.log(res);
        setTodo(res.data)

      }).catch(err => {
        console.log(err);
        setError(true)

      }).finally(() => {
        setLoading(false)
      })
  }, [])


  const addTodo = (event) => {
    event.preventDefault();
    console.log(title, description);

    axios.post(`${url}todo`, {
      title, description
    }).then((res) => {
      console.log(res);
      setTodo([...todo, res.data.todo])

    }).catch(err => {
      console.log(err);

    })



  }


  const deleteTodo = (id) => {
    axios.delete(`${url}todo/${id}`)
      .then(res => {
        console.log(res.data);
        const index = todo.findIndex(item => item.id == id);

        todo.splice(index , 1);
        setTodo([...todo]);

      }).catch((err) => {
        console.log(err);

      })
  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter title' onChange={e => setTitle(e.target.value)} value={title} />
        <input type="text" placeholder='enter description' onChange={e => setDescription(e.target.value)} value={description} />
        <button type='submit'>add Todo</button>
      </form>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured...</h1>}
      {todo.length > 0 ? todo.map(item => {
        return <div key={item.id}
          style={{
            margin: '10px 0px',
            padding: '10px',
            border: '1px solid black',
            borderRadius: '5px'
          }}
        >
          <h2>{item.title}</h2>
          <h5>{item.description}</h5>
          <button onClick={() => deleteTodo(item.id)}>delete</button>
          <button>edit</button>
        </div>
      }) : <h1>No todo Found..</h1>}

    </>
  )
}

export default App