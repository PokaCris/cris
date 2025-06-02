import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <>
        <Link to="/" className="links">
        Main
        </Link>
        <Link to="/about" className="links">
        About
        </Link>
        <Link to="/test/27&color=yellow6year=2018" className="links">
        News
        </Link>
        </>
    )
}

export default NavMenu;