import "./Team.css";
import CardTeam from "../Cards/CardTeam";
import renatoProfile from "../../vendor/img/renato-profile.jpg";
import viniciusProfile from "../../vendor/img/vini-profile.jpeg";

function Team() {
    return (
        <section id="team">
            <div className="team-content">
                <div className="team-cover">
                    <div className="divisor">
                        <h1 data-aos="fade">Team</h1>
                        <p data-aos="fade">The team is me and my mentor Renato.</p>
                    </div>
                    <div className="team-about">
                        <a href="https://github.com/RenatoFernandesTotti" target="_blank" rel="noreferrer" data-aos= "fade-right">
                            <CardTeam img={renatoProfile} title="Fullstack Developer Senior" alt="renato-profile"/>
                        </a>
                        <a href="https://github.com/Vinicius-AndradeM" target="_blank" rel="noreferrer" data-aos= "fade-left">
                            <CardTeam img={viniciusProfile} title="Fullstack Developer Intern" alt="vinicius-profile" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
