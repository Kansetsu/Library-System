import img from "../../vendor/img/card-book.png";
import Card from "../../components/Cards/Card";
import "./Categories.css";
import api from "../../services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categories() {
    const [books, setBooks] = useState([]);
    const [paginate, setPaginate] = useState(1);
    const { category } = useParams();


    function changePage() {
        return setPaginate(paginate + 1);
    }
    console.log(paginate);
    
    useEffect(() => {
        if (category === "All") {
            api.get(`http://localhost:8080/library/paginate?page=${paginate}&books=12`)
                .then(({ data }) => {
                    setBooks(data);
                })
                .catch((err: any) => {
                    alert("Something wrong! \n" + err);
                });
        } else {
            api.get(`http://localhost:8080/library/category/${category}?page=${paginate}&books=12`)
                .then(({ data }) => {
                    setBooks(data);
                })
                .catch((err: any) => {
                    alert("Something wrong! \n" + err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);
    return (
        <>
            <section id="categories">
                <div>
                    <h1 className="category-title">{category} Books</h1>
                </div>

                <div className="wrapper">
                    {books?.map((book: any) => {
                        return (
                            <Card
                                key={book._id}
                                img={img}
                                name={book.name}
                                publishingCompany={book.publishingCompany}
                                price={book.price}
                                description={book.description}
                                category={book.category}
                                publicationDate={book.publicationDate}
                                language={book.language}
                                pages={book.pages}
                            />
                        );
                    })}
                </div>
                <div className="paginate">
                    <button className="paginate-btn" onClick={changePage}>
                        1
                    </button>
                    <button className="paginate-btn">2</button>
                    <button className="paginate-btn">3</button>
                    <button className="paginate-btn">4</button>
                </div>
            </section>
        </>
    );
}

export default Categories;
