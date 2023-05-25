menuListArray = ["Pizza Vegetariana",
                    "Pizza de Frango",
                    "Pizza Potugesa",
                    "Pizza Quatro Queijos",
                    "Pizza de Calabresa",
                    "Pizza Extravaganza",
  ];

function getMenu(){
var htmldata;
menuListArray.sort()
for(var i=0;i<menuListArray;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}
function addItem(){
var htmldata;
var htmldata
var imgtags='<img id= "im1" scr="=images/pizzaImg.png"/>'
var item=document.getElementsById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata=imgtargs+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddeMenu").innerHTML = htmldata;
}
function addTop(){
    var item=document.getElementById("addIntem").value;
    menuListArray.push(item);
    addItem()
}