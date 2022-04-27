import "./Card.css";

function Card(props: any) {
    function log() {
        return alert("olá");
    }
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.img} alt="book" className="card-img" />
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
            </div>
            <button onClick={log} className="card-btn">
                See book
            </button>
        </div>
    );
}

export default Card;
