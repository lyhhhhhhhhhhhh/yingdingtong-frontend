"use client"

import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormText,} from '@ant-design/pro-components';
import {userLoginUsingPost} from "@/api/userController";
import {message} from 'antd';
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/stores";
import {setLoginUser} from "@/stores/loginUser";

const LoginPage = () => {

    const router = useRouter(); // 使用 useRouter 钩子

    const dispatch = useDispatch<AppDispatch>();

    const loginForm = async (values) => {
        try {
            const res = await userLoginUsingPost({
                userAccount: values.username,
                userPassword: values.password
            })
            // @ts-ignore
            if (res.code === 0) {
                dispatch(setLoginUser(res.data))
                message.success('登录成功')
                router.replace("/")
            } else {
                // @ts-ignore
                message.error('登录失败' + res.message)
            }
        } catch (e) {
            message.error('登录失败' + e.message)
        }
    }

    return (
        <LoginForm
            logo="/assets/logo.png"
            title="影订通-用户登录"
            subTitle="一键式电影订票系统"
            onFinish={(values) => loginForm(values)}
        >
            <>
                <ProFormText
                    name="username"
                    fieldProps={{
                        size: 'large',
                        prefix: <UserOutlined className={'prefixIcon'}/>,
                    }}
                    placeholder={'请输入用户名'}
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                />
                <ProFormText.Password
                    name="password"
                    fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={'prefixIcon'}/>,

                    }}
                    placeholder={'请输入密码'}
                    rules={[
                        {
                            required: true,
                            message: '请输入密码！',
                        },
                    ]}
                />
            </>
            <a
                style={{
                    float: 'right',
                    marginBottom: 16
                }}
            >
                忘记密码
            </a>
        </LoginForm>
    );
};

export default LoginPage;