const Inputbrand= document.getElementById("brand");
const Inputmodel= document.getElementById("model");
const Inputprice= document.getElementById("price");
const Inputcategory= document.getElementById("category");
const rowdiv= document.getElementById("rowid");
const Button = document.getElementById("btn");
let innerHtml ="";
Button.onclick = (e) =>{
    e.preventDefault();
    if (brand.value != " " && model.value != " " &&  price.value!=" " && category.value !=" " ) {
        innerHtml += `<div class="col-4">
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">${brand.value}</div>
            <div class="card-body">
              <h5 class="card-title">${model.value}</h5>
              <h5 class="card-title">${price.value}</h5>
              <p class="card-text">${category.value}</p>
            </div>
         </div>
        </div>`
        rowdiv.innerHTML=innerHtml;
        brand.value=" ";
        model.value=" ";
        price.value=" ";
        category.value=" ";
        
    }
    else {
        alert("xanalrin hamisini doldurun!!")
    }
};
