import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'Todo',
    initialState: {
        todos: [
        {
            id: nanoid(),
            title: 'hello world'
        }
    ]
    },
    reducers: {
        addTodo: (state , action)=>{
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })
            
        },
        removeTodo: (state , action) => {
            const findIndex = state.todos.findIndex(item => item.id === action.payload.id)
            state.todos.splice(findIndex , 1);
            
        }
    }
})


export const { addTodo, removeTodo } = todoSlice.actions 

export default todoSlice.reducer