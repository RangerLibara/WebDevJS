let btnstart = document.getElementById("btnstart");
let modal = document.getElementById("startBox");
let min = document.getElementById("mins");
let secs = document.getElementById("sec");
let lvl = document.getElementById("lvlquiz");
let startContainer = document.querySelector(".container-box");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let op = document.getElementById("op");
let enter = document.getElementById("enter");
let answer = document.getElementById("inputNum");
let statuss = document.getElementById("status");
let scores = document.getElementById("score");
let btn1 = document.getElementById("nums1");
let btn2 = document.getElementById("nums2");
let btnSelect = document.getElementById("btnSelect");
let input_div = document.getElementById("input-div");
let quiz = document.getElementById("quiz");
let over = document.getElementById("over");


let mins = 4;
let sec = 59;
let time = 300;
let score = 0;
let count = 1;
let _num1 = null;
let _num2 = null;
let ans = null;


min.innerHTML = mins;
secs.innerHTML = sec;

function start(){
    startContainer.remove();

     _num1 = Math.floor(Math.random() * 100);
     _num2 = Math.floor(Math.random() * 100);

    console.log(num1);
    console.log(num2);
    lvl.innerHTML = "1.1 Addition";
    num1.innerHTML = _num1;
    num2.innerHTML = _num2;
    op.innerHTML = "+";
    console.log(count);
    scores.innerHTML = score;
    over.innerHTML = "/ 3";

    let loop = setInterval(function(){
        sec--;
        secs.innerHTML = sec;

        if(sec == 0){
            mins--;
            min.innerHTML = mins;
            sec = 60;

            if(mins == 0){
                clearInterval(loop);
                alert(`Game Over! Score: ${score}`);
                window.location.reload();
            }
        }
        
    }, 1000);
    btnSelect.style.display = "none";
    count++;
}

enter.addEventListener("click", ()=>{
        if(count <= 3){
            ans = _num1 + _num2;
            console.log(ans);
            if(answer.value.trim() == ans){
                checking();
                score++;
            }else{
                wrong();
            }
            scores.innerHTML = score;
            
        }
        else if(count >= 4 && count <= 7){
            ans = _num1 - _num2;
            console.log(ans);
            if(answer.value.trim() == ans){
                checking();
                score++;
            }else{
                wrong();
            }
            scores.innerHTML = score;
        }
        else if(count >= 8 && count <= 11){
            ans = _num1 / _num2;
            console.log(ans);
            if(answer.value.trim() == ans){
                checking();
                score++;
            }else{
                wrong();
            }
            scores.innerHTML = score;
        }
        else if(count >= 12 && count <= 15){
             ans = _num1 * _num2;
            console.log(ans);
            if(answer.value.trim() == ans){
                checking();
                score++;
            }else{
                wrong();
            }
            scores.innerHTML = score;
        }
        else if(count >= 16 && count <= 20){
            
        }
    
// LEVEL 1 
    if(count <= 3){
         _num1 = Math.floor(Math.random() * 100);
         _num2 = Math.floor(Math.random() * 100);

        lvl.innerHTML = "1.1 Addition";
        num1.innerHTML = _num1;
        num2.innerHTML = _num2;
        op.innerHTML = "+";
        console.log(count);
        count++;
        btnSelect.style.display = "none";
        ans = _num1 + _num2;
        console.log(ans);
        over.innerHTML = "/ 3";
        
    }
    else if(count >= 4 && count <= 7){
         _num1 = Math.floor(Math.random() * 100);
         _num2 = Math.floor(Math.random() * 100);

        lvl.innerHTML = "1.2 Subtraction";
        num1.innerHTML = _num1;
        num2.innerHTML = _num2;
        op.innerHTML = "-";
        console.log(count);
        count++;
        btnSelect.style.display = "none";
        ans = _num1 - _num2;
        over.innerHTML = "/ 7";
    }
    else if(count >= 8 && count <= 11){
         _num1 = Math.floor(Math.random() * 100);
         _num2 = Math.floor(Math.random() * 100);
        
        lvl.innerHTML = "1.3 Division";
        num1.innerHTML = _num1;
        num2.innerHTML = _num2;
        op.innerHTML = "/";
        console.log(count);
        count++;
        btnSelect.style.display = "none";
         ns = _num1 / _num2;
         over.innerHTML = "/ 11";
    }
    else if(count >= 12 && count <= 15){
         _num1 = Math.floor(Math.random() * 100);
         _num2 = Math.floor(Math.random() * 100);

        lvl.innerHTML = "1.4 Multiplication";
        num1.innerHTML = _num1;
        num2.innerHTML = _num2;
        op.innerHTML = "*";
        console.log(count);
        count++;
        btnSelect.style.display = "none";
        let ans = _num1 * _num2;
        over.innerHTML = "/ 15";
    }
    else if(count >= 16 && count <= 20){
        input_div.style.display = "none";
        btnSelect.style.display = "flex";

        _num1 = Math.floor(Math.random() * 500);
        _num2 = Math.floor(Math.random() * 500);

        lvl.innerHTML = "2.1 Addition";
        num1.innerHTML = _num1;
        num2.innerHTML = _num2;
        op.innerHTML = "+";
        console.log(count);
        count++;
        ans = _num1 + _num2;

        btn1.innerHTML = _num1;
        btn2.innerHTML = ans
        over.innerHTML = "/ 20";
    }
    answer.value = "";
 
});

function checking(){
    statuss.innerHTML = "Correct!";
    statuss.setAttribute("id","statuss");

    let _time = setTimeout(function(){
        statuss.innerHTML = "";
        statuss.setAttribute("id","stats");
    },1000);
}

function wrong(){
    statuss.innerHTML = "Wrong!";
    statuss.setAttribute("id","statusss");
    let _times = setTimeout(function(){
        statuss.innerHTML = "";
        statuss.setAttribute("id","stats");
    },1000);
}


