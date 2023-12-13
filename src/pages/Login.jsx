import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Icon chat</span>
            <span className="title">Login</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  );
};

export default Login;



