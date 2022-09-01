import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./firebase";
// @ts-ignore

export default function App() {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        // @ts-ignore
        await signup(emailRef.current.value, passwordRef.current.value);
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try {
            // @ts-ignore
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        setLoading(false);
    }

    return (
        <div id="main">
            {/*@ts-ignore*/}
            <div>Currently logged in as: { currentUser?.email } </div>

            <div id="fields">
                {/*@ts-ignore*/}
                <input ref={emailRef} placeholder="Email" />
                {/*@ts-ignore*/}
                <input ref={passwordRef} type="password" placeholder="Password" />
            </div>

            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>

        </div>
    );
}