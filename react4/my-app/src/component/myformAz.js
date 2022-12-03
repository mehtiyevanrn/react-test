import React from 'react'
import {Formik} from 'formik'
import {writeAz} from "../api/api"

function MyformAz() {
  return (
    <div>
      <h4 className="text-danger text-center my-4">Məlumatları Azərbaycan dilində daxil edin</h4>
      <Formik
       initialValues={{ 
        azproduct: '' 
      }}
       onSubmit={(values, actions) => {
         writeAz(values.azproduct)
         actions.resetForm()
       }}
     >
       {props => (
         <form onSubmit={props.handleSubmit} className='d-flex'>
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.azproduct}
             name="azproduct"
             className="form-control"
             placeholder="Azerbaycan"
           />
           {props.errors.azproduct && <div id="feedback">{props.errors.azproduct}</div>}
           <button type="submit" className="btn btn-success">Göndər</button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default MyformAz