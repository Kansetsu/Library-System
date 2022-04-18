import "../style/Home.css";
import { TypedText } from "../components/Typed";
import Team from "../components/Team";
import Support from "../components/Support";
import BackToTop from "../components/BackToTop";

export function Home() {
    return (
        <section id="hero">
            <div className="home introduction">
                <div className="typed">
                    <TypedText></TypedText>
                </div>
            </div>
            <Team></Team>
            <Support></Support>
            <BackToTop></BackToTop>
        </section>
    );
}
