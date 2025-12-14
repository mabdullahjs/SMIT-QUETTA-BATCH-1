import { useParams } from "react-router"

const Product = () => {
    const { id } = useParams()
    console.log(id);

    return (
        <div>Product {id}</div>
    )
}

export default Product