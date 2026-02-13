import React from "react";

interface InputProps {
    label: string;
    name: string;
    value: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, value, type = "text", placeholder, onChange }) => {    
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                {label} <span className="text-red-500">*</span>
            </label>
            <input
                id={name}
                name={name} value={value} onChange={onChange}
                type={type}
                required
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-sm bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500 transition-all"
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;


