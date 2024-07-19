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
            ${itemdiv}
            <div class="price">$${product.price}</div>
            
            <button class="addCart">Add To Cart</button>`;
            listProductHTML.appendChild(newProduct);
            console.log(product.id)
            let m=document.getElementById(`img${product.id}`);
            let src=m.src;
            console.log(src)
            newProduct = document.querySelector(`.listProduct .item .colorhave${i}`);
            newProduct.setAttribute("onclick",`changeImg( "${src}" ,${product.id} )`);
            };
        }
    }

let s=document.getElementById("section5");
s.style.color="#b69292";
s=document.querySelector("aside #section5");
s.style.color="#b69292";