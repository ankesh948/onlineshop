import React, {useState} from "react";

function UserLogin() {
   const [username, setUserName] = useState();
   const [password, setPassword] = useState();

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
        });
      }else{
        await loginUser(credentials).then((value) => {
        alert(`Failed ${value.message}`);
      })
    }
   }



  return (
    <>

      <div className="main">
        <section className="login">

          <form id="loginform" onSubmit={handleSubmit}  className="card p-4">
            <h2 className="mb-4 text-center">Login</h2>

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
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </form>
        </section>
      </div> 
    </>
  )
}

export default UserLogin