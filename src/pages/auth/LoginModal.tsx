import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white w-95 rounded-2xl shadow-2xl p-6 relative animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-900">
          {isSignup ? "Create Account" : "Welcome Back !"}
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          {isSignup
            ? "Sign up to start shopping"
            : "Login to continue shopping"}
        </p>

        {/* Username - Only visible in signup mode with animation */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSignup
              ? "opacity-100 max-h-20 mb-4"
              : "opacity-0 max-h-0 overflow-hidden mb-0"
          }`}
        >
          <label className="text-sm text-gray-600">Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="text-sm text-gray-600">Password</label>
          <div className="mt-1 flex items-center border border-gray-300 rounded-lg px-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full py-2 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Options - Hide in signup mode */}
        {!isSignup && (
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-[#FF6B35] hover:underline">
              Forgot Password?
            </button>
          </div>
        )}

        {/* Action Button */}
        <button className="w-full bg-[#FF6B35] hover:bg-[#e85a25] text-white py-2 rounded-lg font-medium transition">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-2 text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social Login */}
        <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google"
          />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-5">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span
            onClick={() => setIsSignup(!isSignup)}
            className="text-[#FF6B35] cursor-pointer hover:underline"
          >
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
