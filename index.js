document.addEventListener('DOMContentLoaded', async function () {
  let ContainerProduct = document.querySelector(".container_product");
  async function getProducts() {
    let product = await fetch(`https://60ae0d5e80a61f00173324bc.mockapi.io/products`)
    return await product.json()
  }
  console.log(getProducts());
  async function getProductsHTML() {
    let prsData = await getProducts();
    console.log(prsData);
    let allProductsHTML = '';
    if (prsData.length) {
      for (let j = 0; j < prsData.length; j++) {
        if (prsData[j].image === "") {
          console.log(prsData[j]);
          allProductsHTML += `<div class="product">
        <img src="${prsData[1].image}" alt="${prsData[j].name}">
        <div class="card-body">
          <h3><b>Name</b>: ${prsData[j].name}</h3>
          <p><b>Error</b>: ${prsData[j].errorDescription}</p>
          <p><b>SKU</b>: ${prsData[j].sku}</p>
          <p><b>ID</b>: ${prsData[j].id}</p>
          <p><b>Color</b>: 0</p>
        </div>
      </div>`;
        } else {
          console.log(prsData[j]);
          allProductsHTML += `<div class="product">
      <img src="${prsData[j].image}" alt="${prsData[j].name}">
      <div class="card-body">
        <h3><b>Name</b>: ${prsData[j].name}</h3>
        <p><b>Error</b>: ${prsData[j].errorDescription}</p>
        <p><b>SKU</b>: ${prsData[j].sku}</p>
        <p><b>ID</b>: ${prsData[j].id}</p>
        <p><b>Color</b>: 0</p>
      </div>
    </div>`;
        }
      }
      ContainerProduct.innerHTML += allProductsHTML;
    }
  }
  getProductsHTML();
})