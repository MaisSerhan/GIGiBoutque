let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
const nav=document.querySelector(".navbar__menu");
let ul=document.getElementById("navbar__list");
let products = [];
let cart = [];


const navbar= ()=>{
    let close=document.createElement("button");
    close.innerHTML="X";
    close.setAttribute("onclick",`show("#navbar__list")`);
    ul.appendChild(close);
    close.classList.add("off");
    
    for(let i=1;i<5;i++){
    let n=`Section ${i}`;
    let c=`section${i}`;
    let a =`<a class="menu__link" id="${c}" href="#${c}" ></a>`;
    let li=document.createElement("li");
    li.setAttribute('class',`nav__item ${c}`);
    ul.appendChild(li);
    let s = document.querySelector(`.${c}`);
    s.innerHTML=a;
    };

    let a =document.querySelector("#section4");
    a.innerHTML = "الرئيسية";
    a.setAttribute("href","//gigi-boutque.vercel.app/")
    a =document.querySelector("#section3");
    a.innerHTML = `<button class="on" onclick="show1('.navbar__menu #navbar__list2 ')">منتجاتنا </button>`;  
    a =document.querySelector("#section2");
    a.innerHTML = "تعرف علينا ";  
    a =document.querySelector("#section1");
    a.innerHTML = "العروض "; 
    
  };
  
  navbar();


const minue=()=>{
  let button =document.createElement("button");
  button.setAttribute("class","menu__link");
  button.setAttribute("id","minue");
  button.setAttribute("onclick", `show("#navbar__list")`);
  button.innerHTML=`<img src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg " width="40px" height="40px">`
  nav.insertAdjacentElement("afterbegin",button);
}

minue();


function show(str){
    let ul3=document.getElementById("navbar__list2");
    let mnue=document.querySelector(str);
    let display=mnue.style.display;
    if(display=="none"){
    mnue.style.display= "flex";
    }

    else if(display=="flex"){
      mnue.style.display= "none";
      ul3.style.display="none";
    }

    else{
        mnue.style.display="flex";  
    }
  }

function show1(str){
    let mnue=document.querySelector(str);
    let display=mnue.style.display;
    if(display=="none"){
    mnue.style.display= "flex";
    }
    
    else if(display=="flex"){
        mnue.style.display= "none";
    }
    else{
        mnue.style.display="flex";  
    }
 
  }

  ul=document.getElementById("navbar__list2");
  const product= ()=>{
      for(let i=0;i<9;i++){
      let n=`Section ${i+5}`;
      let c=`section${i+5}`;
      let a =`<a class="menu__link" id="${c}" href="#${c}" ></a>`;
      let li=document.createElement("li");
      li.setAttribute('class',`nav__item ${c}`);
      ul.appendChild(li);
      let s = document.querySelector(`.${c}`);
      s.innerHTML=a;
      };
      let a =document.querySelector("#section13");
      a.innerHTML = "اكسسوارات";
      a.setAttribute("href","//gigi-boutque.vercel.app/")
      a =document.querySelector("#section12");
      a.innerHTML = "عطور رجالية ";    
      a =document.querySelector("#section11");
      a.innerHTML = " عطور نسائية ";  
      a =document.querySelector("#section10");
      a.innerHTML = "منتجات الحامل "; 
      a =document.querySelector("#section9");
      a.innerHTML = "منتجات الشعر "; 
      a =document.querySelector("#section8");
      a.innerHTML = "منتجات القدم واليدين "; 
      a =document.querySelector("#section7");
      a.innerHTML = "منتجات الجسم "; 
      a =document.querySelector("#section6");
      a.innerHTML = "منتجات البشرة ";
      a =document.querySelector("#section5");
      a.innerHTML = " make up ";
      a.style.color="#b69292"
};
  
product();



iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('a');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.setAttribute("href","#2");
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
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
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
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
    fetch('products.json')
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





let s=document.querySelector(`[class="item]`);
console.log(s);