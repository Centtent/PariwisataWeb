import React from 'react'
import { useEffect } from 'react'
import loginHandler from '../Api/LoginHandler'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [data, setData] = useState()
    const formRef = useRef()
    const navigate = useNavigate();
    useEffect(() => {
        loginHandler.get().then(result => setData(result))
    }, [])
    function submit(e) {
        e.preventDefault();
        // if (checkUser) return alert("Anda telah login!");
        const { [0]: username, [1]: password } = formRef.current;

        if (username.value.length <= 0 || password.value.length <= 0) return alert("input tidak boleh kosong!");

        const matchUsername = data.find((i) => i.username == username.value);
        const matchPassword = matchUsername?.password == password.value;

        if (matchUsername && matchPassword) {
            console.log("test")
            localStorage.setItem("username", username.value);
            navigate("/");
            window.location.reload();
        } else {
            return alert("akun tidak terdaftar");
        }

    }
    return (
        // <div className='login'>
        //     <form ref={formRef}>
        //         <input type="text" />
        //         <input type="password" />
        //         <button onClick={submit}>Submit</button>
        //     </form>
        // </div>
        <div className="login">

            <form className="form-login" ref={formRef}>
                <center>
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>
                </center>
                <div className="input-container ic1">
                    <input id="username" className="input" type="text" placeholder=" " />
                    <div className="cut"></div>
                    <label for="username" className="placeholder">Username</label>
                </div>
                <div className="input-container ic2">
                    <input id="password" className="input" type="password" placeholder=" " />
                    <div className="cut"></div>
                    <label for="password" className="placeholder">Password</label>
                </div>
                <button type="text" className="submit" onClick={submit}>submit</button>
            </form>
        </div>
    )
}
