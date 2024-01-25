


function Article(type,imageSrc,price){
    var obj={}
    
    obj.imageSrc=imageSrc
    obj.type=type
    obj.price=price
    return obj
}

var article1=Article("capush" , {src:"/image/capush1.webp"},100)
var article2=Article("capush" , {src:"/image/capush2.webp"},150 )
var article3=Article("capush" , {src:"/image/capush3.webp"},200)

var article4=Article("jeans" , {src:"/image/jean 1.webp"},100)
var article5=Article("jeans" , {src:"/image/jean 3.webp"},100)
var article6=Article("jeans" , {src:"/image/jean 2.jpg"},100)

var article7=Article("doudounes" , {src:"/image/doudounes1.webp"},100)
var article8=Article("doudounes" , {src:"/image/doudounes2.webp"},100)
var article9=Article("doudounes" , {src:"/image/doudounes3.webp"},100)

var article10=Article("chaussures" , {src:"/image/chaus 1.webp"},100)
var article11=Article("chaussures" , {src:"/image/chaus 2.webp"},100)
var article12=Article("chaussures" , {src:"/image/chaus 3.webp"},100)


var capush = [article1, article2, article3];

for (var i = 0; i < capush.length; i++) {
    $('.capush').append(`
        <div class="img-name" style="width: 350px;    height: 350px;">
            <div class="img" style="width: 350px; height: 350px; background-color: white; position: relative; left: 20px; top: 20px;">
                <div class="capush-item">
                    <img style="width: 350px; height: 350px;" src="${capush[i].imageSrc.src}">
                </div>
                <div class="price">
                    ${capush[i].price}
                </div>
            </div>
        </div>
    `);
}




var jeans=[article4,article5,article6]

for (var i = 0; i < jeans.length; i++) {
    $('.jeans').append(`
        <div class="img-name" style="width: 350px; height: 350px;">
            <div class="img" style="width: 350px; height: 350px;  display:inline-block ; background-color: white; position: relative; left: 20px; top: 20px;">
                <div class="jeans-item">
                    <img style="width: 350px; height: 350px;" src="${jeans[i].imageSrc.src}">
                </div>
                <div class="price">
                    ${jeans[i].price}
                </div>
            </div>
        </div>
    `);
}


var doudounes=[article7,article8,article9]

for (var i = 0; i< doudounes.length; i++) {
    $('.doudounes').append(`
        <div class="img-name" style="width: 350px; height: 350px;">
            <div class="img" style="width: 350px; height: 350px; background-color: white; position: relative; left: 20px; top: 20px;">
                <div class="doudounes-item">
                    <img style="width: 350px; height: 350px;" src="${doudounes[i].imageSrc.src}">
                </div>
                <div class="price">
                    ${doudounes[i].price}
                </div>
            </div>
        </div>
    `);
}



    var chaussures = [article10, article11, article12];

    for (var i = 0; i < chaussures.length; i++) {
        $('.chaussures').append(`
            <div class="img-name" style="width: 350px; height: 350px;">
                <div class="img" style="width: 350px; height: 350px; background-color: white; position: relative; left: 20px; top: 20px;">
                    <div class="chaussures-item">
                        <img style="width: 350px; height: 350px;" src="${chaussures[i].imageSrc.src}">
                    </div>
                    <div class="price">
                        ${chaussures[i].price}
                    </div>
                </div>
            </div>
        `);
    }






