import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/">Home</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/contact">Contact</Link>


        </div>
    )
};

export default NavBar;