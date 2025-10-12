// console.log("hello world");


// lexical scope
// closure


// function outerFunc(){
//     console.log("outer function");
//     let outerVar = "abc"

//     function innerFunc(){
//         let innerVar = "cde"
//         console.log("inner function" , outerVar , innerVar );

//     } 

//     return innerFunc
// }


// outerFunc()()
// let secondFunc = outerFunc()
// secondFunc()







const div = document.querySelector(".container");
const btnDiv = document.querySelector(".btns");

const btnItems = ["all posts"]
let allPost;

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        allPost = res
        res.map(item => {
            !btnItems.includes(item.userId) ? btnItems.push(item.userId) : null
            div.innerHTML += `
         <div class="children">
            <h1>Title: ${item.title}</h1>
            <p>body: ${item.body}</p>
            <p>user id: ${item.userId}</p>
        </div>
        `
        })

        // ya bilawaja lagaya ha is sa shyd code quality kahrab ho.
        btnItems.map((item, index) => {
            btnDiv.innerHTML += `<button onclick="testing(${index})">userId ${item}</button>`
        })

        console.log(btnItems);


    })
    .catch(err => console.log(err))
    .finally(() => console.log("finally laazmi chalaiga"))




function testing(index) {
    div.innerHTML = ""
    console.log(index + 1);
    const filteredProduct = allPost.filter(item => item.userId === index + 1)
    console.log(filteredProduct);

    filteredProduct.map(item => {
        div.innerHTML += `
         <div class="children">
            <h1>Title: ${item.title}</h1>
            <p>body: ${item.body}</p>
            <p>user id: ${item.userId}</p>
        </div>
        `
    })

}


