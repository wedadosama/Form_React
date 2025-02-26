import { Link } from "react-router-dom";
import { useState } from "react";


function SignUp() {
   const [fromInputs, setFromInputs] = useState({ email: "", password: "" ,tel:"",fristName:"", lastName:""});
    console.log(fromInputs);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-400 to-purple-500 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-purple-600">Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mt-4">
          <input type="firstName" placeholder="First name" onChange={(e) => setFromInputs({ ...fromInputs, fristName: e.target.value })} className="w-full border p-2 rounded-lg" />
          <input type="lastName" placeholder="Last name" onChange={(e) => setFromInputs({ ...fromInputs, lastName: e.target.value })} className="w-full border p-2 rounded-lg" />
          <input type="tel" placeholder="Phone number" onChange={(e) => setFromInputs({ ...fromInputs, tel: e.target.value })} className="w-full border p-2 rounded-lg" />
          <input type="email" placeholder="Email" onChange={(e) => setFromInputs({ ...fromInputs, email: e.target.value })} className="w-full border p-2 rounded-lg" />
          <input type="password" placeholder="Password" onChange={(e) => setFromInputs({ ...fromInputs, password: e.target.value })} className="w-full border p-2 rounded-lg" />
          <button className="w-full bg-purple-500 hover:bg-purple-200 text-white p-2 rounded-lg">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-500">Already have an account?</p>
          <Link to="/SignIn" className="text-purple-600  font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
