// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash, FaLinkedinIn } from "react-icons/fa";

// const Admin_Crendentials = {
//     username: 'admin',
//     email: 'admin285@gmail.com'
// };

// const Signin = ({ handleSignIn }) => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const handleCreateAccount = () => {
//         if (username === Admin_Crendentials.username && email === Admin_Crendentials.email) {
//           alert("Account created successfully!");
//         } else {
//           alert("Invalid user!");
//         }
//       };

//     return (
//         <>
//             <div className={"p-6"}>
//                 <h1 className="text-3xl text-shadow font-bold text-center mb-4">
//                     Create Your Account
//                 </h1>
//                 <form className="flex flex-col gap-3">
//                     <div>
//                         <label for="username" className="input-label">
//                             Username
//                         </label>
//                         <input id="username" type="text" className="input" 
//                         value={username} onChange={(e) => setUsername(e.target.value)} />
//                     </div>
//                     <div>
//                         <label for="email" className="input-label">
//                             Email
//                         </label>
//                         <input id="email" type="email" className="input" 
//                         value={email} onChange={(e) => setEmail(e.target.value)}/>
//                     </div>
//                     <div>
//                         <label for="password" className="input-label">
//                             Password
//                         </label>
//                         <div className="relative">
//                             <input
//                                 className="input pr-8"
//                                 id="password"
//                                 type={showPassword ? "text" : "password"}
//                                 value={password} onChange={(e) => setPassword(e.target.value)}
//                             />

//                             {showPassword ? (
//                                 <FaEye
//                                     className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 />
//                             ) : (
//                                 <FaEyeSlash
//                                     className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
//                                     onClick={() => setShowPassword(!showPassword)}
//                                 />
//                             )}
//                         </div>
//                     </div>
//                 </form>
//                 <button className="primary-btn" onClick={handleCreateAccount}>Create Account</button>
//                 <p className="text-center text-sm my-3">or login with</p>
//                 <div className="flex gap-6 justify-center">
//                     <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
//                         <FcGoogle className="text-3xl" />
//                     </div>
//                     <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300">
//                         <FaLinkedinIn className="text-2xl" />
//                     </div>
//                 </div>
//                 <p
//                     className="text-center text-sm my-3 hover:text-lime-100 cursor-pointer text-shadow"
//                     onClick={handleSignIn}
//                 >
//                     Already have an Account? Log in
//                 </p>
//             </div>
//         </>
//     );
// };

// export default Signin;