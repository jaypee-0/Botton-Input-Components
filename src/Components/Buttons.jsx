import React from 'react'
import Btn from './Btn'

const Buttons = () => {
  return (
    <div className='buttons mt-5'>
        <h2>Buttons</h2>
        <div className="d-flex mb-5">
            <div className="col-12"><pre className="htmlcode">&lt;Btn /&gt;</pre><Btn /></div>         
        </div>
        <div className="d-flex mb-5">
            <div className="col-12"><pre className="htmlcode">&lt;Btn variant="outline"/ &gt;</pre><Btn variant="text" color="outline"/></div>      
        </div>
        <div className="d-flex mb-5">
            <div className="col-12"><pre className="htmlcode">&lt;Btn variant="text"/ &gt;</pre><Btn variant="text" color="text"/></div>      
        </div>
        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-md-3"><pre className="htmlcode">&lt;Btn disabledShadow=""/ &gt;</pre><Btn disabledShadow="disableshadow"/></div>    
            <div className="col-md-3"><pre className="htmlcode">&lt;Btn disabled="disabled"/ &gt;</pre><Btn disabled="disabled" variant="text"/></div>  
            <div className="col-12 col-md-4"><pre className="htmlcode">&lt;Btn variant="text" disabled="disabled/ &gt;</pre><Btn variant="text" color="text" disabled="disabled" /></div>
        </div>
        <div className="d-flex mb-5">
            <div className="col-4"><pre className="htmlcode">&lt;Btn variant="text"/ &gt;</pre><Btn color="primary"/></div>    
            <div className="col-4"><pre className="htmlcode">&lt;Btn variant="text"/ &gt;</pre><Btn color="primary"/></div>    
        </div>
        <div className="d-flex mb-5">
            <div className="col-3"><pre className="htmlcode">&lt;Btn size="sm"/ &gt;</pre><Btn color="primary" size="sm"/></div>    
            <div className="col-3"><pre className="htmlcode">&lt;Btn size="md"/ &gt;</pre><Btn color="primary" size="md"/></div>  
            <div className="col-3"><pre className="htmlcode">&lt;Btn size="lg"/ &gt;</pre><Btn color="primary" size="lg"/></div>
        </div>
        <div className="d-flex mb-5">
            <div className="col-3"><pre className="htmlcode">&lt;Btn color="default-color"/ &gt;</pre><Btn color="default-color"/></div>    
            <div className="col-3"><pre className="htmlcode">&lt;Btn color="primary"/ &gt;</pre><Btn color="primary"/></div>  
            <div className="col-3"><pre className="htmlcode">&lt;Btn color="secondary"/ &gt;</pre><Btn color="secondary"/></div> 
            <div className="col-3"><pre className="htmlcode">&lt;Btn color="danger"/ &gt;</pre><Btn color="danger"/></div>     
        </div>  
    </div>
  )
}

export default Buttons