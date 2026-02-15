import React from 'react';

const ReferralApplications = () => {
    const applications = [
        {
            company: 'Airbnb',
            logo: 'https://logo.clearbit.com/airbnb.com',
            role: 'Senior UI Engineer',
            date: 'Oct 24, 2023',
            status: 'In Review',
            statusColor: 'text-amber-600 bg-amber-50 border-amber-100',
        },
        {
            company: 'Stripe',
            logo: 'https://logo.clearbit.com/stripe.com',
            role: 'Product Designer',
            date: 'Oct 22, 2023',
            status: 'Interview',
            statusColor: 'text-purple-600 bg-purple-50 border-purple-100',
        },
        {
            company: 'Vercel',
            logo: 'https://logo.clearbit.com/vercel.com',
            role: 'Frontend Developer',
            date: 'Oct 20, 2023',
            status: 'Rejected',
            statusColor: 'text-red-600 bg-red-50 border-red-100',
        },
        {
            company: 'Shopify',
            logo: 'https://logo.clearbit.com/shopify.com',
            role: 'React Engineer',
            date: 'Oct 18, 2023',
            status: 'Applied',
            statusColor: 'text-blue-600 bg-blue-50 border-blue-100',
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
            <div className="px-6 py-5 border-b border-gray-50 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 text-lg">My Applications</h3>
                <button className="text-sm text-purple-600 font-medium hover:text-purple-700">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Applied Date</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {applications.map((app, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={app.logo}
                                            alt={app.company}
                                            className="w-8 h-8 rounded-lg object-contain bg-gray-50 p-1"
                                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + app.company }}
                                        />
                                        <span className="font-medium text-gray-900">{app.company}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {app.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {app.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${app.statusColor}`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReferralApplications;
