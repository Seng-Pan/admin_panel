import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
// import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";

const Admin_Crendentials = {
    username : 'admin',
    email : 'admin285@gmail.com',
    password : '@dmin285'
};

const Login = ({ handleSignIn }) => {
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const clickSubmit = async () => {
        if(username === Admin_Crendentials.username && password === Admin_Crendentials.password) {
            navigate('/Sidebar');
        } else {
            alert("Invalid user!");
        }
    }

    return (
        <>
            <div className={"p-6"}>
                <h1 className="text-3xl font-bold text-center mb-4 text-shadow">
                    Login
                </h1>
                <form className="flex flex-col gap-3">
                    <div>
                        <label for="username" className="input-label">
                            Username
                        </label>
                        <input id="username" type="text" className="input" 
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label for="password" className="input-label">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="input pr-8"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />

                            {showPassword ? (
                                <FaEye
                                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ) : (
                                <FaEyeSlash
                                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )}
                        </div>
                    </div>
                </form>
                <button className="primary-btn" onClick={clickSubmit}>Submit</button>
                <p className="text-center text-sm my-3">Authorized person only!</p>
            </div>
        </>
    );
};

export default Login;