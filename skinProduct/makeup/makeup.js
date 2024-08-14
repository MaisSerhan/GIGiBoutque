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
           for(let i=0;i<12 ;i++){
            let itemdiv=`<div class="itemdiv">`;
            let product=products[i];
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            
            itemdiv= itemdiv + `\n<button class="colorhave${i}" >${product.color}</button>`;
            itemdiv+="\n</div>";
            
            let s=product.id;
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="" id="img${product.id}" >
            <h2>${product.name}</h2>
           
            <div class="price"><i class="fa-solid fa-shekel-sign fa-xs" style="color: #000000;"></i>${product.price}</div>
             ${itemdiv}
            <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
            let m=document.getElementById(`img${product.id}`);
            let src=m.src;
            console.log(product.id);
            newProduct = document.querySelector(`.listProduct .item .colorhave${i}`);
            newProduct.setAttribute("onclick",`changeImg( "${src}" ,${s},".listProduct .item .colorhave${i}")`);
            };
        }
    }

    function changeImg(src,id,l){
        let i=document.querySelector(l);
        let idimg = document.getElementById(`img${id}`);
        if(idimg==null){
            idimg = document.getElementById(`p${id}`);  
        }
        console.log(idimg.id , products[id-1].image , prodimage[id].image , id);
        console.log(idimg.src  , (prodimage[id].image),prodimage[id].two,prodimage[id].two!="two",idimg.src.includes((prodimage[id].image).substring(2)) && prodimage[id].two!="two");
        if(idimg.id==`img${id}`){
        i.innerHTML=prodimage[id].color;
        idimg.src = prodimage[id].image; 
        idimg.id = `p${id}`;
    console.log("f1");}
        else if(idimg.src.includes((prodimage[id].image).substring(2)) && prodimage[id].two!="two"){
            idimg.src = prodimage[id].image1; 
            i.innerHTML=prodimage[id].color1;
            idimg.id = `p${id}`;
            console.log("f2");
        }
        else{
            idimg.src = products[id-1].image; 
            idimg.id = `img${id}`; 
            i.innerHTML=products[id-1].color;
            console.log("f3");
        }
        console.log(idimg.id , products[id-1].image , prodimage[id].image , id);

    }

let s=document.getElementById("section5");
s.style.color="#b69292";
s=document.querySelector("aside #section5");
s.style.color="#b69292";