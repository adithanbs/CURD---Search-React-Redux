import React,{useEffect, useRef, useState} from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-toastify";

const Home = () =>{


const [searchvalue, setSearchValue] = useState("")
const contacts = useSelector ((state) => state);

const dispatch  = useDispatch()
const deleteContact = (id) => {
  dispatch ({type:"DELETE_CONTACT",payload:id})
  toast.success("employee delete sucessfully!")
}
// const inputRef = useRef();
// console.log(inputRef.current.value);

// console.log(searchvalue);

const handleChangr = (e) => {
  let value = e.target.value

  if(value !== ""){
    const searchList =  searchvalue.filter((contact) =>Object.values(contact).join(" ").toLowerCase().includes(value.toLowerCase()))
    // console.log(search);
    setSearchValue(searchList)


  }else{
    setSearchValue(contacts)
  }
}
useEffect (()=>{
  setSearchValue(contacts)

  // dispatch ({type:"SEARCH_CONTACT",payload:searchvalue})
  // console.log(contacts);

},[contacts]);

return(
    <>
    <div className = "container">
    <div className = "d-flex justify-content-end align-items-center my-3">
      <div>
        <Link to="/add" className="btn add-btn btn-outline-primary mx-3 ">
          Add Employee
        </Link>
        </div>
        
        <div class="">
        <input 
        style = {{height:"38px"}}
        class="search_btn" 
        placeholder="Search Employee ..." 
        type = "search"
        // ref = {inputRef}
        onChange = {(e) => setSearchValue(e.target.value)}
        onChange = {handleChangr}
        />
        </div>
        
        </div>

    <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">D.O.B</th>
                <th scope="col">D.O.J</th>
                <th scope="col"></th> 
                {/* <th scope="col"></th> */}

              </tr>
            </thead>
            <tbody>
              {searchvalue.length > 0 ? (
                searchvalue.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact?.name}</td>
                    <td>{contact?.email}</td>
                    <td>{contact?.number}</td>
                    <td>{contact?.dob}</td>
                    <td>{contact?.doj}</td>
                    <td>
                      <Link
                        to={`edit/${contact?.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact?.id)}
                        className="btn btn-sm btn-danger mx-3"

                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>

     </div>
    </div>
    </>
);
};

export default Home;