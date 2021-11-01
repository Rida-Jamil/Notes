import React, { useState } from 'react';
import style from "./Login.module.css";
import Input from '../Input/Input';
import Button from '../Button/Button';

function Login() {

    // let email = "";
    // let password = "";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className={style.container}>
            <h1> Login </h1>

            <form onSubmit={loginHandler}>
                <div className={style.forms}>
                    <label htmlFor="email">Email: </label>
                    <Input type="email" value={email} change={setEmail} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <Input type="password" value={password} change={setPassword} />
                </div>

                <Button val="login" />
            </form>
        </div>
    )
}

export default Login;
