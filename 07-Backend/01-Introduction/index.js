import express from 'express'

const app = express()
const port = 3000

// middleware
app.use(express.json())

const todo = [
    {
        id: 1,
        title: "hello world",
        description: "lorem ipsum"
    },
]


app.get("/", (req, res) => {
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

    todo.push({
        title, description, id: Date.now()
    })

    res.status(201).json({
        message: "New todo added"
    })
})



// delete todo

app.delete("/todo/:id", (req, res) => {
    const { id } = req.params
    const index = todo.findIndex(item => item.id === +id)
    if(index === -1){
        return res.status(404).json({
            message: "no todo found with this id"
        })
    }
    todo.splice(index , 1);
    res.status(200).json({
        message: "todo deleted"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
