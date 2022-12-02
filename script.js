function addMore(){
    document.getElementById("error").innerText="";


    let name = document.getElementById('name').value;
    if(name == ''){
        document.getElementById("error").innerText="Please Enter Task";
    }else{
        let box = document.getElementById('box');

        let li = document.createElement("li");
        li.innerText = name;
        box.appendChild(li)

        let done= document.createElement('span');
        done.innerHTML="<input type='submit' value='Done Task'>";
        li.appendChild(done);

        done.addEventListener('click', ()=>{
            li.classList.toggle('striketask');
        })

        let a= document.createElement('a');
        a.innerHTML="Delete Task" + ' <i class="fa-sharp fa-solid fa-trash"></i> ' ;
        a.href="#";
        li.appendChild(a);
    }

    document.getElementById('name').value="";
} 

let btn = document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box = document.getElementById('box');

    let li = e.target.parentNode;
    box.removeChild(li);
})


// 
function removeAll(){
    document.querySelector('#box').innerHTML='';  //id of ul i.e., #box [where tasks are getting stored] 
}