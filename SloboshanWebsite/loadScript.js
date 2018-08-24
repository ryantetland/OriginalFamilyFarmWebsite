function loadProducts(){

    var items = [];
    
    var url = "testSheet.xlsx";
    var address_of_image_cell_column = 'C';
    var address_of_price_column = 'B';
    var address_of_product_name_columne = 'A';

    /* set up async GET request */
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function(e) {
        
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type:"array"});

        var ground = workbook.SheetNames[0];

        var steak = workbook.SheetNames[1];

        var roasts = workbook.SheetNames[2];

        var other = workbook.SheetNames[3];

        var roasters = workbook.SheetNames[4];

        var pieces = workbook.SheetNames[5];
        var groundChicken = workbook.SheetNames[6];
        var otherChicken = workbook.SheetNames[7];

        var breakfast = workbook.SheetNames[8];
        var garlic = workbook.SheetNames[9];
        var farmer = workbook.SheetNames[10];
        var otherSausage = workbook.SheetNames[11];
        var lasagne = workbook.SheetNames[12];
        var shepards = workbook.SheetNames[13];
        var otherPrepped = workbook.SheetNames[14];

 
        

        
        //console.log(XLSX.utils.sheet_to_json(worksheet));

        var text = document.getElementsByClassName("indent");

        for (let j = 0; j < text.length; j++){

            text[j].addEventListener("click", function(){


                var page = ground;
                var worksheet = workbook.Sheets[ground];

                /*if(j == 1){
                    worksheet = workbook.Sheets[steak];
                    page = steak;
                }
                else if(j==2){
                    worksheet = workbook.Sheets[roasts];
                    page = roasts;
                }

                else if(j==3){
                    worksheet = workbook.Sheets[other];
                    page = other;
                }*/

                switch (j) {
                    case 0:
                        worksheet = workbook.Sheets[ground];
                        page = ground;
                        break;
                    case 1:
                        worksheet = workbook.Sheets[steak];
                        page = steak;
                        break;
                    case 2:
                        worksheet = workbook.Sheets[roasts];
                        page = roasts;
                        break;
                    case 3:
                        worksheet = workbook.Sheets[other];
                        page = other;
                        break;
                    case 4:
                        worksheet = workbook.Sheets[roasters];
                        page = roasters;
                        break;
                    case 5:
                        worksheet = workbook.Sheets[pieces];
                        page = pieces;
                        break;
                    case 6:
                        worksheet = workbook.Sheets[groundChicken];
                        page = groundChicken;
                        break;
                    case 7:
                        worksheet = workbook.Sheets[otherChicken];
                        page = otherChicken;
                        break;
                    case 8:
                        worksheet = workbook.Sheets[breakfast];
                        page =breakfast;
                        break;
                    case 9:
                        worksheet = workbook.Sheets[garlic];
                        page = garlic;
                        break;
                    case 10:
                        worksheet = workbook.Sheets[farmer];
                        page = farmer;
                        break;
                    case 11:
                        worksheet = workbook.Sheets[otherSausage];
                        page = otherSausage;
                        break;
                    case 12:
                        worksheet = workbook.Sheets[lasagne];
                        page = lasagne;
                        break;
                    case 13:
                        worksheet = workbook.Sheets[shepards];
                        page = shepards;
                        break;
                    case 14:
                        worksheet = workbook.Sheets[otherPrepped];
                        page = otherPrepped;
                        break;
                    

                }

                /* TODO: this only replaces and doesnt remove all former products info */
                /* remove loaded product images on page*/
                var images = document.getElementsByTagName('img');
                
                // for(let m = 0; m < images.length; m++){
                //     if(!images[m].id == "logo")
                //      images[m].parentNode.removeChild(images[m]);
                //     // document.getElementById('img').removeChild(document.getElementById(images));

                // }
                while(images.length > 0){
                    images[0].parentNode.removeChild(images[0]);
                }


                var buttons = document.getElementsByTagName("button");
                while(buttons.length > 0 ) {
                    buttons[0].parentNode.removeChild(buttons[0]);
                }
                

                for(let i = 0; i < XLSX.utils.sheet_to_json(worksheet).length ; i ++){
                    cell_num = i + 2;
                    var desired_cell = worksheet[address_of_image_cell_column+cell_num.toString()];
                    var desired_cell2 = worksheet[address_of_price_column+cell_num.toString()];
                    var desired_cell_product = worksheet[address_of_product_name_columne+cell_num.toString()];

                
                    var imagePath = (desired_cell ? desired_cell.v : undefined);
                    var priceCell = (desired_cell2 ? desired_cell2.v : undefined);
                    var productNameCell = (desired_cell_product ? desired_cell_product.v : undefined);

                    var grid = document.getElementsByClassName("grid-item");


                    var pic = document.createElement("IMG");
                    var productName = document.createElement("P");
                    productName.innerHTML = productNameCell;



                    var price = document.createElement("div");
                    
                    price.style.color = "green";
                    price.style.fontSize = "12";
                    price.style.marginLeft = "10px";
                    price.style.marginRight = "10px";
                    price.style.textAlign = "center";
                    price.innerHTML = priceCell;


                    pic.setAttribute("src", imagePath);
                    pic.setAttribute("width", "50%");
                    pic.setAttribute("height", "50%");

            
                    var temp = document.querySelectorAll("img");
                    var loadImg = true;

                    // for(let k = 0; k < temp.length; k++){
                    //     if (temp[k].getAttribute("src") == imagePath){
                    //     loadImg = false;
                    //     }

                    // }
            
                    if (loadImg){




                       
                          //  if(!grid[z] == null){
                        while (grid[i].hasChildNodes()) {
                           grid[i].removeChild(grid[i].lastChild);
                        }
                    //}
                      //  }


                        grid[i].appendChild(productName);
                        grid[i].appendChild(pic);
                        grid[i].appendChild(price);

                        

                        var orderbutton = document.createElement("button");
                        orderbutton.addEventListener("click", function(){

                            items[items.length] = grid[i].childNodes[0].innerHTML + " " + grid[i].childNodes[2].innerHTML;

                            
                            localStorage.setItem("items", JSON.stringify(items));



                           // sessionStorage.setItem("product", grid[i].childNodes[0].innerHTML);
                           // sessionStorage.setItem("price", grid[i].childNodes[2].innerHTML)
                            alert("!!!!product saved: " + localStorage.getItem("items"));
                        });		
            
                        orderbutton.innerHTML = "+ Add To Order";
                        grid[i].appendChild(orderbutton);
                    }
           
                }

            }); 

        }

    }

    req.send();

}