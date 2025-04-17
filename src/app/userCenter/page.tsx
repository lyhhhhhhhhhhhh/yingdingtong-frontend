"use client"

import {useSelector} from "react-redux";
import {Tabs, TabsProps} from "antd";
import MyMovieOrder from "@/components/MyMovieOrder";

const UserCenter = () => {

    const loginUser = useSelector((state) => state.loginUser)

    const userId = loginUser.id
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '我的订单',
            children: <MyMovieOrder userId={userId}/>,
        }
    ];

    return (
        <div style={{width: "80%", margin: "0 auto"}}>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
};

export default UserCenter;