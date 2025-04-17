"use server"

import {QRCode} from "antd";

const MovieTicketQRCode = async ({params}) => {
    const {MovieTicketId} = params;

    // 目标页面 URL，只传递订单 ID
    const targetPageUrl = `/ticketDetails/${MovieTicketId}`;

    return (
        <div style={{textAlign: "center", marginTop: 16}}>
            <h2>取票二维码</h2>
            <QRCode
                style={{margin: "auto", marginTop: 16}}
                value={targetPageUrl} // 仅传递目标页面 URL 和订单 ID
                size={256} // 二维码大小
                level="H" // 容错级别
                includeMargin={true} // 是否包含白边
            />
        </div>
    );
};

export default MovieTicketQRCode;