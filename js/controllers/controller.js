function renderProductList(listProduct) {
  var resultString = "";
  for (let i = 0; i < listProduct.length; i++) {
    resultString += `<tr style="color: white">
              <td>${listProduct[i].id}</td>
              <td>${listProduct[i].name}</td>
              <td>${listProduct[i].price}</td>
              <td>${listProduct[i].screen}</td>
              <td>${listProduct[i].backCamera}</td>
              <td>${listProduct[i].frontCamera}</td>
              <td><img src="${listProduct[i].img}" width="150" height="100" /></td>
              <td>${listProduct[i].desc}</td>
              <td>${listProduct[i].type}</td>
              <td><button class="btn btn-warning" onclick="productEdition(${listProduct[i].id})">Sửa</button></td>
              <td><button class="btn btn-danger" onclick="productDeletion(${listProduct[i].id})">Xóa</button></td>
          </tr>`;
  }
  document.querySelector("#tbodyPhone").innerHTML = resultString;
}
function getProductionInformation() {
  var id = document.querySelector("#productID").value;
  var name = document.querySelector("#productName").value;
  var price = document.querySelector("#productPrice").value;
  var screen = document.querySelector("#productScreen").value;
  var backCamera = document.querySelector("#productBCamera").value;
  var frontCamera = document.querySelector("#productFCamera").value;
  var img = document.querySelector("#productImg").value;
  var desc = document.querySelector("#productDesc").value;
  var type = document.querySelector("#productType").value;
  return new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
}
