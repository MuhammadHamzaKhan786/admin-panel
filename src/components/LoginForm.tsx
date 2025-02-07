// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   FaEnvelope,
//   FaLock,
//   FaEye,
//   FaEyeSlash,
//   FaShieldAlt,
// } from "react-icons/fa";

// const ThemedIcon = ({
//   icon: Icon,
//   className,
// }: {
//   icon: React.ElementType;
//   className?: string;
// }) => <Icon className={className || ""} />;
// const LoginForm = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") {
//       router.push("/admin"); //Direct to admin page if already logged in ///
//     }
//   }, [router]);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
//     const adminPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

//     if (email === adminEmail && password === adminPassword) {
//       setMessage("Login successful");
//       localStorage.setItem("isLoggedIn", "true"); // Set login status in local storage
//       setIsLoggedIn(true);
//       router.push("/admin/deshboard");
//     } else {
//       if (email !== adminEmail) {
//         setMessage("Invalid email address");
//       } else if (password !== adminPassword) {
//         setMessage("Invalid password");
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen  bg-sky-100">
//       <form
//         onSubmit={handleLogin}
//         className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 overflow-hidden bg-gradient-to-br from-sky-500 to-cyan-400  hover:shadow-sky-200 active:scale-95">
//         {/* Decorative elements */}
//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-300/30 rounded-full blur-xl" />
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-300/30 rounded-full blur-xl" />

//         <div className="text-center mb-10">
//           <div className="mx-auto mb-6 flex justify-center">
//             <div className="p-4 bg-sky-100 rounded-full shadow-sm">
//               <ThemedIcon
//                 icon={FaShieldAlt}
//                 className="text-4xl text-sky-500"
//               />
//             </div>
//           </div>
//           <h2 className="text-4xl font-bold text-white mb-2">Admin Portal</h2>
//           <p className="text-white/90">Secure access to dashboard</p>
//         </div>

//         {message && (
//           <div
//             className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
//               message.includes("Invalid")
//                 ? "bg-red-100/30 text-red-200"
//                 : "bg-green-100/30 text-green-200"
//             }`}>
//             <div
//               className={`flex-1 text-center font-medium ${message.includes("Invalid") ? "animate-shake" : ""}`}>
//               {message}
//             </div>
//           </div>
//         )}

//         <div className="space-y-6">
//           {/* Email Input */}
//           <div className="group">
//             <div className="relative">
//               <ThemedIcon
//                 icon={FaEnvelope}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg"
//               />
//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full pl-12 pr-4 py-4 bg-white/5 border border-sky-200 rounded-xl text-white placeholder-white focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-100 transition-all"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div className="group">
//             <div className="relative">
//               <ThemedIcon
//                 icon={FaLock}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-lg"
//               />
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Admin Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full pl-12 pr-12 py-4 bg-white/5 border border-sky-200 rounded-xl text-white placeholder-white focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-100 transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-sky-500 transition-colors">
//                 {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-cyan-500 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-sky-200 active:scale-95">
//             Authenticate
//           </button>
//         </div>

//         {/* Footer Note */}
//         <p className="mt-8 text-center text-sm text-sky-300">
//           Restricted access - authorized personnel only
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;





















// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => <Icon className={className || ""} />;

// const LoginForm = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") {
//       router.push("/admin"); // Direct to admin page if already logged in
//     }
//   }, [router]);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
//     const adminPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

//     if (email === adminEmail && password === adminPassword) {
//       setMessage("Login successful");
//       localStorage.setItem("isLoggedIn", "true"); // Set login status in local storage
//       setIsLoggedIn(true);
//       router.push("/admin/deshboard");
//     } else {
//       if (email !== adminEmail) {
//         setMessage("Invalid email address");
//       } else if (password !== adminPassword) {
//         setMessage("Invalid password");
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-white">
//       <form
//         onSubmit={handleLogin}
//         className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl w-full max-w-sm border border-blue-500 overflow-hidden"
//       >
//         {/* Decorative elements */}
//         <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-300/30 rounded-full blur-xl" />
//         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-300/30 rounded-full blur-xl" />

//         <div className="text-center mb-6">
//           <div className="mx-auto mb-4 flex justify-center">
//             <div className="p-4 bg-blue-100 rounded-full shadow-sm">
//               <ThemedIcon icon={FaShieldAlt} className="text-4xl text-blue-500" />
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-black mb-2">Admin Portal</h2>
//           <p className="text-gray-800">Secure access to dashboard</p>
//         </div>

//         {message && (
//           <div
//             className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
//               message.includes("Invalid") ? "bg-red-100/30 text-red-200" : "bg-green-100/30 text-green-200"
//             }`}
//           >
//             <div className={`flex-1 text-center font-medium ${message.includes("Invalid") ? "animate-shake" : ""}`}>
//               {message}
//             </div>
//           </div>
//         )}

//         <div className="space-y-6">
//           {/* Email Input */}
//           <div className="group">
//             <div className="relative">
//               <ThemedIcon icon={FaEnvelope} className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg" />
//               <input
//                 type="email"
//                 placeholder="Admin Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full pl-12 pr-4 py-4 bg-white/5 border border-blue-200 rounded-xl text-black placeholder-white focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
//               />
//             </div>
//           </div>

//           {/* Password Input */}
//           <div className="group">
//             <div className="relative">
//               <ThemedIcon icon={FaLock} className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg" />
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Admin Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full pl-12 pr-12 py-4 bg-white/5 border border-blue-200 rounded-xl text-black placeholder-white focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
//               />
//               <button
//                 type="button"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-blue-500 transition-colors"
//               >
//                 {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-xl  active:scale-95"
//           >
//             Login
//           </button>
//         </div>

//         {/* Footer Note */}
//         <p className="mt-8 text-center text-sm text-gray-700"> Please enter your credentials to access the admin portal.</p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;























"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaKey } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
    const adminPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      setMessage("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-10 rounded-xl shadow-lg w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-teal-500 p-4 rounded-full shadow-md">
              <FaKey className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">ADMIN PANEL</h2>
        </div>

        {message && (
          <div className="mb-4 text-center text-red-500 font-semibold">
            {message}
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            USERNAME
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-b-2 border-teal-400 bg-transparent text-white focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            PASSWORD
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border-b-2 border-teal-400 bg-transparent text-white focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-3 text-teal-400"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
