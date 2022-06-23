import React from "react"
import { Link } from "react-router-dom";

function Navbar() {
    return <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="flex-shrink-0 flex items-center">
                    <Link to={"/"}><h1 className="text-white text-lg font-bold">NewsMonkey</h1></Link>
                </div>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to={"/"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white lg:ml-2 px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                        <Link to={"/business"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Business</Link>

                        <Link to={"/entertainment"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Entertainment</Link>
                        <Link to={"/health"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Health</Link>

                        <Link to={"/science"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Science</Link>

                        <Link to={"/sports"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sports</Link>

                        <Link to={"/technology"} className="nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
                        <li className="nav-item dropdown">

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={"/"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                                <Link to={"/business"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Business</Link>

                                <Link to={"/entertainment"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Entertainment</Link>

                                <Link to={"/health"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Health</Link>

                                <Link to={"/science"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Science</Link>

                                <Link to={"/sports"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sports</Link>

                                <Link to={"/technology"} className="dropdown-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}


export default Navbar