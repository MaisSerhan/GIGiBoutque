const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
           for(let i=0;i<0 ;i++){
                let product=products[i];
                let newProduct = document.createElement('a');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.setAttribute("href","#2");
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="" id="img${product.id}" >
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
                let m=document.getElementById(`img${product.id}`);
                let src=m.src;
                newProduct = document.getElementById(`img${product.id}`);
                newProduct.setAttribute("onclick",`changeImg( "${src}" ,${product.id} )`);
            };
        }
    }
let s=document.getElementById("section13");
s.style.color="#b69292";
s=document.querySelector("aside #section13");
s.style.color="#b69292";