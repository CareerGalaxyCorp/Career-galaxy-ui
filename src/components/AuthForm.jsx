import { useState } from 'react';
import { FaRocket, FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!isLogin && !formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (!isLogin && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!isLogin && !formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
        }
    };

    const toggleMode = (mode) => {
        setIsLogin(mode === 'login');
        setErrors({});
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false
        });
        setShowPassword(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
                {/* Header Section */}
                <div className="text-center pt-8 pb-4">
                    <div className="flex justify-center items-center mb-2">
                        <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-3 rounded-full shadow-lg">
                            <FaRocket className="text-white text-2xl" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Career Galaxy</h2>
                    <p className="text-sm text-gray-500 mt-1">Launch your career journey</p>
                </div>

                {/* Toggle Section */}
                <div className="px-8 mb-6">
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => toggleMode('login')}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isLogin
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => toggleMode('register')}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${!isLogin
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Register
                        </button>
                    </div>
                </div>

                <div className="px-8 pb-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                    }`}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none ${errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                        }`}
                                />
                                {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
                            </div>
                        )}

                        {!isLogin && (
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="agreeToTerms" className="ml-2 block text-xs text-gray-600 cursor-pointer select-none">
                                    I agree to the <span className="text-indigo-600 hover:underline">Terms & Conditions</span>
                                </label>
                            </div>
                        )}
                        {!isLogin && errors.agreeToTerms && (
                            <p className="text-xs text-red-500">{errors.agreeToTerms}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transform transition-all active:scale-[0.98] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-2 bg-white text-gray-400 font-medium">
                                OR CONTINUE WITH
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <FaGoogle className="text-red-500 mr-2" />
                            <span className="text-sm font-medium text-gray-700">Google</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <FaGithub className="text-gray-900 mr-2" />
                            <span className="text-sm font-medium text-gray-700">GitHub</span>
                        </button>
                    </div>

                    {isLogin && (
                        <div className="mt-6 text-center">
                            <a href="#" className="text-xs text-indigo-600 hover:text-indigo-500 font-medium hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
