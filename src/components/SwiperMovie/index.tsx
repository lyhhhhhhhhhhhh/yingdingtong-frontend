"use client"

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Button, Divider, Space, Table, TableProps, Tabs, TabsProps} from "antd";
import { Image } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CinemaDetailContent.module.css";
import { listCinemamoviescheduleVoByPageUsingPost } from "@/api/cinemamoviescheduleController";
import Title from "antd/es/typography/Title";
import dayjs from "dayjs";

interface Props {
    cinemaId: number;
    MovieList: any[];
}

const getColumns = (cinemaId: number): TableProps<any>['columns'] => [
    {
        title: '场次时间',
        dataIndex: 'showTime',
        key: 'showTime',
        width: 120,
        align: 'center',
        render: (text) => {
            const date = new Date(text);
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return (
                <div style={{ textAlign: 'center' }}>
                    {`${hours}:${minutes}`}
                </div>
            );
        },
    },
    {
        title: '语言',
        dataIndex: 'movieLanguage',
        key: 'movieLanguage',
        width: 80,
        align: 'center'
    },
    {
        title: '放映厅',
        dataIndex: 'cinemaHallName',
        key: 'cinemaHallName',
        width: 100,
        align: 'center'
    },
    {
        title: '价格',
        key: 'moviePrice',
        dataIndex: 'moviePrice',
        width: 80,
        align: 'center',
        render: (price) => `¥${price}`,
    },
    {
        title: '选座购票',
        key: 'selectSeat',
        width: 150,
        align: 'center',
        render: (_, record) => (
            <Space size="middle">
                <Button
                    type="primary"
                    shape="round"
                    style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50", color: "#fff" }}
                >
                    <Link href={`/SelectSeat/${record.id}?movieId=${record.movieId}&cinemaId=${cinemaId}`}>
                        选座购票
                    </Link>
                </Button>
            </Space>
        ),
    },
];


const items: TabsProps['items'] = [
    {
        key: `${dayjs().format("YYYY-MM-DD")}`,
        label: `今天:${dayjs().format("YYYY-MM-DD")}`,
    },
    {
        key: `${dayjs().add(1,'day').format("YYYY-MM-DD")}`,
        label: `明天${dayjs().add(1, 'day').format('YYYY-MM-DD')}`,
    },
    {
        key: `${dayjs().add(2,'day').format("YYYY-MM-DD")}`,
        label: `后天${dayjs().add(2, 'day').format('YYYY-MM-DD')}`,
    },
];

const CinemaDetailContent = ({ cinemaId, initialMovieId, MovieList }: Props) => {
    const [activeIndex, setActiveIndex] = useState(2); // 初始选中第三张
    const [selectedMovieId, setSelectedMovieId] = useState(initialMovieId);
    const [movieSchedule, setMovieSchedule] = useState([]);
    const [selectData, setSelectData] = useState(dayjs().format("YYYY-MM-DD"));
    const loadData = async (movieId) => {
        try {
            const res = await listCinemamoviescheduleVoByPageUsingPost({
                cinemaId: cinemaId,
                current: 1,
                movieId: movieId,
                pageSize: 10,
                showTime: selectData
            });
            setMovieSchedule(res.data.records);
            console.log("加载成功", res.data.records);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        loadData(selectedMovieId);
    }, [selectedMovieId,selectData]);

    const dataChange = (key: string) => {
        setSelectData(key);
    };

    return (
        <>
            {/* Swiper 电影滑动选择器 */}
            <Swiper
                style={{ height: 350 }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                initialSlide={2}
                centeredSlides={true}
                loop={true}
                onSlideChange={(swiper) => {
                    const currentIndex = swiper.realIndex;
                    setActiveIndex(currentIndex);
                    const movieId = MovieList[currentIndex].id; // 获取当前电影的 id
                    setSelectedMovieId(movieId); // 更新选中的 movieId
                }}
            >
                {MovieList.map((item, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{
                                transition: "transform 0.3s ease",
                                transform: activeIndex === index ? "scale(1.4)" : "scale(1)",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                preview={false}
                                src={item.moviePicture}
                                height={250}
                                width={180}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Space>
                <Title level={5} style={{marginRight:16,marginTop:32}}>观影时间:</Title>
                <Tabs defaultActiveKey="1" items={items} onChange={dataChange} />
            </Space>

            {/* 分割线 */}
            <Divider />

            {/* 场次表格 */}
            <div className={styles.tableContainer}>
                <Table
                    columns={getColumns(cinemaId)}
                    dataSource={movieSchedule}
                    size="small"
                    bordered
                    pagination={false}
                    rowKey="id"
                />
            </div>
        </>
    );
};

export default CinemaDetailContent;