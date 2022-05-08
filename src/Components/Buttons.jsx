import React from 'react'
import Btn from './Btn'

const Buttons = () => {
  return (
    <div className='buttons mt-5'>
        <h2>Buttons</h2>
        <div className="d-flex mb-5">
            <div className="col-2"><pre className="htmlcode">&lt;Button variant="outline"/&gt;</pre><Btn /></div>    
            <div className="col-2"><Btn /></div>      
        </div>
        <div className="d-flex mb-5">
            <div className="col-2"><Btn variant="text" color="outline"/></div>    
            <div className="col-2"><Btn variant="text" color="outline"/></div>      
        </div>
        <div className="d-flex mb-5">
            <div className="col-2"><Btn variant="text" color="text"/></div>    
            <div className="col-2"><Btn variant="text" color="text"/></div>    
        </div>
        <div className="d-flex mb-5">
            <div className="col-3"><Btn disabledShadow="disableshadow"/></div>    
            <div className="col-3"><Btn disabled="disabled" variant="text"/></div>  
            <div className="col-3"><Btn variant="text" color="text" disabled="disabled" /></div>
        </div>
        <div className="d-flex mb-5">
            <div className="col-4"><Btn color="primary"/></div>    
            <div className="col-4"><Btn color="primary"/></div>    
        </div>
        <div className="d-flex mb-5">
            <div className="col-3"><Btn color="primary" size="sm"/></div>    
            <div className="col-3"><Btn color="primary" size="md"/></div>  
            <div className="col-3"><Btn color="primary" size="lg"/></div>
        </div>
        <div className="d-flex mb-5">
            <div className="col-3"><Btn color="default-color"/></div>    
            <div className="col-3"><Btn color="primary"/></div>  
            <div className="col-3"><Btn color="secondary"/></div> 
            <div className="col-3"><Btn color="danger"/></div>     
        </div>  
    </div>
  )
}

export default Buttons