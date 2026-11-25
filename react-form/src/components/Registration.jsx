import React, { useState } from 'react'

function Registration() {
  // form data state
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:""
  })
// handling errors-
  const [errors,setErrors]=useState({})

  // handle errors -
  const validate=()=>{
    const newErrors={};
    if (!formData.email.trim()) {
      newErrors.email="Email is required !" 
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.password.length < 8) {
       newErrors.password="password must be atleast 8 character !" 
    }

    if (!formData.username.trim()) {
      newErrors.username ="username is required !"
    }

    return newErrors;
  }
  // handle Change function-
  const handleChange = (e) => {
    console.log("event object", e);
    
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    // if (errors[name]) {
    //   setErrors((prev) => ({ ...prev, [name]: "" }));
    // }
  };

  //handle-Submit
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Valid data submitted:", formData);
  };
  return (
    <div>
      
      <div className="container col-xl-10 col-xxl-8 px-4 py-5"> <div className="row align-items-center g-lg-5 py-5">
        <h1 className='text-center'>Registration-Form</h1>
         <div className="col-lg-7 text-center text-lg-start">
           <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1> <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> 
           </div> 
         <div className="col-md-10 mx-auto col-lg-5"> 
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit} action={'/form-submit'} method=''> 
             <div className="form-floating mb-3"> 
             {/* <label htmlFor="floatingInput1">Username</label>
             <input type="text" className="form-control" id="floatingInput1" placeholder="name@example.com"/>  */}
            <input type="text" className="form-control" id="floatingInput1" placeholder="name@example.com" value={formData.username} onChange={handleChange} name='username'/> 
            {/* setting Erros */}

            { errors.username && <p style={{color:"red"}}>{errors.username}</p>}
         <label htmlFor="floatingInput1">Username</label>
        
          </div>
            <div className="form-floating mb-3"> 
             {/* <label htmlFor="floatingInput1">Username</label>
             <input type="text" className="form-control" id="floatingInput1" placeholder="name@example.com"/>  */}
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={formData.email} onChange={handleChange} name='email'/> 
             { errors.email && <p style={{color:"red"}}>{errors.email}</p>}
         <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3"> 
            <input type="text" value={formData.password} className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} name='password'/> 
              { errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <label htmlFor="floatingPassword">Password</label> 
            </div>
         
  <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>  </form> </div> </div>
   </div>
    </div>
  )
}

export default Registration
