import { Link } from "react-router-dom"

export const Navbar = () => {

    return(
        <div className="nav">
            <Link id="linkIs" to ="/">Home</Link>
            <Link id="linkIs" to ="/products">All Products</Link>
        </div>
    )
}