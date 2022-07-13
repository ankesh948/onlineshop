import React, {useState} from "react";
import {Navigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";

function Login() {
   const [username, setUserName] = useState();
   const [password, setPassword] = useState();
   const [getStatus, setStatus] = useState();

   const credentials = {
    username,
    password
  }
  async function loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login/',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    }
    ).then(data => data.json())
   }

   const handleSubmit = async e => {
     e.preventDefault();
      if('accessToken' in await loginUser(credentials)){
        await loginUser(credentials).then((value) => {
          localStorage.setItem('accessToken', value['accessToken']);
          localStorage.setItem('user', JSON.stringify(value['user']));
          setStatus(true);
        });
      }else{
        await loginUser(credentials).then((value) => {
        alert(`Failed ${value.message}`);
      })
    }
   }

  function getCurrentUser() {
    try {
      const jwt = localStorage.getItem("accessToken");
      return jwtDecode(jwt);
    } catch {
      return null;
    }
  }
if (getCurrentUser()) {
    return <Navigate to="/dashboard" />;
}

if(getStatus){
  return <Login />
}


  return (
    <>

      <div className="main loginbg">
        <section className="login rounded-1 overflow-hidden">
        <div className="row align-items-center">
          <div className="col-12">
          <form id="loginform"  className="card bg-transparent p-4 border-0  text-white">
            <h2 className="mb-4 text-center">Admin Login</h2>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                placeholder="Enter email"
                onChange={(event) =>setUserName(event.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) =>setPassword(event.target.value)}
              />
            </div>
           
            <div className="mt-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
              <button type="button" onClick={handleSubmit} className="btn btn-primary mt-4 w-100">Submit</button>

            <div class="row">
              <div class="col-6 m-auto">
                <button className="btn btn-outline-light mt-4 w-100">Forget Password</button>
              </div>
            </div>
          </form>
          </div>

        </div>
        </section>
      </div> 
    </>
  )
}

export default Login