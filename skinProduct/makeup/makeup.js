let col=[];
var srcs=[];
const startingTime = performance.now();
const addDataToHTML = () => {
        if(products.length > 0) 
        {
           for(let i=0;i<12 ;i++){
            let itemdiv=`<div class="itemdiv">`;
            let product=products[i];
            let newProduct = document.createElement('div');
            
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.setAttribute("id",`item${i}`);
            
            itemdiv= itemdiv + `\n<button class="colorhave${i}" >${product.color}</button>`;
            itemdiv+="\n</div>";
            
            newProduct.innerHTML = 
            `<img src="${product.image}" loading="lazy" alt="" id="img${product.id}" >
             <h2>${product.name}</h2>
           
            <div class="price"><i class="fa-solid fa-shekel-sign fa-xs" style="color: #000000;"></i>${product.price}</div>
             ${itemdiv}
            <button class="addCart">Add To Cart</button>`;
           
            listProductHTML.appendChild(newProduct);
            let src=document.getElementById(`img${product.id}`).src;
           
            newProduct = document.querySelector(`.listProduct .item .colorhave${i}`);
            newProduct.setAttribute("onclick",`changeImg( "${src}" ,${i},".listProduct .item .colorhave${i}")`);
            };
        }
    }
    
const  addDatasToHTMl = ()=> {
    if(products.length > 0) 
    {
        for(let i=0;i<11 ;i++){
            let product=products[i];

            if(product.lengths==1){
                srcs[i]=[1,product.image];
            }
            else if(product.lengths==2){
                srcs[i]=[2,product.image1, product.image];
                col[i]=[2,product.color1, product.color];
            }
            else if(product.lengths==3){
                srcs[i]=[3,product.image1, product.image2, product.image];
                col[i]=[3,product.color1, product.color2, product.color];
            }
        }
    }
};
    
function changeImg(src,i,color){
    const startingTime = performance.now();
    let button=document.querySelector(color);
    let img = document.getElementById(`img${i+1}`);

    if(srcs[i][0]!=1){
        if( img.src.includes(srcs[i][srcs[i][0]].substring(2))){
            button.innerHTML=col[i][1];
            img.src = srcs[i][1]; 
        } 
        else if(srcs[i][0]>2 & img.src.includes(srcs[i][1].substring(2))  ){
            button.innerHTML=col[i][2];
            img.src = srcs[i][2]; 
        }
        else{
            button.innerHTML=col[i][col[i][0]];
            img.src = srcs[i][srcs[i][0]]; 
        }
    }const endingTime = performance.now();
    console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
}

let s=document.getElementById("section5");
s.style.color="#b69292";
s=document.querySelector("aside #section5");
s.style.color="#b69292";

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');


/*https://imagekit.io/dashboard/media-library/L2ltYWdlczI*/
/*https://tinyjpg.com/*/