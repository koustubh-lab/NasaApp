import Main from "./components/Main.jsx";
import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

export default function App() {
    const [barVisible, setBarVisible] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        async function fetchData() {
            const API_KEY = import.meta.env.VITE_NASA_API_KEY;
            let url =
                "https://api.nasa.gov/planetary/apod" + `?api_key=${API_KEY}`;
            try {
                fetch(url)
                    .then((result) => {
                        return result.json()
                    })
                    .then((receivedData) => {
                        console.log("Data\n", receivedData);
                        setData(receivedData);
                    })
                    .catch((error) => console.log(`Error: ${error}`));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    window.onkeydown = (e) => {
        console.log(`Button: ${e.key}`);
        if (e.key == '') {
            setBarVisible(true)
        }
    }

    return (
        <div className="App">
            {data ? (
                <Main />
            ) : (
                <div className="loading-state">
                    <i className="fa-solid fa-gear"></i>
                </div>
            )}
            {data && (
                <SideBar
                    barVisible={barVisible}
                    setBarVisible={setBarVisible}
                    data={data}
                />
            )}
            {data && <Footer setBarVisible={setBarVisible} data={data} />}
        </div>
    );
}
