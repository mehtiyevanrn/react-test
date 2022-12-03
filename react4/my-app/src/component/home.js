import React from 'react';
import MyformAz from './myformAz';
import MyformEn from './myformEn'

function Home() {
  return (
    <div>
        <div className='container'>
            <div className="row my-5">
                <div className="col-6">
                    <MyformAz/>
                </div>
                <div className="col-6">
                    <MyformEn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home