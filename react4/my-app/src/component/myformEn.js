import React from 'react';
import {Formik} from 'formik'
import {writeEn} from "../api/api"
import {useNavigate} from "react-router-dom"

function MyformEn() {
  let navigate=useNavigate()
  return (
    <div>
      <h4 className="text-danger text-center my-4">Please, information enter in English</h4>
         <Formik
       initialValues={{ 
        enproduct: '' 
      }}
       onSubmit={(values, actions) => {
         writeEn(values.enproduct)
         actions.resetForm()
         navigate("/list")
       }}
     >
       {props => (
         <form onSubmit={props.handleSubmit} className='d-flex'>
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.enproduct}
             name="enproduct"
             className="form-control"
             placeholder="English"
           />
           {props.errors.enproduct && <div id="feedback">{props.errors.enproduct}</div>}
           <button type="submit" className="btn btn-success">Submit</button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default MyformEn