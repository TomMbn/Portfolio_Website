import "./home.css";
import Social from "./Social";
import Data from "./Data";

const Home = () => {
    return(
        <section className="home section" id="home">
            <div className="homeContainer container grid">
                <div className="homeContent grid">
                    <Social />

                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;