import { MenuProps } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Link from "next/link";

export const sidebarItems = (role: string) => {
    const defaultSidebarItems: MenuProps["items"] = [{
        label: "Profile",
        key: "profile",
        icon: <UserOutlined />,
        children: [
            {
                label: "Account Profile",
                key: "account-profile"
            },
            {
                label: "Account Password",
                key: "account-password"
            }
        ],
    }]
    const commonAdminSidebarAdmin: MenuProps["items"] = [{
        label: <Link href={`/${role}/manage-students`}>Manage Students</Link>,
        key: "manage-students",
    }]

    if (role === 'student') return defaultSidebarItems;
    if (role === 'admin') return commonAdminSidebarAdmin;
};

