let product = [
    ["bánh mì","15,000","bánh mì sài gòn"]
    ,["sting","12,000","sting đỏ"]
    ];
let arr1 = [];
for (const i in product) {
    arr1.push(product[i][0])
}
window.showList();
function showList(){
    let list = ''
    for (const i  in product) {
        list += `<tr><td>${Number(i)+1}</td>`;
        for (const j in product[i]) {
            list += `<td> ${product[i][j]} </td>`;
        }
        list += `<td><button class="btn btn-warning" onclick="editProduct(${i})">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td></tr>`;
    }
    document.getElementById("result").innerHTML = list;
}

function getData(arr){
    arr = [];
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productDescription = document.getElementById("productDescription").value;
    arr.push(productName);
    arr.push(productPrice);
    arr.push(productDescription);
    return arr;
}
function addProduct(){
    let arr =getData();
    if (arr1.indexOf(arr[0]) === -1){
        product.push(arr);
        alert("Add success")
    }else{
        alert("Product name already exist");
    }
    showList();
}
function deleteProduct(index) {
    product.splice(index - 1, 1);
    showList();
}
function resetFrom(){
    document.getElementById("productName").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("productDescription").value = '';
}
function editProduct(index){
    document.getElementById("productName").value = product[index][0];
    document.getElementById("productPrice").value = product[index][1];
    document.getElementById("productDescription").value = product[index][2];
}
function getIndex(index){
    let arr = getData();
    index = arr1.indexOf(arr[0]);
    return index;
}
function saveProduct() {
    let arr = getData();
    let index = getIndex();
    product[index] = arr;
    showList();
}