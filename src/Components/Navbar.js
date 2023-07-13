import React, { useState } from 'react'

const Navbar = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                    <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" id="search" className="form-control bg-light border-0 font-weight-bolder " placeholder="Search "
                            aria-label="Search" aria-describedby="basic-addon2" />
                        <i className="fas fa-search fa-sm position-absolute mt-3 ml-3"></i>
                    </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                        {/*   <!-- Dropdown - Messages --> */}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/*  <!-- Nav Item - Alerts --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="navbar-icons text-center pt-1">
                                <i className="fas fa-bell fa-fw"></i>
                                {/*  <!-- Counter - Alert --> */}
                                <div className="navbar-icon-circle"></div>
                            </div>
                        </a>
                        {/*   <!-- Dropdown - Alerts --> */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Alerts Center
                                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 12, 2019</div>
                                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    {/*  <!-- Nav Item - Messages --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="navbar-icons text-center pt-1">
                                <i className="fas fa-envelope fa-fw"></i>
                                {/*  <!-- Counter - Messages --> */}

                                <div className="navbar-icon-circle"></div>
                            </div>
                        </a>
                        {/*   <!-- Dropdown - Messages --> */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Message Center
                                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="..." />
                                    <div className="status-indicator bg-success"></div>
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                        problem I've been having.</div>
                                    <div className="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="..." />
                                    <div className="status-indicator"></div>
                                </div>
                                <div>
                                    <div className="text-truncate">I have the photos that you ordered last month, how
                                                        would you like them sent to you?</div>
                                    <div className="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="..." />
                                    <div className="status-indicator bg-warning"></div>
                                </div>

                            </a>

                        </div>
                    </li>


                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">

                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">


                            <img className="profileImage"
                                src="data:image/jpeg;base64,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" />

                        </a>
                        {/*  <!-- Dropdown - User Information --> */}
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
        </>
    )
}

export default Navbar
