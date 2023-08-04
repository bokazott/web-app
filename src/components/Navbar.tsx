import './Navbar.css'
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Favourites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;