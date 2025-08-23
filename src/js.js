const input = document.getElementById("input");
const lTodo = document.getElementById("lTodo");
const btn = document.getElementById("btn");

function addTask(){
    if(input.value==''){
        alert('pleas right your task')
    }else{
        let li=document.createElement('li')
        li.innerHTML=input.value
        lTodo.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    input.value=''
    saveData()
}

lTodo.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('cheacked')
        saveData()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

const saveData=()=>{
    localStorage.setItem("data",lTodo.innerHTML)
}
const showList=()=>{
    lTodo.innerHTML=localStorage.getItem("data")
}
showList()