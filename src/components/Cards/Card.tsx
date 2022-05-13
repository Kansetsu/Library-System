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
                <h2 className="card-title">{props.name}</h2>
                <p className="card-description">Publishing Company: {props.publishingCompany}</p>
                <p className="card-description">Price: R$ {props.price}</p>
                <p className="card-description">Description: {props.description}</p>
                <p className="card-description">Category: {props.category}</p>
                <p className="card-description">Publication Date: {props.publicationDate.replaceAll('-', '/')}</p>
                <p className="card-description">Language: {props.language}</p>
                <p className="card-description">Pages: {props.pages}</p>
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
