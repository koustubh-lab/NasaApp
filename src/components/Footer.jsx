import "./Footer.css"

export default function Footer({ setBarVisible, data }) {
    return (
        <div className="Footer">
            <section>
                <p>Nasa Project</p>
                <h1>{data?.title}</h1>
            </section>
            <i className="fa-solid fa-info" onClick={() => {
                setBarVisible(true)
            }}></i>
        </div>
    )
}
