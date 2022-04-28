import "./CardTeam.css";

function CardTeam(props: any) {
    return (
        <div className="card-team">
            <div className="card-body-team">
                <img src={props.img} alt={props.alt} className="card-img-team" />
                <h2 className="card-title-team">{props.title}</h2>
            </div>
        </div>
    );
}

export default CardTeam;
