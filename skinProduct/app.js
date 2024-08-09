let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
const nav=document.querySelector(".navbar__menu");
let ul=document.getElementById("navbar__list");
let asul=document.getElementById("aside__list");
let products = [];
let prodimage = [];
let cart = [];


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

function changeImg(src,id){
        let idimg = document.getElementById(`img${id}`);
        if(idimg==null){
            idimg = document.getElementById(`p${id}`);  
        }
        console.log(idimg.id , products[id-1].image , prodimage[id].image , id);
        
        if(idimg.id==`img${id}`){
        idimg.src = prodimage[id].image; 
        idimg.id = `p${id}`;}
        else{
            idimg.src = products[id-1].image; 
            idimg.id = `img${id}`;  
        }
        console.log(idimg.id , products[id-1].image , prodimage[id].image , id);

    }


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
           
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
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
                    <div class="totalPrice">$${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus">+</span>
                    </div>
           `;
        }
        else totalQuantity = totalQuantity -  item.quantity;
        console.log(totalQuantity);
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

const iniApp = () => {
    // get data product
    fetch('../prodimage.json')
    .then(response => response.json())
    .then(data => {
        prodimage = data;
    })
}
iniApp();

