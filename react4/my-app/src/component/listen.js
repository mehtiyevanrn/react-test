import React,{useEffect,useState} from 'react'
import {dataEn,dataendelete} from '../api/api'
import {useQuery} from "react-query"

function Listen() {
  
  const [data1,setData]=useState([])

  const {isLoading,error,data}=useQuery(['products'],()=>dataEn())

  if (isLoading) return 'loading...';
  if (error) return "error"
  let data2=data
  setData(data2)
  // if(data){
  //   setData(data)
  // }

  // useEffect(()=>{
  //   productgetir()
  // },[])

  // async function productgetir(params){
  //   let data1=await dataEn()
  //   setData(data1)
  // }
  
  // function datadeleteEn(id){
  //   dataendelete(id)
  //   setData(
  //     data1.filter((item)=>{
  //       return item.id !== id
  //     })
  //   )
  // }

  function datadeleteEn(id){
    dataendelete(id)
    data2 = data.filter((item)=>{
      return item.id != id

    })
    setData(data2)
  }
    return (
      <div>
        <ul className="list-group my-5">
          {
            data1 &&
            data1.map((item,index)=>{
              return(
                <li key ={index} className="list-group-item d-flex justify-content-between align-items-baseline">{item.enproduct}
                <button className="btn btn-danger" onClick={()=>{
                  datadeleteEn(item.id)
                }}>Delete</button></li>
              )
            })
          }
              
        </ul>
      </div>
    )
}

export default Listen