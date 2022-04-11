import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const AddContact = () =>{




const [name,setName] = useState ("")
const [email,setemail] = useState ("")
const [number,setNumber] = useState ("")
const [dob,setdDob] = useState ("")
const [doj,setDoj] = useState ("")

const contacts = useSelector((state) => state);
const dispatch = useDispatch()

const navigate = useNavigate();

const handleSumit = (e) => {
    e.preventDefault();

    const mailValidaction = contacts.filter((contact) => contact.email === email ? contact : null )
    // console.log(mailValidaction);
    const numberValidaction = contacts.filter((contact) => contact.number === parseInt(number) ? contact : null )
    console.log(numberValidaction);
    if(!name ||!email ||!number ||!dob ||!doj){
      return toast.warning("Please fill in all fields!!");
    }
    if(mailValidaction.length > 0){
        return toast.error("This email already exists!!");
    }
    if(numberValidaction.length > 0){
        return toast.error("This Phone Number already exists!!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      number,
      dob,
      doj,
    };
      dispatch({type:"ADD_CONTACT",payload:data})
      toast.success("Employee details added successfully!!");
      navigate("/");
  
}

    return (
      <>
        <div className="container-fluid">
          <h3 className="text-center text-dark py-3 display-2">Add New Employee</h3>
          <div className="row">
            <div className="col-md-6 p-5 mx-auto shadow">
              <form onSubmit={handleSumit}>
             
                <div className="form-group my-2">
                <label for="basic-url" class="form-label">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                
                <div className="form-group  my-2">
                <label for="basic-url" class="form-label">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@gmail.com"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                  />
                </div>
                
                <div className="form-group  my-2">
                <label for="basic-url" class="form-label">Phone Number</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone Number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                  />
                </div>
                {/* <input class="datepicker" data-date-format="mm/dd/yyyy"></input> */}
                {/* <div className="form-group" id="dp3" data-date="12-02-2012" data-date-format="dd-mm-yyyy">  <input className ="span2" size="16" type="text" value="12-02-2012" />  <span className="add-on"><i className="icon-th"></i></span></div> */}
                <div className="form-group  my-2">
                <label for="basic-url" class="form-label">Date Of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Date Of Birth"
                    onChange={(e) => setdDob(e.target.value)}
                    value={dob}
                  />
                </div>
                <div className="form-group  my-2">
                <label for="basic-url" class="form-label">Date Of Joining</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Date Of join"
                    onChange={(e) => setDoj(e.target.value)}
                    value={doj}
                  />
                </div>
                <div className="form-group  my-2 d-flex justify-content-end">
                  <div className = "">
                  <input
                    className="btn btn-block btn-primary"
                    type="submit"
                    value="Add Employee"
                  />
                    <button
                  type="button"
                  className="btn btn-danger ms-2"
                  onClick={() => navigate("/")}
                >
                  Back
                </button>


                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default AddContact;