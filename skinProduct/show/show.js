var srcs=[];
let sh1=0;
let sh2=0;
var sessionString = sessionStorage.getItem('array');
var pageArray =  JSON.parse(sessionString);
let i=pageArray[0];
let id=pageArray[1];
let first=pageArray[2];
let len=pageArray[3];
yes="yes";

let tit=document.querySelector("title");
//console.log(document.querySelector(`#item${first} .name` ));

function getstart(){
    return first;
}
function getend(){
    return first+len;
}

if(document.querySelector(`.colorhave${i}`)!=null)
document.querySelector(`.colorhave${i}`).classList.add("hidden");


function addet(){
let inner="";
let item=document.querySelector(`#item${first}`);
let list=document.querySelector(`.container .listProduct`);
let hidd=document.querySelectorAll(`.container .listProduct div.item`);
let bool="";
hidd.forEach(items => {
let news=document.createElement("div");
news.setAttribute("class","imgs");    
hidd.forEach(itemss => {
let im=document.createElement("img");
im.setAttribute("src",document.querySelector(`.container .listProduct div#${itemss.id} img`).src);
im.setAttribute("loading","lazy");
im.setAttribute("id",`img${id}`);
im.setAttribute("onclick",`changeImg( ${itemss.id.substring(4)-1}, "item${itemss.id.substring(4)-1}")`);
document.querySelector(`.container .listProduct div#${itemss.id} img`).setAttribute("onclick",`changeImg( ${itemss.id.substring(4)}, "item${itemss.id.substring(4)}")`);
if(itemss.id.substring(4)==first){
    im.setAttribute("onclick",`changeImg( ${first+len-1}, "item${first+len-1}")`);
}
news.appendChild(im);
if(itemss.classList.contains("write")){
    bool="write";
}
});
if(bool!="write")
items.appendChild(news);
});

tit.innerText=document.querySelector(`#item${first} .name` ).innerText;
}