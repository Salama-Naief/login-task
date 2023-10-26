import React, { ChangeEvent, useState } from "react";
// import { TbExclamationMark } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  handleChange: (e: ChangeEvent<any>) => void;
  type: string;
  disabled: boolean;
  error?: string | undefined;
  value: string | number;
}
const Input: React.FC<InputProps> = ({
  id,
  name,
  error,
  handleChange,
  placeholder,
  type = "text",
  disabled,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center mt-6 gap-2">
      {/* {id === "password" && (
        <TbExclamationMark
          size={24}
          className="
            bg-mainColor
            text-white
            rounded-full
          "
        />
      )} */}
      <div className="relative w-full  ">
        <input
          disabled={disabled}
          type={showPassword ? "text" : type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`
        peer
        w-full
        p-3  
        relative
        bg-white 
        border
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        text-right
        text-xl
        text-mainColor
        ${
          error
            ? "border-rose-500 focus:border-rose-500 text-rose-500"
            : "border-mainColor focus:border-blue-700"
        }
      `}
        />
        {id === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className={`
        ${error && "text-rose-500"}
        left-3 absolute top-4 cursor-pointer text-mainColor`}
          >
            {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
          </div>
        )}

        {error && <p className="text-rose-500  text-right">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
