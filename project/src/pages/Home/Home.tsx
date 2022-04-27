import "./Home.css";
import { TypedText } from "../../components/Typed/Typed";
import Team from "../../components/Team/Team";
import Support from "../../components/Support/Support";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";

export function Home() {
    return (
        <section id="hero">
            <div className="home introduction">
                <div className="home cover">
                    <div className="typed">
                        <TypedText />
                    </div>
                </div>
            </div>
            <Team />
            <Support />
            <BackToTop />
            <Footer />
        </section>
    );
}
