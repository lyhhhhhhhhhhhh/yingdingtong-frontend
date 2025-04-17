"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Dropdown, Image, Layout, Menu, message, Space } from 'antd';
import { item } from "@/menu";
import { usePathname, useRouter } from "next/navigation";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/stores";
import { getLoginUserUsingGet, userLogoutUsingPost } from "@/api/userController";
import { setLoginUser } from "@/stores/loginUser";
import DEFAULT_USER from "@/constants/user";
import Title from "antd/es/typography/Title";

const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = ({ children }) => {

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const pathname = usePathname();

    // 从 Redux 获取用户登录信息
    const loginUser = useSelector((state) => state.loginUser);
    // 局部状态追踪登录状态变化，确保组件重新渲染
    const [isLoggedIn, setIsLoggedIn] = useState(!!loginUser);

    // 更新局部状态，以确保每次 Redux 的 loginUser 或 pathname 变化都会重新渲染
    useEffect(() => {
        setIsLoggedIn(!!loginUser);
    }, [loginUser, pathname]);

    const doInitLoginUser = useCallback(async () => {
        const res = await getLoginUserUsingGet();
        if (res.data) {
            dispatch(setLoginUser(res.data));
        } else {
            console.log("未登录");
        }
    }, [dispatch]);

    useEffect(() => {
        doInitLoginUser();
    }, [doInitLoginUser]);

    /**
     * 用户注销
     */
    const UserLogout = async () => {
        try {
            await userLogoutUsingPost();
            message.success("已退出登录");
            dispatch(setLoginUser(DEFAULT_USER));
            router.push("/user/login");
        } catch (e) {
            message.error("操作失败: " + e.message);
        }
    };

    return (
        <Layout className={"globals-style"} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', width: "100%" }}>
                <div className="demo-logo">
                    <Image src={"/assets/logo.png"} width={32} preview={false} />
                </div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    items={item}
                    selectedKeys={[pathname]}
                    style={{ flex: 1, minWidth: 0, marginLeft: 24 }}
                />
                {/* 右侧内容 */}
                {
                    loginUser.userName !== '未登录' ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Dropdown menu={{
                                items: [
                                    {
                                        key: "userCenter",
                                        icon: <UserOutlined />,
                                        label: <Link href={"/userCenter"}>用户中心</Link>,
                                    },
                                    {
                                        key: "logout",
                                        icon: <LogoutOutlined />,
                                        label: "退出登录",
                                    },
                                ],
                                onClick: async (event: { key: React.Key }) => {
                                    if (event.key === "logout") {
                                        UserLogout();
                                    }
                                },
                            }}>
                                <div>
                                    <Space size="small">
                                        {/* 用户名显示 */}
                                        <span>{loginUser.userName}</span>
                                        <Avatar icon={<UserOutlined />} />
                                    </Space>
                                </div>
                            </Dropdown>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Space>
                                <Avatar icon={<UserOutlined />} />
                                {!pathname.includes("/user/login") && !pathname.includes("/user/register") && (
                                    <Button type={"primary"}>
                                        <Link href={"/user/login"}>登录</Link>
                                    </Button>
                                )}
                            </Space>
                        </div>
                    )
                }
            </Header>
            <Content style={{ flex: 1, padding: '0 48px', backgroundColor: "white" }}>
                {children}
            </Content>
            <Footer style={{maxWidth:'100%',textAlign: 'center',left:0, width: "1200px",margin:"0",height:'50px'}}>
                By: LKING
            </Footer>
        </Layout>
    );
};

export default BasicLayout;