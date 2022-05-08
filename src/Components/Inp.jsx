import React from 'react'
import Input from './Input'

const Inp = () => {
  return (
    <div className='inputs mt-5'>
        <h2>Inputs</h2>
        <div className="d-flex mb-5">
            <div className="col-12"><pre className="htmlcode">&lt;Input /&gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input /></div></div>        
        </div>

        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-12 col-md-4 col-lg-3 "><pre className="htmlcode">&lt;Input error="error" /&gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input error="error" /></div></div>   
        </div>

        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-12 col-md-4 col-lg-3 "><pre className="htmlcode">&lt;Input disabled="disabled" /&gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input disabled="disabled" /></div></div>   
        </div>

        

        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-12 col-md-4 col-lg-3 "><pre className="htmlcode">&lt;Input startIcon="start-phone"/ &gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input startIcon="start-phone" /></div></div>    
            <div className="col-12 col-md-4 "><pre className="htmlcode">&lt;Input endIcon="end-lock"/ &gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input endIcon="end-lock" /></div></div>  
        </div>


        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-12 col-md-4 col-lg-3 "><pre className="htmlcode">&lt;Input size="sm"/ &gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input size="sm"/></div></div>    
            <div className="col-12 col-md-4 "><pre className="htmlcode">&lt;Input size="md"/ &gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input size="md"/></div></div>  
        </div>

        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-12 col-md-4 col-lg-3 "><pre className="htmlcode">&lt;Input fullwidth="full" /&gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><Input fullwidth="full" /></div></div>   
        </div>

        <div className="d-flex flex-column flex-md-row mb-5">
            <div className="col-12 col-md-4 col-lg-3 "><pre className="htmlcode">&lt;textarea cols="30" /&gt;</pre><div className='d-flex flex-column'><label htmlFor="">Label</label><textarea cols="30" rows="10" /></div></div>   
        </div>
    </div>
  )
}

export default Inp