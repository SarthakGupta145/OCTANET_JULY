const inputBox = document.getElementById("input-box")
const listContaner = document.getElementById("list-container")

function addTask(){
    if(inputBox.value ==='')
    {
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaner.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savaData();
}
listContaner.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN")
    {
        e.target.parentElement.remove();
    }
},false);

function savaData(){
    localStorage.setItem("data",list-listContaner.innerHTML);
}

function showTask(){
    listContaner.innerHTML = localStorage.getItem("data");
}
showTask();