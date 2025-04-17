"use client";

import { Card, Descriptions, Divider, Tag } from "antd";
import {getMovieorderVoByIdUsingGet} from "@/api/movieorderController";

const TicketDetails = async ({ params }) => {

    const { ticketId } = params

    let ticket

    try {
        const res = await getMovieorderVoByIdUsingGet({id: ticketId});
        ticket = res.data
        console.log(res.data)
    } catch (e) {
        console.log(e)
    }

    return (
        <div style={{ maxWidth: 800, margin: "20px auto", padding: "20px" }}>
            <Card title="电影票订单详情" bordered>
                <Descriptions bordered column={1} size="middle">
                    <Descriptions.Item label="电影名称">
                        {ticket.movieName}
                    </Descriptions.Item>
                    <Descriptions.Item label="影院名称">
                        {ticket.cinemaName}
                    </Descriptions.Item>
                    <Descriptions.Item label="影厅">
                        {ticket.cinemaHallName}
                    </Descriptions.Item>
                    <Descriptions.Item label="场次时间">
                        {new Date(ticket.movieShowTime).toLocaleString()}
                    </Descriptions.Item>
                    <Descriptions.Item label="座位信息">
                        {JSON.parse(ticket.seatInfo).seats.join(", ")}
                    </Descriptions.Item>
                    <Descriptions.Item label="总价格">
                        ￥{ticket.totalPrice}
                    </Descriptions.Item>
                    <Descriptions.Item label="支付状态">
                        {ticket.isPayFor === 1 ? (
                            <Tag color="green">已支付</Tag>
                        ) : (
                            <Tag color="red">未支付</Tag>
                        )}
                    </Descriptions.Item>
                </Descriptions>
                <Divider />
            </Card>
        </div>
    );
};



export default TicketDetails;