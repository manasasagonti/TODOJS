var CardContainer=document.getElementsByClassName("CardContainer");
var tasknamevalue=document.getElementById("tasknamevalue");
var popup=document.getElementsByClassName("popup");
var noitem=document.getElementById("noitem");
var blurs=document.getElementsByClassName("blur");
var subpopupcontainer=document.getElementsByClassName("container1");
var singleCard=document.getElementById("singleCard");
var parents=document.getElementById("parent");
let isSingleCard=false
// function showpopup(){
//     //blurs[0].style.display="block";
//     popup[0].classList.remove("hide");

// }

function hidepopup(){
    popup[0].classList.add("hide");
    blurs[0].style.display= "none";
    
}
function showpopup(){
    blurs[0].style.display="block";
    popup[0].classList.remove("hide");
}
function addcard(){
    noitem.classList.add("hide");
    popup[0].classList.add("hide");
    blurs[0].style.display= "none";
    
    let card=document.createElement("div");
    
    let cardheading=document.createElement("h1");
    let line=document.createElement("hr");
    let tasklist=document.createElement("div");
    let addbutton=document.createElement("i");
    let delbutton=document.createElement("i");


    CardContainer[0].appendChild(card);
    card.appendChild(cardheading);
    card.appendChild(line);
    card.appendChild(tasklist);
    card.appendChild(addbutton);
    card.appendChild(delbutton);


    cardheading.innerHTML=tasknamevalue.value;
    card.classList.add("taskcontainer");
    cardheading.setAttribute("class", "taskname");
    addbutton.setAttribute("class",'fa-solid fa-circle-plus size')
    delbutton.setAttribute("class","fa-solid fa-trash del");
    tasknamevalue.value = "";


    delbutton.addEventListener("click", ()=>{
        card.remove();
        if(CardContainer[0].innerText ===''){
            noitem.classList.remove('hide');
        }

    })
    addbutton.addEventListener("click", ()=>subaddtaskbtn(tasklist)); 
    cardheading.addEventListener("click", ()=>{
        singleCard.classList.remove("hide");
        CardContainer[0].classList.add("hide");
        isSingleCard=true
        var copycard=card.cloneNode(true);
        singleCard.appendChild(copycard);

        parents.firstElementChild.classList.remove("hide");
        copycard.lastElementChild.addEventListener("click", ()=>{
            copycard.remove();
            card.remove();
            back();
        })
        const copytasklist=copycard.querySelector('div')
        copycard.lastElementChild.previousElementSibling.addEventListener("click", ()=>subaddtaskbtn(tasklist,copytasklist))
        
        
        
    })
    
    
    
    
}



function subaddtaskbtn(tasklist,copytasklist){

    subpopupcontainer[0].classList.remove("hide");
    // blurs[0].style.display="block";
    
    
    // popup.classList.remove("hide");
    // blur.classList.add("hide");
    //subtaskpopup window


    blurs[0].style.display="block";
    //popup[0].classList.remove("hide");
   let subaddtaskpopupheading=document.createElement("h3");
   let subaddtaskpopupname=document.createElement("input");
   let buttondiv=document.createElement("div");
   let subaddtaskpopupaddbtn=document.createElement("button");
   let subaddtaskpopupclosebtn=document.createElement("button");




    subaddtaskpopupname.setAttribute("placeholder","please enter item");
    subpopupcontainer[0].appendChild(subaddtaskpopupheading);
    subpopupcontainer[0].appendChild(subaddtaskpopupname);
    subpopupcontainer[0].appendChild(buttondiv);
    buttondiv.appendChild(subaddtaskpopupaddbtn);
    buttondiv.appendChild(subaddtaskpopupclosebtn);


    
    buttondiv.setAttribute("class","buttonflex")
    subaddtaskpopupheading.innerHTML="Add New Item";
    subaddtaskpopupaddbtn.innerHTML="Add";
    subaddtaskpopupclosebtn.innerHTML="Close";


    subaddtaskpopupaddbtn.addEventListener('click',()=>additemfunc())

        subaddtaskpopupclosebtn.addEventListener("click",() =>{
        blurs[0].style.display="none";
        subpopupcontainer[0].classList.add("hide");
        subpopupcontainer[0].innerHTML="";

    })
//add item 

function additemfunc(){
        blurs[0].style.display="none";
        let item=document.createElement('div');
        let itemtext=document.createElement('span');
        let markdone=document.createElement('button');

        item.append(itemtext);
        item.append(markdone);


        itemtext.innerHTML=subaddtaskpopupname.value;
        markdone.innerHTML="mark done";
        item.setAttribute("class", "div");
        itemtext.setAttribute("class","span");
        markdone.setAttribute("class","markdone");
       
        if (isSingleCard){

        let itemclone=item.cloneNode(true)
        //###############################cretae here############################
        // markdone.addEventListener("click",() =>{
        // copytasklist.itemtext.style.textDecoration="line-through";
        // markdone.classList.add("hide");
        
    // })// we have to edit here
    // itemclone.lastElementChild.addEventListener("click",()=>{
    //     console.log(itemclone);
    //     itemclone.lastElementChild.classList.add("hide")
    //     itemclone.lastElementChild.previousElementSibling.style.textDecoration="line-through";
    //     // console.log(co);
    //     // let co1=co.cloneNode(true);
        // console.log(co1);
    //     tasklist.lastElementChild.style.textDecoration="line-through";
        // tasklist.lastElementChild.
        // tasklist.appendChild(co1);
        
    // })
     itemclone.lastElementChild.addEventListener("click",()=>{
        itemclone.lastElementChild.classList.add("hide")
        itemclone.lastElementChild.previousElementSibling.style.textDecoration="line-through";
        markdones();
        console.log(tasklist.lastElementChild)
     })
    


    //add item in copy card list
    copytasklist.appendChild(itemclone);
    
}
        tasklist.appendChild(item);
        
        subpopupcontainer[0].classList.add("hide");



        subpopupcontainer[0].innerHTML="";


    markdone.addEventListener("click",() =>{
        // itemtext.style.textDecoration="line-through";
        // markdone.classList.add("hide");
        markdones();
        
    })
    function markdones(){
        itemtext.style.textDecoration="line-through";
        markdone.classList.add("hide");
        // itemclone.lastElementChild.previousElementSibling.style.textDecoration="line-through";

    }
}

    }

function back(){
    parents.firstElementChild.classList.add("hide");
    singleCard.classList.add("hide");
    CardContainer[0].classList.remove("hide");
    singleCard.innerText="";
    isSingleCard=false

}
