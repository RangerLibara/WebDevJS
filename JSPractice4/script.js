let skill = document.getElementById("inputskill");
let values = document.getElementById("skillvalue");
let btnadd = document.getElementById("btnadd");
let container = document.getElementById("container");


btnadd.addEventListener("click", (e)=>{
    let skillcontainer = document.createElement("div");
    let newskill = document.createElement("div");
    let title = document.createElement("h1");
    let btndlt = document.createElement("button");
    let parentdiv = document.createElement("div");
    let childdiv = document.createElement("div");
    

    if(skill.value == "" || values.value == "" || values.value < 0 || values.value > 100){
        
        if(skill.value == ""){
            alert("Input Skill Name");
        }
        if(values.value == ""){
            alert("Input Value");
        }
        if(values.value < 0 || values.value > 100){
            alert("Value must be between 0 to 100");
        }
        
    }else{
    title.innerHTML = skill.value;
    btndlt.innerHTML = "Remove";
    childdiv.innerHTML = values.value +"%";

    newskill.setAttribute("id", "child-container");
    container.append(newskill);

    btnadd.setAttribute("id", "btnadd");
    newskill.append(btndlt);
    
    skillcontainer.setAttribute("id", "child-container");
    btndlt.setAttribute("id", "btn");
    parentdiv.setAttribute("id", "parentbox");
    
    
    btndlt.after(title);
    title.after(parentdiv);
    parentdiv.append(childdiv);

    childdiv.style.width = values.value+"%";
    childdiv.style.height = "100%";
    childdiv.style.backgroundColor = "pink";

    btndlt.addEventListener("click", function(){
        newskill.remove();
    })
}
});