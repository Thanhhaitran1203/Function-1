let product = [];
function addProduct(){
    let newProduct  = document.getElementById("name").value;
    if (product.indexOf(newProduct) === -1){
        product.push(newProduct);
    }else {
        alert("product exist");
    }
}

