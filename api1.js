const api_url =  
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"; 
const image_url="https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"

$( document ).ready(()=>{
    var image=null;
    var cont=null;
    var j=0;
  $.ajax({
    url: image_url, 
    success: function(result){
        image=result;
        $.ajax({
            url: api_url, 
            success: function(result1){

             cont=result1;
             function front(start)
               {
                   console.log("hi");
                    for(var i=0;i<cont.length;i++)
                    {
                        var d1 = document.createElement("div");
                        d1.setAttribute("class", "card");
                        var ima = document.createElement("img");
                        ima.src = image[i % 5].image;
                        ima.setAttribute("class", "img-thumbnail");
                        ima.style.maxWidth = "100px";
                        d1.appendChild(ima);
                        var d2 = document.createElement("div");
                        d2.setAttribute("class", "card-body");
                        d1.appendChild(d2);

                        var p1 = document.createElement("p");
                        var t1 = document.createTextNode(cont[i]["abv"]);
                        d2.appendChild(p1); d2.appendChild(t1);

                        var p1 = document.createElement("p");
                        var t1 = document.createTextNode(cont[i]["ibu"]);
                        d2.appendChild(p1); d2.appendChild(t1);

                        var p1 = document.createElement("p");
                        var t1 = document.createTextNode(cont[i]["id"]);
                        d2.appendChild(p1); d2.appendChild(t1);

                        var p1 = document.createElement("p");
                        var t1 = document.createTextNode(cont[i]["name"]);
                        d2.appendChild(p1); d2.appendChild(t1);

                        var p1 = document.createElement("p");
                        var t1 = document.createTextNode(cont[i]["style"]);
                        d2.appendChild(p1); d2.appendChild(t1);

                        var p1 = document.createElement("p");
                        var t1 = document.createTextNode(cont[i]["ounces"]);
                        d2.appendChild(p1); d2.appendChild(t1);

                        var lst = document.getElementsByClassName("d-flex flex-wrap");
                        lst[0].appendChild(d1);
                    }
                    
                }
            
                front(0);


             }
          });
     
     }
  });
  
})
