import React from 'react'
import { GrSnapchat } from 'react-icons/gr'
const Tables = () => {
    return (


        <div className="row mt-4">

            {/*   <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7">
                <div id="style-4" className=" card-Table shadow mb-4  ">
                    <div className="ml-1">
                        <table class="table text-white">
                            <thead className="">
                                <tr>
                                    <th>Jobs</th>
                                    <th>Application</th>
                                    <th>Interviews</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td ><div className="d-flex flex-column"> <span><GrSnapchat /></span> <span>23</span></div></td>

                                    <td ><div className="d-flex flex-column">
                                        <span>Stunt Artist</span><span className="small">3 days ago</span></div></td>

                                    <td><i className="fas fa-fw fa-ellipsis-v "></i></td>
                                </tr>
                                <tr>
                                    <td ><div className="d-flex flex-column"> <span><GrSnapchat /></span>  <span>23</span></div></td>

                                    <td ><div className="d-flex flex-column">
                                        <span>Hair Style</span><span className="small">1 days ago</span></div></td>

                                    <td><i className="fas fa-fw fa-ellipsis-v "></i></td>
                                </tr>
                                <tr>
                                    <td ><div className="d-flex flex-column"> <span><GrSnapchat /></span> <span>12</span></div></td>

                                    <td ><div className="d-flex flex-column">
                                        <span>Project Manager</span><span className="small">3 days ago</span></div></td>

                                    <td><i className="fas fa-fw fa-ellipsis-v "></i></td>
                                </tr>
                                <tr>
                                    <td ><div className="d-flex flex-column"><span><GrSnapchat /></span>  <span>20</span></div></td>

                                    <td ><div className="d-flex flex-column">
                                        <span>Camera Manager</span><span className="small">1 days ago</span></div></td>

                                    <td><i className="fas fa-fw fa-ellipsis-v "></i></td>
                                </tr>
                                <tr>
                                    <td ><div className="d-flex flex-column"><span><GrSnapchat /></span> <span>43</span></div></td>

                                    <td ><div className="d-flex flex-column">
                                        <span>HR Manager</span><span className="small">2 days ago</span></div></td>

                                    <td><i className="fas fa-fw fa-ellipsis-v "></i></td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>



            <div className="col-xl-4 col-lg-5 scrollbar">
                <div id="style-4" className="card-TablePeople shadow mb-4  ">
                    <div className="ml-1">
                        {
                            [...Array(20)].map(() => (
                                <img style={{ width: '45px', margin: '20px 12px' }} className="" src="img/undraw_profile.svg" />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div >





    )
}

export default Tables
