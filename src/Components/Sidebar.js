import React, { useState } from 'react'
import { } from 'react-dom'


const Sidebar = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };


    return (
        <>
            {/*  <!-- Sidebar --> */}
            <ul className={style} id="accordionSidebar">

                {/*  <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    {style ?
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                        :
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0 mr-lg-n4" id="sidebarToggle" onClick={changeStyle}></button>
                        </div>
                    }
                </a>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">

                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>My Account</span></a>
                </li>


                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-table"></i>
                        <span>My Adverts</span></a>
                </li>


                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-table"></i>
                        <span>My Project</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-clipboard-check"></i>
                        <span>Post a Project</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-table"></i>
                        <span>My Jobs</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-file"></i>
                        <span>Post a Job</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Applications</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Interviews</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-thumbs-up"></i>
                        <span>Shortlisted</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-check"></i>
                        <span>My Votes</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-star"></i>
                        <span>My Reviews</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Projects</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-user"></i>
                        <span>My Watchlist</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-calendar"></i>
                        <span>Events</span></a>
                </li>


            </ul>

        </>
    )
}

export default Sidebar
