"use client";

import {Breadcrumb, Button, Image} from "antd";
import Title from "antd/es/typography/Title";
import MovieIcon from "../../../public/icon/MovieIcon";
import Link from "next/link";

interface Props {
    movie: any;
}

const MovieDetailTopBar = ({movie}: Props) => {
    return (
        <>
            <div style={topBarStyle}>
                <div style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start"}}>
                    <Image src={movie?.moviePicture || ''} width={240} height={330} preview={false}/>
                    <div style={infoStyle}>
                        <Title level={3} style={titleStyle}>
                            {movie?.movieTitle || "电影标题"}
                        </Title>
                        <Title level={5} style={titleStyle}>
                            {`评分 ${movie?.movieRating || '暂无评分'}`}<br/>
                            {movie?.movieType || "类型未知"}<br/>
                            {`${movie?.movieRegion || '地区未知'} / ${movie?.movieDuration || '未知'}分钟`}<br/>
                            {movie?.createTime ? movie.createTime.substring(0, 10) : "上映日期未知"}<br/>
                        </Title>
                        <div style={{marginTop: "auto"}}>
                            <div style={buttonContainerStyle}>
                                <Button style={buttonStyle} icon={<MovieIcon type={"icon-aixin_shixin"}/>}>想看</Button>
                                <Button style={buttonStyle} icon={<MovieIcon type={"icon-shoucang"}/>}>评分</Button>
                            </div>
                            <Button type="primary" size="large" style={ticketButtonStyle}>
                                <Link href={"/cinema"}>
                                    立即购票
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Breadcrumb
                style={{marginBottom: 16, marginTop: 16}}
                items={[
                    {title: '首页', href: '/'},
                    {title: '电影', href: '/movies'},
                    {title: movie?.movieTitle || "电影标题"},
                ]}
            />
        </>
    );
};

const topBarStyle = {
    marginTop: 16,
    backgroundColor: "skyblue",
    height: 370,
    padding: 20,
    width: "100%",
};

const infoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: 330,
    marginLeft: 40
};

const titleStyle = {
    color: "white",
};

const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: 250,
};

const buttonStyle = {
    width: 120,
};

const ticketButtonStyle = {
    marginTop: 16,
    width: 250,
    backgroundColor: "red",
    color: "white",
};

export default MovieDetailTopBar;