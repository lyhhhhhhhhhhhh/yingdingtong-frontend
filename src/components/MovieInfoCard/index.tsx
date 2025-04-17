"use client"

import {Button, Col, Divider, Image, message, Row, Space, Tag, Typography} from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/stores";
import {setMovieOrder} from "@/stores/movieOrder";
import {useRouter} from "next/navigation";

const MovieInfoCard = ({newSelectSeat, movieInfo, movieTimesInfo, cinemaInfo, seatsPerRow}) => {

    const  router = useRouter()

    const loginUser = useSelector((state) => state.loginUser)

    const dispatch = useDispatch<AppDispatch>()

    console.log(movieTimesInfo.showTime)

    const handleSelectSeat = () => {
        if (loginUser.userName === "未登录") {
            message.warning("请登录下单")
            router.push("/user/login")
        }else {
            const orderData = {
                movieId: movieInfo.id || "",            // 电影ID
                movieName: movieInfo.movieTitle || "",       // 电影名称
                cinemaId: cinemaInfo.id || "",         // 影院ID
                cinemaName: cinemaInfo.cinemaTitle || "",    // 影院名称
                cinemaHallName: movieTimesInfo.cinemaHallName || "", // 影厅名称
                seatInfo: newSelectSeat || [],             // 座位信息
                movieSessionId: movieTimesInfo.id || "", // 电影场次ID
                movieShowTime: movieTimesInfo.showTime || "", // 场次时间
                totalPrice: newSelectSeat.length * movieTimesInfo.moviePrice || 0, // 总金额
                isPayFor: false, // 是否已支付
            };
            // Dispatch 到 Redux 中
            dispatch(setMovieOrder(orderData));
            router.push("/confirmOrder")
        }
    };

    return (
        <Col span={8} style={{backgroundColor: '#f0f2f5', paddingLeft: 32, paddingTop: 16}}>
            <Row gutter={24} align="top">
                <Col span={12}>
                    <Image
                        src={movieInfo.moviePicture}
                        width="100%"
                    />
                </Col>
                <Col span={12}>
                    <Space direction="vertical" size="small" style={{width: '100%'}}>
                        <Typography.Title level={5} style={{whiteSpace: 'normal'}}>
                            {movieInfo.movieTitle}
                        </Typography.Title>
                        <Typography.Text type="secondary" style={{whiteSpace: 'normal', fontSize: 13}}>
                            类型: {movieInfo.movieType}
                        </Typography.Text>
                        <Typography.Text type="secondary" style={{whiteSpace: 'normal', fontSize: 13}}>
                            时长: {movieInfo.movieDuration} 分钟
                        </Typography.Text>
                    </Space>
                </Col>
            </Row>
            <Space direction="vertical" size="small" style={{width: '100%', marginTop: 12}}>
                <Typography.Paragraph>
                    <Typography.Text type="secondary">影院: </Typography.Text>
                    <Typography.Text>{cinemaInfo.cinemaTitle}</Typography.Text>
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <Typography.Text type="secondary">影厅: </Typography.Text>
                    <Typography.Text>{movieTimesInfo.cinemaHallName}</Typography.Text>
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <Typography.Text type="secondary">版本: </Typography.Text>
                    <Typography.Text>{movieTimesInfo.movieLanguage}</Typography.Text>
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <Typography.Text type="secondary">场次: </Typography.Text>
                    <Typography.Text style={{color: "red"}}>
                        {`${dayjs(movieTimesInfo.showTime).isSame(dayjs(), 'day') ? '今天' :
                            dayjs(movieTimesInfo.showTime).isSame(dayjs().add(1, 'day'), 'day') ? '明天' :
                                dayjs(movieTimesInfo.showTime).isSame(dayjs().add(2, 'day'), 'day') ? '后天' : ''} 
       ${dayjs(movieTimesInfo.showTime).format('MM月DD日 HH:mm')}`}
                    </Typography.Text>
                </Typography.Paragraph>
                <Typography.Paragraph>
                    <Typography.Text type="secondary">票价: </Typography.Text>
                    <Typography.Text>¥{movieTimesInfo.moviePrice}/张</Typography.Text>
                </Typography.Paragraph>
            </Space>
            <Divider style={{margin: '12px 0', width: '100%'}} dashed/>
            <Typography.Paragraph>
                <Typography.Text type="secondary">座位: </Typography.Text>
                <Typography.Text>一次最多选择6个座位</Typography.Text>
            </Typography.Paragraph>
            {!newSelectSeat.length ? (
                <Typography.Text style={{display: "block", textAlign: "center"}}>
                    请 <Typography.Text style={{color: "red"}}>点击左侧</Typography.Text> 座位图选择座位
                </Typography.Text>
            ) : (
                <Space wrap style={{display: "flex", justifyContent: "center", marginTop: 10}}>
                    {newSelectSeat.map((seatIndex) => {
                        const row = Math.floor(seatIndex / seatsPerRow) + 1; // 计算排号
                        const column = (seatIndex % seatsPerRow) + 1; // 计算座号
                        return (
                            <Tag key={seatIndex}>{`${row}排${column}座`}</Tag>
                        );
                    })}
                </Space>
            )}
            <Typography.Paragraph style={{marginTop: 24}}>
                <Typography.Text type="secondary">总价: </Typography.Text>
                <Typography.Text style={{color: "red"}}>
                    ¥<Typography.Text style={{
                    fontSize: 24,
                    color: "red"
                }}>{newSelectSeat.length * movieTimesInfo.moviePrice}</Typography.Text>
                </Typography.Text>
            </Typography.Paragraph>
            <Divider style={{margin: '12px 0', width: '100%'}} dashed/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/*<Link href={"/confirmOrder"}>*/}
                    <Button
                        type="primary"
                        style={{width: 120, marginTop: 12, borderRadius: '24px', marginBottom: 24}}
                        disabled={newSelectSeat.length === 0}
                        onClick={handleSelectSeat}
                    >
                        确认选座
                    </Button>
                {/*</Link>*/}
            </div>
        </Col>
    )
}

export default MovieInfoCard;