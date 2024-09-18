let sect=[];
let products=[];
const initApp = () => {
    
    localStorage.setItem('checkbox', JSON.stringify([]));
    fetch('https://maisserhan.github.io/GigiBoutquessss/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        localStorage.setItem('checkbox', JSON.stringify(data));
        section();
        });
}
initApp();

function section(){
   products.forEach(prod=>{
    if(prod.section=="heir"){
        sect.push(prod.count);
    }
  })
  localStorage.setItem('sections',sect);
  localStorage.setItem('colr',10);
  localStorage.setItem('section',"heir");
  addDataToHTML();
  // get data cart from memory
  if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
}