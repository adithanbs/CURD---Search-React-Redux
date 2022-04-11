import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom';
import { toast } from "react-toastify";

const EditContact = () =>{
  

const [name,setName] = useState ("")
const [email,setemail] = useState ("")
const [number,setNumber] = useState ("")
const [dob,setdDob] = useState ("")
const [doj,setDoj] = useState ("")

  const navigate = useNavigate();
  const contacts = useSelector ((state) => state);
  const dispatch = useDispatch()
  const { id } = useParams();
  // console(id)
 let editValue = contacts.find((contact) => contact.id === parseInt(id))

 console.log(doj);

 useEffect(() => {
  setName(editValue.name);
  setemail(editValue.email);
  setNumber(editValue.number);
  setdDob(editValue.dob);
  setDoj(editValue.doj);

 },[editValue])

  const hadleSummit = (e) => {
    e.preventDefault();

    const mailvalitaction = contacts.filter((contact) => contact.email === email && editValue.id !== contact.id ? contact : null );
    const numbervalitaction = contacts.filter((contact) => contact.number === parseInt(number) && editValue.id !== contact.id ? contact : null );

    if(!name || !email || !number || !dob || !doj) {
      return  toast.warning("Please fill in all fields!!");
    }
    if(mailvalitaction.length > 0) {
      return   toast.error("This email already exists!!");
    }
    if(numbervalitaction.length > 0) {
      return   toast.error("This PhoneNumber already exists!!");
    }

    const data = {
      id:editValue.id,
      email,
      name,
      number,
      dob,
      doj,

    }
dispatch({type:"EDIT_CONTACT",payload:data})
toast.success("Employee Updated successfully!!");
navigate("/");


  }
  

  return(
    <>
        <div className="container-fluid">
      <h3 className="text-center text-dark py-3 display-2">Employee Id : {parseInt(id)+1}</h3>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={hadleSummit}>
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
            <div className="form-group my-2">
            <label for="basic-url" class="form-label">Email</label>

              <input
                className="form-control"
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => setemail(e.target.value)}
                value={email}

              />
            </div>
            <div className="form-group my-2">
            <label for="basic-url" class="form-label">PhoneNumber</label>

              <input
                className="form-control"
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}

              />
            </div>
            <div className="form-group my-2">
            <label for="basic-url" class="form-label">Date Of Birth</label>

              <input
                className="form-control"
                type="date"
                placeholder="Date Of Birth"
                onChange={(e) => setdDob(e.target.value)}
                value={dob}

              />
            </div>
            <div className="form-group my-2">
            <label for="basic-url" class="form-label">Date Of Joining</label>

              <input
                className="form-control"
                type="date"
                placeholder="Date Of join"
                onChange={(e) => setDoj(e.target.value)}
                value={doj}

              />
            </div>
            <div className="form-group mt-3 d-flex justify-content-end">
                  <input
                    className="btn btn-block btn-primary"
                    type="submit"
                    value="Update Details"
                  />
               
                <button
                  type="button"
                  className="btn btn-danger ms-2"
                  onClick={() => navigate("/")}
                >
                  cancel
                </button>
                </div>


          </form>
        </div>
      </div>
    </div>

    </>
);
};

export default EditContact;