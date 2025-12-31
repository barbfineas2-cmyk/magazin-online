const products=[
{id:1,name:"Căști Gaming",price:150,img:"https://picsum.photos/300?1"},
{id:2,name:"Mouse RGB",price:80,img:"https://picsum.photos/300?2"},
{id:3,name:"Tastatură Mecanică",price:200,img:"https://picsum.photos/300?3"},
{id:4,name:"Boxă Bluetooth",price:120,img:"https://picsum.photos/300?4"}
];
let cart=[];
const productsDiv=document.getElementById("products");
const cartBtn=document.getElementById("cart-btn");
const cartModal=document.getElementById("cart-modal");
const cartItems=document.getElementById("cart-items");
const totalSpan=document.getElementById("total");
const cartCount=document.getElementById("cart-count");
products.forEach(p=>{
 const d=document.createElement("div");
 d.className="product";
 d.innerHTML=`<img src="${p.img}"><h3>${p.name}</h3><p>${p.price} RON</p><button onclick="addToCart(${p.id})">Adaugă în coș</button>`;
 productsDiv.appendChild(d);
});
function addToCart(id){cart.push(products.find(p=>p.id===id));updateCart();}
function updateCart(){
 cartItems.innerHTML="";let t=0;
 cart.forEach(i=>{t+=i.price;const li=document.createElement("li");li.textContent=i.name+" - "+i.price+" RON";cartItems.appendChild(li);});
 totalSpan.textContent=t;cartCount.textContent=cart.length;
}
cartBtn.onclick=()=>cartModal.style.display="block";
function closeCart(){cartModal.style.display="none";}