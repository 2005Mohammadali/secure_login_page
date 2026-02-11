import { Link } from "react-router-dom";
import React, { useState, type ChangeEvent} from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!!");
      return;
    }

    //logic to send data to backend api
    console.log(formData);

  };

  return (
    // MAIN CONTAINER
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-800 dark:to-slate-900 transition-colors duration-200">
      
      {/* REGISTER CARD */}
      <div className="bg-white shadow-2xl shadow-green-700/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl dark:shadow-2xl dark:shadow-green-700/40  w-full max-w-lg transition-colors duration-200 border border-transparent dark:border-slate-700/50">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-600 transition-colors duration-200">
            Create Account
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-200">
            Join our secure platform
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={submitHandler}>
          
          {/* Firstname and Lastname */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName" value={formData.firstName} onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder="Neo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName" value={formData.lastName} onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder="Anderson"
              />
            </div>
          </div>

          {/* Username & Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                name="username" value={formData.username} onChange={handleChange}
                type="text"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder="the_one"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                name="mobileNo" value={formData.mobileNo} onChange={handleChange}
                type="number"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder="9876543210"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              name="email" value={formData.email} onChange={handleChange}
              type="email"
              required
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
              placeholder="neo@matrix.com"
            />
          </div>

          {/* Password & Confirm */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                name="password" value={formData.password} onChange={handleChange}
                type="password"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Confirm <span className="text-red-500">*</span>
              </label>
              <input
                name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                type="password"
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold py-2.5 rounded-lg transition-all duration-200 mt-6"
          >
            Create Account
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 font-m hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;    