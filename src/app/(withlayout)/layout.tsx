import Contents from '@/component/ui/Contents';
import Sidebar from '@/component/ui/Sidebar';
import { Layout } from 'antd';
import React, { useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout >
            <Sidebar></Sidebar>
            <Contents>
                {children}
            </Contents>
        </Layout>
    );
};

export default DashboardLayout;