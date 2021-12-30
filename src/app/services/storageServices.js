export const saveLastInterestProduct = (productName) => {
    //API sessionStorage
    sessionStorage.setItem("lastProduct", productName)
}