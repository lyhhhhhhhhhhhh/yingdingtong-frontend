"use client";

import { Space, Image, Divider, Typography, Col } from "antd";
import { Fragment, useState, useEffect } from "react";

// 座位选择区域组件
const SeatSelectionArea = ({ totalSeats, seatsPerRow, newSelectSeat, setNewSelectSeat, movieTimesInfo }) => {
    const [selectedSeats, setSelectedSeats] = useState([]); // 已选座位状态
    const [soldSeats, setSoldSeats] = useState([]); // 已售座位状态

    useEffect(() => {
        // 初始化座位状态
        if (movieTimesInfo?.seatInfo) {
            try {
                const seatInfo = JSON.parse(movieTimesInfo.seatInfo);
                if (seatInfo?.seats) {
                    setSoldSeats(seatInfo.seats); // 设置已售座位
                }
            } catch (error) {
                console.error("解析座位信息失败:", error);
            }
        }
    }, [movieTimesInfo]);

    const rows = Math.ceil(totalSeats / seatsPerRow);
    const seatTypes = [
        { src: "/assets/seat.png", label: "可选座位" },
        { src: "/assets/seat-unselected.png", label: "已选座位" },
        { src: "/assets/seat-selected.png", label: "已售座位" },
    ];

    const seatRows = Array.from({ length: rows }, (_, rowIndex) => (
        <Space key={rowIndex} style={{ marginBottom: 10, alignItems: "center" }} size={10}>
            {/* 每一行的最左侧添加排号 */}
            <Typography.Text style={{ fontSize: "14px", fontWeight: "bold", marginRight: "10px" }}>
                {`${rowIndex + 1}排`}
            </Typography.Text>
            {/* 每一行的座位 */}
            {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
                const seatNumber = rowIndex * seatsPerRow + seatIndex;
                if (seatNumber >= totalSeats) return null; // 超出总座位数量时不渲染

                // 确定座位图片类型
                const isSold = soldSeats.includes(seatNumber); // 是否已售
                const isSelected = selectedSeats.includes(seatNumber); // 是否已选中
                const seatSrc = isSold
                    ? "/assets/seat-selected.png"
                    : isSelected
                        ? "/assets/seat-unselected.png"
                        : "/assets/seat.png";

                // 处理座位点击事件
                const handleImageClick = () => {
                    if (isSold) return; // 已售座位不可点击

                    // 更新选中状态
                    setSelectedSeats((prevSelectedSeats) =>
                        prevSelectedSeats.includes(seatNumber)
                            ? prevSelectedSeats.filter((seatIdx) => seatIdx !== seatNumber)
                            : [...prevSelectedSeats, seatNumber]
                    );

                    // 更新传递给父组件的选中状态
                    setNewSelectSeat((prevSelectedSeats) =>
                        prevSelectedSeats.includes(seatNumber)
                            ? prevSelectedSeats.filter((seatIdx) => seatIdx !== seatNumber)
                            : [...prevSelectedSeats, seatNumber]
                    );
                };

                return (
                    <Image
                        key={seatIndex}
                        src={seatSrc}
                        width={30}
                        height={30}
                        preview={false}
                        style={{ margin: "2px" }}
                        onClick={handleImageClick}
                    />
                );
            })}
        </Space>
    ));

    return (
        <Col span={16}>
            <div style={{ textAlign: "center", marginBottom: 20, marginTop: 32 }}>
                <Space size={20}>
                    {seatTypes.map((seat, index) => (
                        <Typography.Text key={index}>
                            <span style={{ marginRight: 8 }}>
                                <Image src={seat.src} width={20} height={20} preview={false} />
                            </span>
                            {seat.label}
                        </Typography.Text>
                    ))}
                </Space>
            </div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
                <Image src="/assets/screen.png" height={100} preview={false} />
                <Typography.Text style={{ display: "block", marginTop: 8 }}>荧幕中央</Typography.Text>
            </div>
            <div style={{ textAlign: "center" }}>
                {seatRows.map((row, index) => (
                    <Fragment key={index}>
                        {row}
                        <Divider type="vertical" dashed style={{ borderColor: "#ccc", margin: "12px 0" }} />
                    </Fragment>
                ))}
            </div>
        </Col>
    );
};

export default SeatSelectionArea;