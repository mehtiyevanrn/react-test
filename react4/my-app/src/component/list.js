import React from 'react'
import Listaz from "./listaz"
import Listen from './listen'

function List() {
  return (
    <div>
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <Listaz/>
                </div>
                <div className="col-6">
                    <Listen/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List