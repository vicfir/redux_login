    import React, { useRef } from 'react'
    import { useDispatch , useSelector } from 'react-redux'
    import { submit } from "./loginSlice";

    export const Login = () => {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);

        const dispatch = useDispatch();

        const handleClick = () => {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            dispatch(submit({email, password}));
        }

        const loginDenied = useSelector(state => state.login.denied);

    return (
        <div>
            <input 
                ref={emailRef}
                type="email" 
            />

            <input 
                type="password" 
                ref={passwordRef}
            />

            <button onClick={handleClick}>Login</button>

            {loginDenied ? <h3>Acces denied, try again</h3> : null}
        </div>
    )
    }
