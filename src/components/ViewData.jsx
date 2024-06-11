import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewData = () => {

  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.get("http://localhost:8082/view").then(
      (response) => {
        console.log(data)
        changeData(response.data)


      }


    ).catch().finally()
  }
  useEffect(() => {fetchData()},[])
  return (

    <div>
      <Navbar />
      <div className="container">
        <h1 align="center"><u>View Employees</u></h1>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table table-striped">

              <thead>
                <tr>
                  <th scope="col">Employee  Id</th>
                  <th scope="col">Employee  Name</th>
                  <th scope="col">  Job</th>
                  <th scope="col">Salary</th>

                </tr>
              </thead>
              <tbody>
                {data.map(
                  (value, index) => {
                    return <tr>
                      <td>{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.job}</td>
                      <td>{value.salary}</td>



                    </tr>
                  }
                )}





              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}



export default ViewData