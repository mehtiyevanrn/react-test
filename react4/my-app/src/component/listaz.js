import React, {useEffect, useState} from 'react'
import {dataAz,dataazdelete} from '../api/api'

function Listaz() {
 const [data,setData]=useState("")

useEffect(()=>{
  productgetir()
},[])

  async function productgetir(params){
    let data= await dataAz()
    setData(data)
  }


    function datadelete(id){
    dataazdelete(id)
    setData(
      data.filter((item)=>{
        return item.id !== id
      })
    )

   }
  return (
    <div>
      <ul className="list-group my-5">
        {
          data &&
          data.map((item,index)=>{
            return(
              <li key ={index} className="list-group-item d-flex justify-content-between align-items-baseline">{item.azproduct}
              <button className='btn btn-danger' onClick={()=>{
                datadelete(item.id)
              }}>Sil</button></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Listaz