import axios from "axios";
import Input from "../components/Input";
import { Form, Link, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";

export const loginAction = async ({request}: {request: Request}) => {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/sessions`, user);
    return redirect('/me');
  } catch (error: any) {
    return {
      error: "Invalid Login Credentials !!"
    };
  }
}

const LoginPage = () => {
  const actionData = useActionData() as {error? : string};
  const navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";

  const [toast, setToast] = useState<{message: string, type: "success" | "error"} | null>(null);

  useEffect(() => {
    if (actionData?.error) {
      setToast({
        message: actionData.error,
        type: "error"
      });
    }
  }, [actionData]);
  
  // const navigate = useNavigate();
  // const submitHandler = async ( e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
    
  //   const user = {
  //     email: "",
  //     password: "",
  //   }
  //   console.log("User", user);
    
  //   try {
  //     await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/sessions`, user);
  //     alert("Login Successful");
  //     navigate("/me");
  //   } catch (error) {
  //     console.log("Login Error:", error);
  //     alert("Incorrect Login Credentials!!");
  //     navigate("/login");
  //   }
    

  // }
  return (
    // MAIN CONTAINER
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-800 dark:to-slate-900 transition-colors duration-200">
      
      {/* TOAST NOTIFICATION */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      {/* LOGIN CARD */}
      <div className="bg-white shadow-2xl shadow-green-700/80 dark:bg-slate-800/70 backdrop-blur-md p-8 rounded-xl dark:shadow-2xl dark:shadow-green-700/40 w-full max-w-md transition-all duration-200 border border-transparent dark:border-slate-700/50">
        
        
        {/* HEADER SECTION */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-600 transition-colors duration-200">
            Welcome Back
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-200">
            Please sign in to your account
          </p>
        </div>

        {/* THE FORM */}
        <Form method="post" className="space-y-6">
          
          {/* Email Input */}
          {/* <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-200">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-1 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent outline-none"
              placeholder="you@example.com"
            />
          </div> */}
          <div>
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>

          {/* Password Input */}
          {/* <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors duration-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-1 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">
                Forgot password?
              </a>
            </div>
          </div> */}
          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="*******"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </Form>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400 transition-colors duration-200">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-200">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;