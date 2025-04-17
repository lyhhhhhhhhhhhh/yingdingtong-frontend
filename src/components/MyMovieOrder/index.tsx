import {Divider, Flex, Image, List, Space, Typography} from "antd";
import {listMovieorderVoByPageUsingPost} from "@/api/movieorderController";
import {useEffect, useState} from "react";
import Title from "antd/es/typography/Title";
import dayjs from "dayjs";
import DEFAULT_SORT_ORDER_BY from "@/constants/sortOrder";

interface Props {
    userId: any
}

const MyMovieOrder = (props: Props) => {
    const {userId} = props;

    const [myMovieOrder, setMyMovieOrder] = useState([]);

    const loadData = async () => {
        try {
            const res = await listMovieorderVoByPageUsingPost({userId, sortOrder: DEFAULT_SORT_ORDER_BY, sortField: "createTime"});
            setMyMovieOrder(res.data.records);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <List
                style={{width:"100%", margin: "0 auto"}}
                size="large"
                header={<div style={{fontWeight: "bold", fontSize: 18}}>电影订单</div>}
                footer={<div style={{textAlign: "center", fontWeight: "bold"}}>共 {myMovieOrder.length} 个订单</div>}
                bordered
                dataSource={myMovieOrder}
                renderItem={(item) => {
                    // 解析 seatInfo 获取座位号数组
                    let seatInfo;
                    let seats = [];
                    let seatCount = 0;
                    let formattedSeats = []; // 用于存储几排几座的格式化结果

                    try {
                        seatInfo = JSON.parse(item.seatInfo);
                        seats = seatInfo.seats || [];
                        seatCount = seats.length; // 获取座位数量

                        // 假设每排 12 个座位，计算几排几座
                        const seatsPerRow = 12;
                        formattedSeats = seats.map((seatIndex) => {
                            const row = Math.floor(seatIndex / seatsPerRow) + 1; // 排号
                            const column = (seatIndex % seatsPerRow) + 1; // 座号
                            return `${row}排${column}座`;
                        });
                    } catch (e) {
                        console.error("解析座位信息失败", e);
                    }

                    return (
                        <List.Item style={{padding: "16px"}}>
                            <Flex vertical={true}>
                                <div style={{fontSize: "16px", fontWeight: "bold", marginBottom: "8px"}}>{item.cinemaName}</div>
                                <Divider style={{margin: "8px 0", width: "100%"}}/>
                                <Flex justify={"flex-start"} align={"flex-start"}>
                                    <Image
                                        src={item.movieVO.moviePicture}
                                        style={{
                                            width: 80,
                                            height: 120,
                                            borderRadius: 8,
                                            objectFit: "cover"
                                        }}
                                    />
                                    <Flex vertical={true} style={{marginLeft: 20}}>
                                        <Title level={5} style={{marginBottom: "4px"}}>
                                            {item.movieName} ({seatCount}张)
                                        </Title>
                                        <Typography.Text type="secondary" style={{marginBottom: "4px"}}>
                                            <strong>座位:</strong> {formattedSeats.join(", ")}
                                        </Typography.Text>
                                        <Typography.Text type="secondary" style={{marginBottom: "4px"}}>
                                            {dayjs(item.movieShowTime).format("YYYY-MM-DD HH:mm:ss")}
                                        </Typography.Text>
                                    </Flex>
                                </Flex>
                                <Divider style={{margin: "16px 0", width: "100%"}}/>
                                <Typography.Text type="secondary" style={{fontSize: "16px"}}>
                                    总价: <span style={{color: "#fa541c", fontWeight: "bold"}}>{item.totalPrice}元</span>
                                </Typography.Text>
                            </Flex>
                        </List.Item>
                    );
                }}
            />
        </>
    );
};

export default MyMovieOrder;