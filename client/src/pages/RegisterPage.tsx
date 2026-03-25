import { Form, Link, redirect, useActionData, useNavigate, useNavigation } from "react-router-dom";
import React, { useEffect, useState, type ChangeEvent } from "react";
import Input from "../components/Input";
import axios from "axios";
import Toast from "../components/Toast";

export const registerAction = async ({request}: {request: Request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  if(data.password !== data.confirmPassword){
    return {
      error: "Passwords do not match!!"
    }
  }

  const payload = {
    ...data,
    mobileNo: Number(data.mobileNo)
  }

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/register`, payload);
    return redirect("/login?success=true");
  } catch (error: any) {
    return {
      error: error.response?.data || "Registration failed. Please try again."
    };
  }
}

const RegisterPage = () => {
  const actionData = useActionData() as {error?: string};
  const navigation = useNavigation();
  const isSubmitting: boolean = navigation.state === "submitting";

  const [toast, setToast] = useState<{message: string, type: "success" | "error"} | null>(null);

  useEffect(() => {
    if(actionData?.error){
      setToast({message: actionData.error, type: "error"});
    }
  }, [actionData])

  // const navigate = useNavigate();
  
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   mobileNo: "",
  // });
  
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
    
  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match!!");
  //     navigate("/register");
  //     return;
  //   }

  //   //logic to send data to backend api
  //   try {
  //     const payload = {
  //       ...formData,
  //       mobileNo: Number(formData.mobileNo),
  //     };

  //     await axios.post("http://localhost:1337/api/v1/auth/register", payload);
  //     alert("Registration Successful");
  //     // console.log("Response:", request.data);

  //     navigate("/login");

  //   } catch (error: any) {
  //     console.log("Registration Error:", error);
  //     alert(error.response?.data || "Registration failed. Please try again.");
  //   }

  // };

  return (
    // MAIN CONTAINER
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-800 dark:to-slate-900 transition-colors duration-200">

      {/* TOAST NOTIFICATION */}
      {toast && 
        (<Toast 
          message={toast.message}
          type={toast.type} 
          onClose={() => setToast(null)} 
        />)}
        
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
        <Form className="space-y-4" method = "post">

          {/* Firstname and Lastname */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Firstname"
              name="firstName"
              placeholder="Neo"
            />

            <Input
              label="Lastname"
              name="lastName"
              placeholder="Anderson"
            />
          </div>


          {/* Username & Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Username"
              type="text"
              name="username"
              placeholder="the_one"
            />

            <Input
              label="Mobile No"
              type="number"
              name="mobileNo"
              placeholder="9876543210"
            />
          </div>

          {/* Email */}
          <div>
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>

          {/* Password & Confirm */}
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Password"
              type="password"
              name="password"
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold py-2.5 rounded-lg transition-all duration-200 mt-6">
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </Form>

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