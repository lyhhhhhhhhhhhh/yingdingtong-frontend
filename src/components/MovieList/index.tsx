"use client"

import React from 'react';
import {List, Space} from 'antd';
import Title from "antd/es/typography/Title";

interface Props {
    movieList: []
}

const MovieList = (props: Props) => {

    const {movieList} = props;



    return (
        <List
            style={{width: "100%"}}
            itemLayout="horizontal"
            dataSource={movieList.slice(0, 5)}
            size={"small"}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        title={
                            <Space  align="center">
                                <Title level={5} style={{
                                    marginRight: 8, color: index < 3 ? 'red' : 'inherit'
                                }}>{index + 1}<a href={`/movie/${item.id}`}> {item.movieTitle}</a></Title>
                            </Space>
                        }
                    />
                </List.Item>
            )}
        />
    );


}

export default MovieList