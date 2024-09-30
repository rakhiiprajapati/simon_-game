// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//   event.stopPropagation();
//   console.log("div was cliked");
// });
// ul.addEventListener("click",function(event){
//   event.stopPropagation();
//   console.log("ul was cliked");
// });

// for(li of li){
//   li.addEventListener("click",function(){
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

// let btn = document.querySelector("input");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click",function(){///
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delBtn = document.createElement("button");
//   delBtn.innerText = "delete";
//   btn.classList.add("delete");
//   item.appendChild(delBtn);
//   ul.appendChild(item);
//   inp.value="";
//   // console.log("clicked!!");
// });
///semor game//
// let gameSql=[];
// let userSql =[];

// let btns =["yellow","red","green","purple"];

// let started = false;
// let level = 0;


// let h2 =document.querySelector("h2");

// document.addEventListener("keypress",function(){
//   if(started ==false){
//     console.log("game was started");
//     started = true;


//     levelUp();
//   }
// });

// function gameFlash(btn){
//   btn.classList.add("flash");
//   setTimeout(function(){
//     btn.classList.remove("flash");
//   },250);
// }

// function userFlash(btn){
//   btn.classList.add("userflash");
//   setTimeout(function(){
//     btn.classList.remove("userflash");
//   },250);
// }


// function levelUp(){
//   level++;
//   h2.innerText=`level ${level}`;

//   let randIdx = Math.floor(Math.random()*3);
//   let randColor = btns[randIdx];
//   let randBtn = document.querySelector(`.${randColor}`);

//   gameSql.push(randColor);
//   console.log(gameSql);
//   // console.log(randIdx);
//   // console.log(randColor);
//   // console.log(randBtn);

//   gameFlash(randBtn);

// }

// function btnPress(){
//   console.log(this);
//   let btn = this;
//   userFlash(btn);

// }
// let allBtns = document.querySelectorAll(".btns");
// for(btns of allBtns){
//   btns.addEventListener("click",btnPress );
// }
let gameSeq=[];
let userSeq=[];
// let highestscore=0;
let btns=["yellow","red","blue","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

//starting game
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

//button flash
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    // if(level>highestscore){
    //     highestscore=level;
        
    // }
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randBtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    calculateHighestScore(level);
}

// function updateHighestScore()
// {
//     h3.innerText = `Highest Score: ${highestscore}`;
// }
function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
       if(userSeq.length===gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game Over!! <b>Your Score: ${level}<b><br>Press any key to continue`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="lightgoldenrodyellow";
        },150)
        reset();
    }
}
//button event listener  controlled by user
function btnPress(){
    
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
//restarting game after getting over
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

let highestscore=0;
function calculateHighestScore(score){
    highestscore=Math.max(highestscore,score); 
    updateHighestScore();
}

function updateHighestScore() {
    h2.innerText = `Level ${level} \n Highest Score: ${highestscore}`;

}