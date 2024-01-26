var cartItems = [];

function addItemToCart(itemName, itemPrice) {
    var item = {
        name: itemName,
        price: itemPrice
    };
    cartItems.push(item);
}

function displayCart() {
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    cartItems.forEach(function (item) {
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = item.name + " - $" + item.price;
        cartContainer.appendChild(itemDiv);
    }); }
  
function Article(type,imageSrc,price,){
    var obj={}
    
    obj.imageSrc=imageSrc
    obj.type=type
    obj.price=price

    return obj
}

var article1=Article("capush" , {src:"/PerProject/image/capush1.webp"},100)
var article2=Article("capush" , {src:"/PerProject/image/capush2.webp"},150 )
var article3=Article("capush" , {src:"/PerProject/image/capush3.webp"},199)

var article4=Article("jeans" , {src:"/PerProject/image/jean 1.webp"},109)
var article5=Article("jeans" , {src:"/PerProject/image/jean 3.webp"},180)
var article6=Article("jeans" , {src:"/PerProject/image/jean 2.jpg"},'25$  !in sold!')

var article7=Article("doudounes" , {src:"/PerProject/image/doudounes1.webp"},100)
var article8=Article("doudounes" , {src:"/PerProject/image/doudounes2.webp"},100)
var article9=Article("doudounes" , {src:"/PerProject/image/doudounes3.webp"},100)

var article10=Article("chaussures" , {src:"/PerProject/image/chaus 1.webp"},100)
var article11=Article("chaussures" , {src:"/PerProject/image/chaus 2.webp"},100)
var article12=Article("chaussures" , {src:"/PerProject/image/chaus 3.webp"},100)


var capush = [article1, article2, article3];

for (var i = 0; i < capush.length; i++) {
    $('.capush').append(`
        <div class="img-name">
            <div class="img" >
                <div class="capush-item">
         <img  src="${capush[i].imageSrc.src}">
                      </div>
                <div class="price">
         ${capush[i].price}
                </div>
        
 <button onclick="addItemToCart('Produit ',  ${capush[i].price} )"> add to cart</button>
   </div>
            </div>
        </div>
    `);
}


var jeans=[article4,article5,article6]

for (var i = 0; i < jeans.length; i++) {
    $('.jeans').append(`
        <div class="img-name" >
            <div class="img" >
                <div class="jeans-item">
         <img  src="${jeans[i].imageSrc.src}">
                </div>
                <div class="price">
                    ${jeans[i].price}
                </div>
                <button onclick="addItemToCart('Produit 1',  ${capush[i].price} )"> add to cart</button>
   </div>
            </div>
        </div>
    `);
}


var doudounes=[article7,article8,article9]

for (var i = 0; i< doudounes.length; i++) {
    $('.doudounes').append(`
    <div class="img" >
    <div class="jeans-item">
        <img  src="${doudounes[i].imageSrc.src}">
                </div>
        <div class="price">
                    ${doudounes[i].price}
                </div>
                <button onclick="addItemToCart('Produit 1',  ${capush[i].price} )"> add to cart</button>
   </div>
            </div>
        </div>
    `);
}



var chaussures = [article10, article11, article12];

for (var i = 0; i < chaussures.length; i++) {
$('.chaussures').append(`
<div class="img" >
<div class="jeans-item">
<img  src="${chaussures[i].imageSrc.src}">
</div>
<div class="price">
${chaussures[i].price}
</div>
<button onclick="addItemToCart('Produit 1',  ${capush[i].price} )"> add to cart</button>
   </div>
</div></div> `);
 }


