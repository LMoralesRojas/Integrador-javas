import { renderCategories } from "./servicios/categories";
import { handleSearchProductByName } from "./servicios/search";
import { handleGetProductsToStore } from "./vistas/tienda";
import "./style.css";

//==APLICACION==//
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};
export let productoActivo = null;

export const setProductoActivo = (productIn) => {
  productoActivo = productIn;
};

handleGetProductsToStore();
renderCategories();

//==PRODUCTOS==//

//==POPUP==//

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
  handleCancelButton();
});
const handleCancelButton = () => {
  closeModal();
};
//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", () => {
  handleSearchProductByName();
});
