import "./home.css";
import Social from "./Social";
import Data from "./Data";

const Home = ({ lang }) => {
    return(
        <section className="home section" id="home">
            <div className="homeContainer container grid">
                <div className="homeContent grid">
                    <Social />
                    <Data lang={lang} />
                </div>
            </div>
        </section>
    )
}

export default Home;