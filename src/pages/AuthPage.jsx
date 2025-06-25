// import React, { useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { auth, db } from '../firebase';
// import { useNavigate } from 'react-router-dom';


// export default function AuthPage() {
//   const [isSignup, setIsSignup] = useState(true);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     mobile: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isSignup && formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
      
//       return;
//     }

//     try {
//       if (isSignup) {
//         const userCred = await createUserWithEmailAndPassword(
//           auth,
//           formData.email,
//           formData.password
//         );
//         const uid = userCred.user.uid;

//         await setDoc(doc(db, 'users', uid), {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           mobile: formData.mobile,
//           email: formData.email,
//           createdAt: new Date(),
//         });

//         alert('Signup successful & data saved!');
//       } else {
//         const userCred = await signInWithEmailAndPassword(
//           auth,
//           formData.email,
//           formData.password
//         );
//         alert('Login successful!');
       

//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden shadow-xl bg-gray-900">
//         {/* Left Side Image + Text */}
//         <div className="hidden md:flex w-1/2 relative bg-gray-800 items-center justify-center p-8">
//           <img
//             src="/id-verification-illustration.png"
//             alt="Secure Verification"
//             className="absolute inset-0 w-full h-full object-cover opacity-30"
//           />
//           <div className="relative z-10 text-white text-center space-y-4 px-4">
//             <h2 className="text-3xl font-bold">Secure AI Identity Checks</h2>
//             <p className="text-sm text-gray-300">
//               Verify your age and ID using simulated cards + smart facial match.
//               Trusted & Fast.
//             </p>
//             <p className="text-xs text-blue-400 italic">
//               Simulated Government Card • Secure by Design
//             </p>
//           </div>
//         </div>

//         {/* Right Side Form */}
//         <div className="w-full md:w-1/2 bg-gray-900 p-8 text-white">
//           <h2 className="text-2xl font-semibold mb-6">
//             {isSignup ? 'Create Your Account' : 'Welcome Back'}
//           </h2>

//           <form
//             className="space-y-4"
//             onSubmit={handleSubmit}
//           >
//             {isSignup && (
//               <>
//                 <div className="flex gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <input
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </>
//             )}

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             {isSignup && (
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             )}

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
//             >
//               {isSignup ? 'Sign Up' : 'Sign In'}
//             </button>
//           </form>

//           <p className="text-center text-sm mt-4 text-gray-400">
//             {isSignup ? (
//               <>
//                 Already a user?{' '}
//                 <button
//                   className="text-blue-400 hover:underline"
//                   onClick={() => setIsSignup(false)}
//                 >
//                   Sign in here
//                 </button>
//               </>
//             ) : (
//               <>
//                 New to VerifyMe?{' '}
//                 <button
//                   className="text-blue-400 hover:underline"
//                   onClick={() => setIsSignup(true)}
//                 >
//                   Sign up here
//                 </button>
//               </>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden shadow-xl bg-gray-900">
        {/* Left Side Image + Text */}
        <div className="hidden md:flex w-1/2 relative bg-gray-800 items-center justify-center p-8">
          <img
            src="/id-verification-illustration.png"
            alt="Secure Verification"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 text-white text-center space-y-4 px-4">
            <h2 className="text-3xl font-bold">Secure AI Identity Checks</h2>
            <p className="text-sm text-gray-300">
              Verify your age and ID using simulated cards + smart facial match.
              Trusted & Fast.
            </p>
            <p className="text-xs text-blue-400 italic">
              Simulated Government Card • Secure by Design
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">
            {isSignup ? 'Create Your Account' : 'Welcome Back'}
          </h2>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {isSignup && (
              <>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-400">
            {isSignup ? (
              <>
                Already a user?{' '}
                <button
                  className="text-blue-400 hover:underline"
                  onClick={() => setIsSignup(false)}
                >
                  Sign in here
                </button>
              </>
            ) : (
              <>
                New to VerifyMe?{' '}
                <button
                  className="text-blue-400 hover:underline"
                  onClick={() => setIsSignup(true)}
                >
                  Sign up here
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
