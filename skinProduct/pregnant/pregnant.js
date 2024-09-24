var srcs=[];
let sect=[];
let products=[];
const initApp = () => {
    
    localStorage.setItem('checkbox', JSON.stringify([]));console.log( localStorage.getItem('checkbox'));
    fetch('https://boutiquegigi.github.io/GigiBoutquessss/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products);
        localStorage.setItem('checkbox', JSON.stringify(data));
        section();
        });
}
initApp();

function section(){
   products.forEach(prod=>{
    if(prod.section=="pregnant"){
        sect.push(prod.count);
    }
  })
  localStorage.setItem('sections',sect);
  localStorage.setItem('colr',11);
  localStorage.setItem('section',"pregnant");
  addDataToHTML();
  // get data cart from memory
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
}
