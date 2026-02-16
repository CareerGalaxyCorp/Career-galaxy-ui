import React from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon, CheckCircleIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const LandingPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Navbar */}
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src={logo}
                                alt="Career Galaxy Logo"
                                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                            <span className="text-xl font-bold text-gray-900 tracking-tight">Career Galaxy</span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Features</a>
                            <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Pricing</a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">About</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to="/login" className="text-gray-900 font-medium hover:text-purple-600 transition-colors">
                                Sign In
                            </Link>
                            <Link to="/register" className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full animate-fade-in">
                        🚀 Launch your career today
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                        Unlock Career Opportunities <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            Through Referrals
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
                        Connect with industry insiders, get referred to top tech companies, and fast-track your job application process.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/register" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full text-lg shadow-xl shadow-purple-200 transition-all hover:-translate-y-1">
                            Get Started for Free
                        </Link>
                        <Link to="/auth" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold rounded-full text-lg shadow-sm transition-all hover:-translate-y-1">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Career Galaxy?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We bridge the gap between talented developers and hiring managers through trusted referrals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <CheckCircleIcon className="w-8 h-8 text-purple-600" />,
                                title: "Verified Referrals",
                                desc: "Get referred by verified employees active in the industry."
                            },
                            {
                                icon: <UserGroupIcon className="w-8 h-8 text-blue-600" />,
                                title: "Direct Connections",
                                desc: "Skip the ATS black hole and get your resume in front of humans."
                            },
                            {
                                icon: <ChartBarIcon className="w-8 h-8 text-indigo-600" />,
                                title: "Track Progress",
                                desc: "Real-time updates on your referral status and application feedback."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <div className="p-3 bg-white rounded-xl w-fit shadow-sm mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-gray-600">Choose the plan that fits your career goals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Free", price: "$0", features: ["1 Active Referral", "Basic Profile", "Community Support"] },
                            { name: "Pro", price: "$29", features: ["5 Active Referrals", "Priority Support", "Profile Highlights", "Resume Review"], popular: true },
                            { name: "Premium", price: "$99", features: ["Unlimited Referrals", "Direct HR Intro", "Mock Interviews", "Dedicated Career Coach"] }
                        ].map((plan, idx) => (
                            <div key={idx} className={`relative p-8 bg-white rounded-2xl border ${plan.popular ? 'border-purple-500 shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'} flex flex-col`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-6">
                                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500 ml-2">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                                    Choose {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={logo}
                                    alt="Career Galaxy Logo"
                                    className="h-8 w-auto object-contain"
                                />
                                <span className="text-lg font-bold">Career Galaxy</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Empowering developers to find their dream jobs through the power of community referrals.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Career Galaxy. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
