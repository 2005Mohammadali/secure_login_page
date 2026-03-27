import React from "react";
import axios from "axios";
import { useLoaderData, redirect, useNavigate } from "react-router-dom";

export const profileLoader = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/me`, {
      // CRITICAL: This tells Axios to send your secure HTTP-only cookies (the session token)
      withCredentials: true, 
    });
    return response.data;
  } catch (error) {
    return redirect("/login");
  }
};


const ProfilePage = () => {
  const user = useLoaderData() as any; 
  const navigate = useNavigate();

  const handleLogout = async () => {
    axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/auth/logout`, {
      withCredentials: true
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-800 dark:to-slate-900 transition-colors duration-200">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-lg transition-colors duration-200">
        
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-16 w-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            {user.firstName ? user.firstName[0].toUpperCase() : "U"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Welcome, {user.firstName} {user.lastName}!
            </h2>
            <p className="text-slate-500 dark:text-slate-400">@{user.username}</p>
          </div>
        </div>

        <div className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-6">
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">Email</label>
            <p className="text-lg text-slate-900 dark:text-white font-medium">{user.email}</p>
          </div>
          
          {user.mobileNo && (
            <div>
              <label className="block text-sm font-medium text-slate-500 dark:text-slate-400">Mobile No</label>
              <p className="text-lg text-slate-900 dark:text-white font-medium">{user.mobileNo}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-lg transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;