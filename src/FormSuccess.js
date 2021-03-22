import React from 'react';
import './Form.css';
import './home';

const FormSuccess = () => {
  return (
    // <div className='form-content-right'>
    //   <h1 className='form-success'>We have received your request!</h1>
    //   <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
      
    //   <Redirect to="/home" />
     
    // </div>

    <div>
          <h1>Simple Single Page website</h1> <br/>
          {/* <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul> */}
          
          <div className="content">
          <strong> I am a web developer who loves building user-friendly websites and web apps, enjoys writing documentation and loves helping people learn how to code. I also really like drawing with CSS. </strong> <br/>
          <strong> I’m currently interested in learning more about accessibility and delving deeper into js frameworks.</strong>   
          </div>
        </div>
  );
};

export default FormSuccess;
