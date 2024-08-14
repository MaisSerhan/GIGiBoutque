const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        
        
        if(products.length > 0) // if has data
        {
           for(let i=4;i<6 ;i++){
                let itemdiv=`<div class="itemdiv">`;
                let product=products[i];
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                
               let color=product.color;
                console.log(color);
                itemdiv= itemdiv + `\n<p>${product.type}</p> <li class="l" style="background-color:${color}"></li>`;
                itemdiv+="\n</div>";
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="" id="img${product.id}" >
                <h2>${product.name}</h2>
                ${itemdiv}
                <div class="price">$${product.price}</div>
                
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
                let m=document.getElementById(`img${product.id}`);
                let src=m.src;
                newProduct = document.querySelector(`.listProduct .item .l`);
                newProduct.setAttribute("onclick",`changeImg( "${src}" ,${product.id} )`);
            };
        }
    }

let s=document.getElementById("section6");
s.style.color="#b69292";
s=document.querySelector("aside #section6");
s.style.color="#b69292";