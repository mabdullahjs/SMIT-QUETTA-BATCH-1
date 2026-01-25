import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000


// middleware
app.use(cors())
app.use(express.json())

function checkmiddleware(req , res , next) {
    console.log("middleware check");
    next()

}

const todo = [
    {
        id: 1,
        title: "hello world",
        description: "lorem ipsum"
    },
]


app.get("/", checkmiddleware, (req, res) => {
    res.send("My first API")
})

// get all todo

app.get('/todos', (req, res) => {
    res.status(200).json(todo)
})


// add todo

app.post("/todo", (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        res.json({
            message: "Data is required",
        });
        return;
    }
    console.log(title, description);
    
    const newTodo = {
        title, description, id: Date.now()
    }

    todo.push(newTodo)

    res.status(201).json({
        message: "New todo added",
        todo: newTodo
    })
})



// delete todo

app.delete("/todo/:id", (req, res) => {
    const { id } = req.params
    const index = todo.findIndex(item => item.id === +id)
    if (index === -1) {
        return res.status(404).json({
            message: "no todo found with this id"
        })
    }
    todo.splice(index, 1);
    res.status(200).json({
        message: "todo deleted"
    })
})


app.put('/todo/:id' , (req , res)=>{
    const {id} = req.params;
    const {title , description} = req.body;
    const index = todo.findIndex(item => item.id == id);

    if(index === -1){
        return res.status(404).json({
            message: "item not found."
        })
    }


    todo[index].title = title
    todo[index].description = description

    res.status(200).json({
        message: "todo updated",
        updatedTodo: todo[index]
    })
    
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// cors