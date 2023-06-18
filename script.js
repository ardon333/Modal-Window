const openBtn=document.getElementById("open-btn");
const modalContainer=document.getElementById("modal-container");
const closeBtn=document.getElementById("close-btn");

openBtn.addEventListener("click",function(e){
     modalContainer.style.display="inline-block";
},function(e){console.log("hello world")});

closeBtn.addEventListener("click",function(e){
    modalContainer.style.display="none";
})

window.addEventListener("click",function(e){
    if(e.target===modalContainer)
    modalContainer.style.display="none";
})




// const node1=document.querySelectorAll("li");
// const obj1={
//     0:"This is a line",
//     1: 10,
//     2: "Hello world",
//     length:3
// }

// console.log(document.querySelector("#modal"))
// console.log(Array.from(obj1));
// console.log(node1);
// console.log(`Type:${typeof node1}`)

// const list1=document.querySelector(".list");

// const message=document.createElement("div");

// message.innerHTML="This has been added by javascript <br><button>LINK UP</button>"



