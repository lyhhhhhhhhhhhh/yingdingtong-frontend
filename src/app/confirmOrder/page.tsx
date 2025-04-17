"use client";

import {useSelector} from "react-redux";
import {Alert, Button, Flex, message, Steps, Table} from "antd";
import MovieIcon from "../../../public/icon/MovieIcon";
import {LoadingOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";
import {addMovieorderUsingPost} from "@/api/movieorderController";

const ConfirmOrder = () => {
    const movieOrder = useSelector((state) => state.movieOrder);
    const loginUser = useSelector((state) => state.loginUser);
    const router = useRouter();

    if (movieOrder === undefined) {
        router.push("/")
    }


    const handleSubmitOrder = async () => {
        try {
            // 将 seatInfo 转换为后端需要的 JSON 格式
            const formattedSeatInfo = {seats: movieOrder.seatInfo};
            //是否支付 后端需要传输的数据为 1 或者 0
            const isPayFor = movieOrder.isPayFor ? 1 : 0;

            // 提交订单数据
            const result = await addMovieorderUsingPost({
                ...movieOrder, // 展开原有数据
                seatInfo: formattedSeatInfo, // 替换 seatInfo 为 JSON 格式
                isPayFor: isPayFor, // 替换 isPayFor 为 1 或 0
                userId: loginUser.id
            });
            const MovieTicketId = result.data

            // 跳转时传递订单 ID
            router.push(`/MovieTicketQRCode/${MovieTicketId}`);
            message.success("订单提交成功");
        } catch (e) {
            message.error("订单提交失败", e);

        }
    };

    // 订单信息表格列定义
    const columns = [
        {title: "电影名称", dataIndex: "movieName", key: "movieName"},
        {title: "影院名称", dataIndex: "cinemaName", key: "cinemaName"},
        {title: "影厅", dataIndex: "cinemaHallName", key: "cinemaHallName"},
        {title: "座位信息", dataIndex: "seatInfo", key: "seatInfo", render: (seats) => seats.join(", ")},
        {title: "场次时间", dataIndex: "movieShowTime", key: "movieShowTime"},
        {title: "总价格", dataIndex: "totalPrice", key: "totalPrice"},
    ];

    // 订单信息表格数据
    const data = [
        {
            key: "1",
            movieName: movieOrder.movieName,
            cinemaName: movieOrder.cinemaName,
            cinemaHallName: movieOrder.cinemaHallName,
            seatInfo: movieOrder.seatInfo || [],
            movieShowTime: movieOrder.movieShowTime,
            totalPrice: movieOrder.totalPrice,
            isPayFor: movieOrder.isPayFor,
        },
    ];

    return (
        <>
            <Steps
                style={{marginTop: 16, marginBottom: 16}}
                items={[
                    {
                        title: '选择影片场次',
                        status: 'finish',
                        icon: <MovieIcon type={"icon-xuanze"}/>,
                    },
                    {
                        title: '选择座位',
                        status: 'finish',
                        icon: <MovieIcon type={"icon-zuoweitubiao_yixuanzezuowei"}/>,
                    },
                    {
                        title: 'Pay',
                        status: 'process',
                        icon: <LoadingOutlined/>,
                    },
                    {
                        title: '待观影',
                        status: 'wait',
                        icon: <MovieIcon type={"icon-shouye"}/>,
                    },
                ]}
            />
            <Alert message="刷新页面会导致订单失效，请重新下单" type="warning"
                   style={{marginBottom: 16, marginTop: 16}}/>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                title={() => "订单信息(请核对订单信息)"}
            />
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                <Button type="primary" size="large" onClick={handleSubmitOrder}>
                    立即支付
                </Button>
            </div>
        </>
    );
};

export default ConfirmOrder;