import ProductsContainer from "../ProductsContainer"

export default async function MainContainer() {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()

    return (
        <ProductsContainer data={data} />
    )
}
