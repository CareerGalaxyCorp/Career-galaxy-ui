import React from 'react';
import Layout from '../components/Layout';
import ProfileOverview from '../components/ProfileOverview';
import ActiveReferral from '../components/ActiveReferral';
import ReferralApplications from '../components/ReferralApplications';

const Dashboard = () => {
    return (
        <Layout>
            <div className="grid grid-cols-12 gap-6">
                {/* Top Row: Profile (8 cols) + Active Referral (4 cols) */}
                <div className="col-span-12 lg:col-span-8">
                    <ProfileOverview />
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <ActiveReferral />
                </div>

                {/* Bottom Row: Applications Table (Full Width) */}
                <div className="col-span-12">
                    <ReferralApplications />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
