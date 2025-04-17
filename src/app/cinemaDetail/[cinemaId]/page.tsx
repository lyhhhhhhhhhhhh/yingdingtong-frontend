"use server"

import CinemaDetailTopBar from "@/components/CinemaDetailTopBar";
import {getCinemaVoByIdUsingGet} from "@/api/cinemaController";
import SwiperTest from "../../../components/SwiperMovie";
import {listCinemaMovieVoByPageUsingPost} from "@/api/cinemaMovieController";

const CinemaDetail = async ({params}) => {

    const {cinemaId} = params;

    let cinema = null

    let allMovieVOList = []


    try {
        const res = await getCinemaVoByIdUsingGet({id: cinemaId})
        cinema = res.data
    } catch (e) {
        console.log(e)
    }

    try {
        const res = await listCinemaMovieVoByPageUsingPost({
            cinemaId: cinemaId,
            current: 1,
            pageSize: 10
        })
        // 获取所有记录的 movieVOList 数据
        // 抽取出所有 records 中的 movieVOList 列表，并将它们合并为一个数组
        allMovieVOList = res.data.records.flatMap(record => record.movieVOList);
    } catch (e) {
        console.log(e)
    }



    return (
        <>
            <CinemaDetailTopBar cinema={cinema}/>
            <SwiperTest cinemaId={cinemaId} MovieList={allMovieVOList} />
        </>
    )
}

export default CinemaDetail