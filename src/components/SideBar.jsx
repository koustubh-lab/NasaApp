import { useEffect, useState } from "react";
import "./SideBar.css";

export default function SideBar({ barVisible, setBarVisible, data }) {
    const [barWidth, setBarWidth] = useState(`100%`);
    const [overlayVisible, setOverlay] = useState(false)

    useEffect(() => {
        if (barVisible) {
            setBarWidth("0%");
            setOverlay(true)
        } else {
            setBarWidth("100%");
            setOverlay(false)
        }
    }, [barVisible]);

    return (
        <>
            <div
                className="SideBar"
                style={{ transform: `translateX(${barWidth})` }}
            >
                <h1 className="article-title">{data.title}</h1>
                <p className="article-date">Date: <span>{data.date}</span></p>
                <p className="description">{data.explanation}</p>
                <i
                    className="fa-solid fa-circle-arrow-left"
                    onClick={() => {
                        setBarVisible(false);
                    }}
                ></i>
            </div>
            {overlayVisible && <div className="bgOverlay" onClick={() => { setBarVisible(false), setOverlay(false) }}></div>}

        </>
    );
}
