let selectDemon = document.getElementById("demons");
let imgs = document.getElementById("imgs");

selectDemon.addEventListener("change", ()=>{
    if(selectDemon.selectedIndex == 0){
        imgs.setAttribute("src", "");
    }
    if(selectDemon.selectedIndex == 1){
        imgs.setAttribute("src", "resource/1.gif");
    }
    if(selectDemon.selectedIndex == 2){
        imgs.setAttribute("src", "resource/2.gif");
    }
    if(selectDemon.selectedIndex == 3){
        imgs.setAttribute("src", "resource/3.gif");
    }
    if(selectDemon.selectedIndex == 4){
        imgs.setAttribute("src", "resource/4.gif");
    }
    
    if(selectDemon.selectedIndex == 5){
        imgs.setAttribute("src", "resource/5.gif");
    }
    if(selectDemon.selectedIndex == 6){
        imgs.setAttribute("src", "resource/6.gif");
    }
    if(selectDemon.selectedIndex == 7){
        imgs.setAttribute("src", "resource/7.gif");
    }
     
    
});

    let names = document.getElementById("name");
    let skill1 = document.getElementById("skill1");
    let skill2 = document.getElementById("skill2");
    let skill3 = document.getElementById("skill3");
    let mps = document.getElementById("mps");
    let hpss = document.getElementById("healthpts");
    let dmgs = document.getElementById("dmgs");
    let defs = document.getElementById("defs");
    let pts = document.getElementById("pts");
    let listchar = document.getElementById("listchar");
    let speach = document.getElementById("speach");
    let demons = document.getElementById("demons");
 
    let points = 100;
    let hpcount = 0;
    let mpcount = 0;
    let defcount = 0;
    let dmgcount = 0;
    hpss.innerHTML = hpcount;
    pts.innerHTML = points;
    mps.innerHTML = mpcount;
    defs.innerHTML = defcount;
    dmgs.innerHTML = dmgcount;

    let arrCharacter = [];
    let objCharacter = {};


    function add(set){
        switch(set){
            case "hp":
                if(points == 0 || hpcount == 100){

                }else{
                    points--;
                    hpcount++;
                    hpss.innerHTML = hpcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("hps", hpcount);
                    // localStorage.setItem("pts", points);
                }
            break;
            case "mp":
                if(points == 0 || mpcount == 100){

                }else{
                    points--;
                    mpcount++;
                    mps.innerHTML = mpcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("mps", mpcount);
                    // localStorage.setItem("pts", points);
                }
            break;
            case "def":
                if(points == 0 || defcount == 100){

                }else{
                    points--;
                    defcount++;
                    defs.innerHTML = defcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("def", defcount);
                    // localStorage.setItem("pts", points);
                }
            break;
            case "dmg":
                if(points == 0 || dmgcount == 100){

                }else{
                    points--;
                    dmgcount++;
                    dmgs.innerHTML = dmgcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("dmg", dmgcount);
                    // localStorage.setItem("pts", points);
                }
            break;
        }
    }

    function minus(set){
        switch(set){
            case "hp":
                if(hpcount == 0){

                }else{
                    points++;
                    hpcount--;
                    hpss.innerHTML = hpcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("hps", hpcount);
                    // localStorage.setItem("pts", points);
                }
            break;
            case "mp":
                if(mpcount == 0){

                }else{
                    points++;
                    mpcount--;
                    mps.innerHTML = mpcount;
                    pts.innerHTML = points;
                    localStorage.setItem("mps", mpcount);
                    localStorage.setItem("pts", points);
                }
            break;
            case "def":
                if(defcount == 0){

                }else{
                    points++;
                    defcount--;
                    defs.innerHTML = defcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("def", defcount);
                    // localStorage.setItem("pts", points);
                }
            break;
            case "dmg":
                if(dmgcount == 0){

                }else{
                    points++;
                    dmgcount--;
                    dmgs.innerHTML = dmgcount;
                    pts.innerHTML = points;
                    // localStorage.setItem("dmg", dmgcount);
                    // localStorage.setItem("pts", points);
                }
            break;
        }
    }



    function create(){
        if(names.value.trim() == "" || skill1.value.trim() == "" || skill2.value.trim() == "" || skill3.value.trim() == "" || points > 89 || selectDemon.selectedIndex == 0){
            if(names.value.trim() == ""){
                names.setAttribute("class","error");
            }else{
                names.setAttribute("class","valid");
            }
            if(skill1.value.trim() == ""){
                skill1.setAttribute("class","error");
            }else{
                skill1.setAttribute("class","valid");
            }
            if(skill2.value.trim() == ""){
                skill2.setAttribute("class","error");
            }else{
                skill2.setAttribute("class","valid");
            }
            if(skill3.value.trim() == ""){
                skill3.setAttribute("class","error");
            }else{
                skill3.setAttribute("class","valid");
            }
            if(points > 89){
                pts.setAttribute("class","error");
            }else{
                pts.setAttribute("class","valid");
            }
            if(selectDemon.selectedIndex == 0){
                selectDemon.setAttribute("class","error");
            }else{
                selectDemon.setAttribute("class","valid");
            }
        }else{ 
                objCharacter = {
                vnames: names.value,
                specialty: selectDemon.value,
                resourceimg: selectDemon.selectedIndex,
                vhp: hpcount,
                vmp: mpcount,
                vdef: defcount,
                vdmg: dmgcount,
                s1: skill1.value,
                s2: skill2.value,
                s3: skill3.value,
                btn1(){
                    return "Blood Demon Art " + this.s1 + " Attack!.";
                },
                btn2(){
                    return "Blood Demon Art " + this.s2 + " Attack!.";
                },
                btn3(){
                    return "Blood Demon Art " + this.s3 + " Attack!.";
                },

                }

                localStorage.setItem("vname", names.value);
            

            console.log(objCharacter.vnames);
            arrCharacter.push(objCharacter);
            listchar.innerHTML = "";
            for(let a of arrCharacter){
                listchar.innerHTML += 
                `
                <div class="box">
                    <img src="resource/${a.resourceimg}.gif">
                    <div class="flex1">
                        <label><b>Name:</b></label>
                        <p>${a.vnames}</p>
                    </div>
                    <div class="flex1">
                        <label><b>Specialty:</b></label>
                        <p>${a.specialty}</p>
                    </div>
                    <div class="grid2">
                        <h4>HP: <span>${a.vhp} / ${a.vhp}</span></h4>
                        <h4>MP: <span>${a.vmp} / ${a.vmp}</span></h4>
                        <h4>DEF: <span>${a.vdef} / ${a.vdef}</span></h4>
                        <h4>DMG: <span>${a.vdmg} / ${a.vdmg}</span></h4>
                    </div>
                    <div class="grid3">
                        <button onclick="btns1('${a.btn1()}')">${a.s1}</button>
                        <button onclick="btns2('${a.btn2()}')">${a.s2}</button>
                        <button onclick="btns3('${a.btn3()}')">${a.s3}</button>
                    </div>
                </div>

                `
            }
            localStorage.setItem("listcharacter", listchar.innerHTML);


            names.value = "";
            skill1.value = "";
            skill2.value = "";
            skill3.value = "";
            selectDemon.value = "";
            points = 100;
            mpcount = 0;
            hpcount = 0;
            defcount = 0;
            dmgcount = 0;
            imgs.setAttribute("src", "");
            hpss.innerHTML = hpcount;
            mps.innerHTML = mpcount;
            defs.innerHTML = defcount;
            dmgs.innerHTML = dmgcount;
            pts.innerHTML = points;

        }
    }

    function btns1(skilltxt){
        speach.innerHTML = skilltxt;
        setTimeout(function(){
            speach.innerHTML = "";
        },2000);
    }
    function btns2(skilltxt){
        speach.innerHTML = skilltxt;
        setTimeout(function(){
            speach.innerHTML = "";
        },2000);
    }
    function btns3(skilltxt){
        speach.innerHTML = skilltxt;
        setTimeout(function(){
            speach.innerHTML = "";
        },2000);
    }
    // names.addEventListener("keyup", function(e){
    //     localStorage.setItem("vname", e.target.value);
    // });
    // skill1.addEventListener("keyup", function(e){
    //     localStorage.setItem("s1", e.target.value);
    // });
    // skill2.addEventListener("keyup", function(e){
    //     localStorage.setItem("s2", e.target.value);
    // });
    // skill3.addEventListener("keyup", function(e){
    //     localStorage.setItem("s3", e.target.value);
    // });
    // selectDemon.addEventListener("change", function(e){
    //     localStorage.setItem("selectdemon", e.target.value);
    //     localStorage.setItem("imgs", )
    // });
    // document.body.onload = function(){
    //     // localStorage.setItem("vimg", );
    //     names.value = localStorage.getItem("vname");
    //     skill1.value = localStorage.getItem("s1");
    //     skill2.value = localStorage.getItem("s2");
    //     skill3.value = localStorage.getItem("s3");
    //     hpss_ = localStorage.getItem("hps");
    //     hpss.innerHTML = hpss_;
    //     pts_ = localStorage.getItem("pts");
    //     pts.innerHTML = pts_;
    //     defs_ = localStorage.getItem("def");
    //     defs.innerHTML = defs_;
    //     selectDemon.value = localStorage.getItem("selectdemon");
    //     listchar.innerHTML = localStorage.getItem("listcharacter");
    // }

    // function dlt(){
    //     localStorage.clear();
    // }

  