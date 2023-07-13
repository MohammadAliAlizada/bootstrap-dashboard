import React from 'react'
import WeeklyActivity from './WeeklyActivity';
import CircularProgress from './CircularProgress';

const RecentStats = () => {
    return (
        <div className="row">

            {/*   <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7 text-white">
                <div className="d-flex ">
                    <h2>Recent Stats</h2>

                    <div className="">
                        <select className="dropdownStats">
                            <option className="border-0" value="Select an option" disabled selected>Select an option</option>
                            <option className="border-0" value="Days 1">Days 1</option>
                            <option className="border-0" value="Days 2">Days 2</option>
                            <option className="border-0" value="Days 3">Days 3</option>
                        </select>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-6 mb-5">
                        <div className="card  weather text-white shadow">
                            <div className="card-body d-flex">

                                <div className="weather-icon small"> <i className="fas fa-users fa-fw mt-3 ml-2"></i></div>
                                <div className="d-flex ml-2 text-white-50 small ">Profile Views of you
                                    <div className="position-absolute mt-4 ml-3 text-white">
                                        3500
                                                           </div>
                                    <div style={{ marginLeft: '130px' }} className="position-absolute mt-4  ">
                                        <i className="fas fa-arrow-up fa-fw "></i> +30%
                                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5">
                        <div className="card  weather text-white shadow">
                            <div className="card-body d-flex">

                                <div className="weather-icon "> <i className="fas fa-database fa-fw mt-3 ml-2"></i></div>
                                <div className="d-flex ml-2 text-white-50 small ">Viewing Time
                                    <div className="position-absolute mt-4 ml-3 text-white">
                                        0:18 minutes
                                                           </div>
                                    <div style={{ marginLeft: '130px' }} className="position-absolute mt-4  ">
                                        <i className="fas fa-arrow-up fa-fw "></i> +70%
                                                           </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5">
                        <div className="card  weather text-white shadow">
                            <div className="card-body d-flex">

                                <div className="weather-icon small"> <i className="fas fa-smog fa-fw mt-3 ml-2"></i></div>
                                <div className="d-flex ml-2 text-white-50 small ">Return Visitors
                                    <div className="position-absolute mt-4 ml-3 text-white">
                                        1500
                                                           </div>
                                    <div style={{ marginLeft: '130px' }} className="position-absolute mt-4  ">
                                        <i className="fas fa-arrow-up fa-fw "></i> +30%
                                                           </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5">
                        <div className="card  weather text-white shadow">
                            <div className="card-body d-flex">

                                <div className="weather-icon small"> <i className="fas fa-user fa-fw mt-3 ml-2"></i></div>
                                <div className="d-flex ml-2 text-white-50 small ">New visitors
                                    <div className="position-absolute mt-4 ml-3 text-white">
                                        5000
                                                           </div>
                                    <div style={{ marginLeft: '130px' }} className="position-absolute mt-4  ">
                                        <i className="fas fa-arrow-up fa-fw "></i> +25%
                                                           </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        {/* <WeeklyActivity /> */}
                        <CircularProgress className="-mt-2" />

                    </div>
                </div>
            </div>



            {/*  <!-- Pie Chart --> */}
            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    {/*  <!-- Card Header - Dropdown --> */}
                    <img style={{ borderRadius: '5px', height: '400px' }} className="" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg" />
                </div>
            </div>
        </div>





    )
}

export default RecentStats
