//==LOCALSTORAGE==//
export const handleGetProductLocalStorag = () => {
  const products = JSON.parse(persitence.getItem("objetos"));
  if (products) {
    return products;
  } else {
    return [];
  }
};

export const setInLocalStorage = (productIn) => {
  let productsInLocal = handleGetProductLocalStorage();

  const existingIndex = productsInLocal.findIndex(
    (productsLocal) => productsLocal.id === productIn.id
  );
  if (existingIndex !== -1) {
    productsInLocal[existingIndex] = productIn;
  } else {
    productsInLocal.push(productIn);
  }
  localStorage.setItem("objetos", JSON.stringify(productsInLocal));
};
