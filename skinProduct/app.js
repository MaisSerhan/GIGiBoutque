let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
const nav=document.querySelector(".navbar__menu");
let ul=document.getElementById("navbar__list");
let asul=document.getElementById("aside__list");
let products = [[]];
let prodimage = [];
let cart = [];
var source="2"; 

const navbar= ()=>{
    let close=document.createElement("button");
    close.innerHTML="X";
    close.setAttribute("onclick",`show("#navbar__list")`);
    ul.appendChild(close);
    close.classList.add("off");
    
    for(let i=0;i<5;i++){
        let n=`Section ${i}`;
        let c=`section${i}`;
        let a =`<a class="menu__link" id="${c}"  ></a>`;
        let li=document.createElement("li");
        li.setAttribute('class',`nav__item ${c}`);
        let li2=document.createElement("li");
        li2.setAttribute('class',`nav__item ${c}`);
        ul.appendChild(li);
        asul.appendChild(li2);
        let s = document.querySelector(`.${c}`);
        s.innerHTML=a;
        s = document.querySelector(`aside .${c}`);
        s.innerHTML=a;
    };

    let a =document.querySelector("#section4");
    a.innerHTML = "الرئيسية";
    a.setAttribute("href","../../index.html");
    a =document.querySelector("#section3");
    a.innerHTML = `<button class="on" onclick="show1('.navbar__menu #navbar__list2 ')">منتجاتنا </button>`;  
    a =document.querySelector("#section2");
    a.innerHTML = "تعرف علينا ";  
    a =document.querySelector("#section1");
    a.innerHTML = "العروض "; 

    a =document.querySelector("#aside__list #section4");
    a.innerHTML = "الرئيسية";
    a.setAttribute("href","../../index.html");
    a =document.querySelector("#aside__list #section3");
    a.innerHTML = `<button class="on" onclick="show1('#aside__list2')">منتجاتنا </button>`;  
    a =document.querySelector("#aside__list #section2");
    a.innerHTML = "تعرف علينا ";  
    a =document.querySelector("#aside__list #section1");
    a.innerHTML = "العروض "; 
    a =document.querySelector("#aside__list #section0");
    a.innerHTML = "التواصل والاستفسار "; 
     a.setAttribute("href" , "https://api.whatsapp.com/send?phone=972568515279" );
    
  };
  
  navbar();

  const minue=()=>{
    let nav1=document.querySelector(".nav1");
    let button =document.createElement("button");
    button.setAttribute("class","menu__link");
    button.setAttribute("id","minue");
    button.setAttribute("onclick", `show("#navbar__list")`);
    button.innerHTML=`<img src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg " width="40px" height="40px">`
    nav1.insertAdjacentElement("afterbegin",button);
}

minue();

let d=0;
function show(str){
    asul=document.querySelector("aside");
    let mnue=document.querySelector(str);
    let display=mnue.style.display;
    if(d==0){
        asul.classList.add("aside");
        d=1;   
    }
    else{
        asul.classList.remove("aside"); 
        d=0;
    }
  }

function show1(str){
    let mnue=document.querySelector(str);
    let cont=document.querySelector(".container ");
    let display=mnue.style.display;
    if(display=="none"){
        mnue.style.display= "flex";
        cont.classList.remove("hi");
    }
    else{
        mnue.style.display= "none";
        cont.classList.add("hi");
    }
  }

  ul=document.getElementById("navbar__list2");
  asul=document.getElementById("aside__list2");
  const product= ()=>{
      for(let i=0;i<9;i++){
        let n=`Section ${i+5}`;
        let c=`section${i+5}`;
        let a =`<a class="menu__link" id="${c}"  ></a>`;
        let li=document.createElement("li");
        li.setAttribute('class',`nav__item ${c}`);
        let li2=document.createElement("li");
        li2.setAttribute('class',`nav__item ${c}`);
        ul.appendChild(li);
        asul.appendChild(li2);
        let s = document.querySelector(`.${c}`);
        s.innerHTML=a;
        s = document.querySelector(`aside .${c}`);
        s.innerHTML=a;
      };
        let a =document.querySelector("#aside__list2 #section13");
        a.innerHTML = "اكسسوارات";
        a.setAttribute("href","../accessories/acess.html");
        a =document.querySelector("#aside__list2 #section12");
        a.innerHTML = "عطور رجالية ";    
        a.setAttribute("href","../male/male.html");
        a =document.querySelector("#aside__list2 #section11");
        a.innerHTML = " عطور نسائية ";  
        a.setAttribute("href","../femal/femal.html");
        a =document.querySelector("#aside__list2 #section10");
        a.innerHTML = "منتجات الحامل ";
        a.setAttribute("href","../pregnant/pregnant.html");
        a =document.querySelector("#aside__list2 #section9");
        a.innerHTML = "منتجات الشعر "; 
        a.setAttribute("href","../heir/heir.html");
        a =document.querySelector("#aside__list2 #section8");
        a.innerHTML = "منتجات القدم واليدين "; 
        a.setAttribute("href","../leg/leg.html");
        a =document.querySelector("#aside__list2 #section7");
        a.innerHTML = "منتجات الجسم "; 
        a.setAttribute("href","../body/body.html");
        a =document.querySelector("#aside__list2 #section6");
        a.innerHTML = "منتجات البشرة ";
        a.setAttribute("href", "../skin/index2.html");
        a =document.querySelector("#aside__list2 #section5");
        a.innerHTML = " make up ";
        a.setAttribute("href","../makeup/makeup.html");
      

      a =document.querySelector("#section13");
      a.innerHTML = "اكسسوارات";
      a.setAttribute("href","../accessories/acess.html");
      a =document.querySelector("#section12");
      a.innerHTML = "عطور رجالية ";    
      a.setAttribute("href","../male/male.html");
      a =document.querySelector("#section11");
      a.innerHTML = " عطور نسائية ";  
      a.setAttribute("href","../femal/femal.html");
      a =document.querySelector("#section10");
      a.innerHTML = "منتجات الحامل "; 
      a.setAttribute("href","../pregnant/pregnant.html");
      a =document.querySelector("#section9");
      a.innerHTML = "منتجات الشعر "; 
      a.setAttribute("href","../heir/heir.html");
      a =document.querySelector("#section8");
      a.innerHTML = "منتجات القدم واليدين ";
      a.setAttribute("href","../leg/leg.html"); 
      a =document.querySelector("#section7");
      a.innerHTML = "منتجات الجسم "; 
      a.setAttribute("href", "../body/body.html");
      a =document.querySelector("#section6");
      a.innerHTML = "منتجات البشرة ";
      a.setAttribute("href", "../skin/index2.html");
      a =document.querySelector("#section5");
      a.innerHTML = " make up ";
      a.setAttribute("href", "../makeup/makeup.html");
      
      let close2=document.createElement("button");
      close2.setAttribute("onclick",`show("#navbar__list")`);
      close2.innerHTML="X";
      asul=document.querySelector("aside");
      asul.appendChild(close2);
};
product();

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;
            let i=getindex();
            let positionProduct = products[i].findIndex((value) => value.id == item.product_id);
            let info = products[i][positionProduct];
            listCartHTML.appendChild(newItem);
            listCartHTML.appendChild(newItem);

            if(positionProduct > -1){
            newItem.innerHTML = `
                <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice"><i class="fa-solid fa-shekel-sign fa-sm" style="color: #ffffff;"></i>  ${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus">+</span>
                    </div>
           `;
        }
        else totalQuantity = totalQuantity -  item.quantity;
    })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp2 = () => {
    // get data product
    fetch('../prodimage.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDatasToHTMl();

    })
}
initApp2();

const initApp = () => {
    // get data product
    fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}

initApp();



const addDataToHTML = () => {
    let j=getindex();
    let start=getstart();
    let end=getend();
    if(products[j].length > 0) 
    {
       for(let i=start;i<end ;i++){
        let itemdiv=`<div class="itemdiv">`;
        let product=products[j][i];
        let newProduct = document.createElement('div');
        
        newProduct.dataset.id = product.id;
        newProduct.classList.add('item');
        newProduct.setAttribute("id",`item${i}`);
        
        itemdiv= itemdiv + `\n<button class="colorhave${i}" >${product.color}</button>`;
        itemdiv+="\n</div>";
        
        newProduct.innerHTML = 
        `<img src="${product.image}" loading="lazy" alt="" id="img${product.id}">
         <h2>${product.name}</h2>
       
        <div class="price"><i class="fa-solid fa-shekel-sign fa-xs" style="color: #000000;"></i>${product.price}</div>
         ${itemdiv}
        <button class="addCart">Add To Cart</button>`;
       
        newProduct.classList.add(product.class);
        if(product.class2=="hidden2"){
            newProduct.classList.add(product.class2);
        }

        listProductHTML.appendChild(newProduct);
        let src=document.getElementById(`img${product.id}`).src;
       
        newProduct = document.querySelector(`.listProduct .item .colorhave${i}`);
        newProduct.setAttribute("onclick",`changeImg( ${i}, "item${i}")`);
        
        };
    }
}
const  addDatasToHTMl = ()=> {
let j=getindex();
let start=getstart();
let end=getend();
if(products[j].length > 0) 
{
    for(let i=start;i<end ;i++){
        console.log()
        let product=products[j][i];
        if(product.lengths==1){
            srcs[i]=[1,product.image];
        }
        else if(product.lengths==2){
            srcs[i]=[2,product.image1, product.image];
        }
        else if(product.lengths==3){
            srcs[i]=[3,product.image1, product.image2, product.image];
        }
    }
}
};

function changeImg(i ,id){
let elem ="", elem1="",elem2="";
if(srcs[i][0]>=3){
elem =document.getElementById(srcs[i][3]);
}
if(srcs[i][0]>=2){
elem1 =document.getElementById(srcs[i][2]);
}
if(srcs[i][0]>=1){
elem2 =document.getElementById(srcs[i][1]); 
}

for(let j=1;j<=srcs[i][0];j++){
    if(!document.getElementById(srcs[i][j]).classList.contains("hidden")){
        document.getElementById(srcs[i][j]).classList.add("hidden");
    }
}

if(id==srcs[i][3]&&srcs[i][0]>=1){
    document.getElementById(srcs[i][1]).classList.toggle("hidden");
}
else if(id==srcs[i][2]&&srcs[i][0]==2){
    document.getElementById(srcs[i][1]).classList.toggle("hidden");
}
else if(id==srcs[i][1]&&srcs[i][0]>=2){
    document.getElementById(srcs[i][2]).classList.toggle("hidden");
}
else if(id==srcs[i][2]&&srcs[i][0]>=3){
    document.getElementById(srcs[i][3]).classList.toggle("hidden");
}
else{
    document.getElementById(srcs[i][srcs[i][0]]).classList.toggle("hidden"); 
}
}


