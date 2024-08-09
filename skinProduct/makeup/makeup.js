/*var lastScrollTop = 0;

let navs = document.querySelector("#navbar__list2");

window.addEventListener("scroll", function(){

var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
console.log(navs);
if (scrollTop > lastScrollTop){ 
  navs.style.display="none";

} 
else { navs.style.display="flex";

}

lastScrollTop = scrollTop;
});

*/

const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
           for(let i=0;i<5 ;i++){
            let itemdiv=`<div class="itemdiv">`;
            let product=products[i];
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            
            itemdiv= itemdiv + `\n<button class="colorhave${i}" >${product.color}</button>`;
            itemdiv+="\n</div>";
            console.log(product.id)
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="" id="img${product.id}" >
            <h2>${product.name}</h2>
           
            <div class="price">$${product.price}</div>
             ${itemdiv}
            <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
            let m=document.getElementById(`img${product.id}`);
            let src=m.src;
            newProduct = document.querySelector(`.listProduct .item .colorhave${i}`);
            newProduct.setAttribute("onclick",`changeImg( "${src}" ,${product.id} )`);
            };
        }
    }

let s=document.getElementById("section5");
s.style.color="#b69292";
s=document.querySelector("aside #section5");
s.style.color="#b69292";