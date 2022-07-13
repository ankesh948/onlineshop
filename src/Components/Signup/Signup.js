import React, { useState } from 'react'
import Header from '../Inc/Header'

function Signup() {
    const [name, setName] = useState()
    const [username, setEmail] = useState()
    const [password, setPassword] = useState()
    const allData = {
        name,
        username,
        password
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const result = await fetch('http://localhost:8888/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allData)
        }).then((response) =>response.json())

        if('username' in await result){
            alert('SuccessFully Created')
        }else{
            alert('error')
        }
    }


    return (
        <>
            <Header />
            <div className="main">
                <section className="login">
                    <form id="loginform" onSubmit={handleSubmit} className="card p-4">
                        <h2 className="mb-4 text-center">Sign Up</h2>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Name"
                                name="Name"
                                placeholder="Enter Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group  mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="EmailInput"
                                name="EmailInput"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="buttom" className="btn btn-primary mt-4">Submit</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Signup