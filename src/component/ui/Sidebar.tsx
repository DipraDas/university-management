"use client"

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import { sidebarItems } from '@/constants/sidebarItems';
import { USER_ROLE } from '@/constants/role';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.ADMIN;
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
        </Sider>
    );
};

export default Sidebar;