import "./Card.css";

function Card(props: any) {
    function like() {
        return alert("Like 😁");
    }
    function deslike() {
        return alert("Deslike 😥");
    }
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.img} alt="book" className="card-img" />
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
            </div>
            <div className="opinion-btn">
                <button onClick={like} className="card-btn-like">
                    Like 👍
                </button>
                <button onClick={deslike} className="card-btn-deslike">
                    Deslike 👎
                </button>
            </div>
        </div>
    );
}

export default Card;
