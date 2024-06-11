import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddEmploy = () => {

    const[data,changeData]=useState(
        [
        {
            "id":"",
            "name":"",
            "job":" ",
            "salary":""
    
        }]
    )

    const inputHandler=(event)=>
        {
            console.log(data)
            changeData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>
            {

                axios.post("http://localhost:8082/add",data).then(
                    (response)=>{
                        console.log(response.data)
                        if (response.data.status=="success") {
                            alert("added")
                            
                        } else {
                            alert("failed")
                            
                        }
                    }
                ).catch().finally()
                console.log(data)
            }
  return (
    <div>
       
<Navbar/>
<div className="container">
            <h1 align="center"><u> Employee Registration</u></h1><br></br><br></br>
            <div class="card" >
  <div class="card-body">
    
  
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Employee Id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Employee Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Job</label>
                            <input type="email" className="form-control"  name='job' value={data.job} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Salary</label>
                            <input type="email" className="form-control" name='salary' value={data.salary} onChange={inputHandler} />
                        </div>
                       
                        
                       
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

  )
}

export default AddEmploy