const BASE_URL = "https://6512e424b8c6ce52b3966bc0.mockapi.io/thienFood";
function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",
    params: {
      namePhone: name || undefined,
    },
  });
}
function getProduct(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
}
function addProduct(product) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: product,
  });
}
function updateProduct(id, product) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: product,
  });
}
function deleteProduct(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}
