"use client"


import {Row, Steps} from "antd";
import {useEffect, useState} from "react";
import MovieInfoCard from "@/components/MovieInfoCard";
import SeatSelectionArea from "@/components/SeatSelectionArea";
import {useSearchParams} from "next/navigation";
import {getMovieVoByIdUsingGet} from "@/api/movieController";
import {getCinemamoviescheduleVoByIdUsingGet} from "@/api/cinemamoviescheduleController";
import {getCinemaVoByIdUsingGet} from "@/api/cinemaController";
import {LoadingOutlined} from "@ant-design/icons";
import MovieIcon from "../../../../public/icon/MovieIcon";

const TestSelectSeat = ({params}) => {
    const {movieSessionId} = params;

    const totalSeats = 72;
    const seatsPerRow = 12;

    const [newSelectSeat, setNewSelectSeat] = useState([]);

    const searchParams = useSearchParams();
    const movieId: any = searchParams.get('movieId');
    const cinemaId: any = searchParams.get('cinemaId');

    const [movieInfo, setMovieInfo] = useState({});
    const [cinemaInfo, setCinemaInfo] = useState({});
    const [movieTimes, setMovieTimes] = useState({});

    const getMovieInfo = async () => {
        try {
            const res = await getMovieVoByIdUsingGet({id: movieId});
            setMovieInfo(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getMovieSessionInfo = async () => {
        try {
            const res = await getCinemamoviescheduleVoByIdUsingGet({id: movieSessionId});
            setMovieTimes(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getCinemaInfo = async () => {
        try {
            const res = await getCinemaVoByIdUsingGet({id: cinemaId});
            setCinemaInfo(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getMovieInfo();
        getMovieSessionInfo();
        getCinemaInfo();
    }, [movieId, movieSessionId]);

    return (
        <>
            <div style={{marginBottom: 32, textAlign: "center", marginTop: 32, width: "80%", marginLeft: "10%"}}>

                <Steps
                    items={[
                        {
                            title: '选择影片场次',
                            status: 'finish',
                            icon: <MovieIcon type={"icon-xuanze"}/>,
                        },
                        {
                            title: '选择座位',
                            status: 'process',
                            icon: <LoadingOutlined/>,
                        },
                        {
                            title: 'Pay',
                            status: 'process',
                            icon: <MovieIcon type={"icon-weibiaoti1"}/>,
                        },
                        {
                            title: '待观影',
                            status: 'wait',
                            icon: <MovieIcon type={"icon-shouye"}/>,
                        },
                    ]}
                />

            </div>

            <div style={{minWidth: 1000, border: "1px solid", overflow: "hidden", marginBottom: 12}}>
                <Row gutter={24}>
                    <MovieInfoCard
                        newSelectSeat={newSelectSeat}
                        movieInfo={movieInfo}
                        movieTimesInfo={movieTimes}
                        cinemaInfo={cinemaInfo}
                        seatsPerRow={seatsPerRow} // 确保传递 seatsPerRow 参数
                    />
                    <SeatSelectionArea
                        movieTimesInfo={movieTimes}
                        totalSeats={totalSeats}
                        seatsPerRow={seatsPerRow}
                        newSelectSeat={newSelectSeat}
                        setNewSelectSeat={setNewSelectSeat}
                    />
                </Row>
            </div>

        </>
    );
};

export default TestSelectSeat;