import "../styles/Landing.css";
import girl from "../assets/girl.png";
import boy from "../assets/boy.png";

const Landing = () => {
    return (
        <div className="page">
            <nav className="nav">
                <div className="logo">
                    <label></label>
                    Messenger
                </div>

                <div className="menu">
                    <a href="/">Features</a>
                    <a href="/">Privacy</a>
                    <a href="/">Help Center</a>
                </div>

                <button className="download">Download</button>
            </nav>

            <section className="home">
                <div className="text">
                    <h1>
                        Stay Connected with <label>Messenger</label>
                    </h1>

                    <p>
                        Secure messaging built for everyday conversations. Fast, simple,
                        and always available.
                    </p>

                    <button>Start Chatting</button>
                </div>

                <div className="preview">
                    <div className="person left">
                        <img src={girl} alt="girl" />
                        <div className="msg one">Still online?</div>
                        <div className="msg two">Yes, I'm here</div>
                    </div>

                    <div className="person right">
                        <img src={boy} alt="boy" />
                        <div className="msg three">Call me later</div>
                        <div className="msg four">Sure 👍</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;