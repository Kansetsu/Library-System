import "./Form.css";
import { useForm } from "react-hook-form";
import api from "../../services/Api";
// import { useState } from "react";

function FormDelete() {
    // const [book, setBook] = useState();
    const { handleSubmit, register } = useForm();
    function FormData(data: any) {
        api.delete("http://localhost:8080/library/delete", {
            ...data,
        })
            // .then((response: any) => setBook(response.data))
            .catch((err: any) => {
                console.log("Erro: " + err);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(FormData)} id="form" className="form">
                <h1>Delete</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Name:{" "}
                    </label>
                    <input id="name" type="text" className="form-input" placeholder="Enter book's name" {...register("name")} />
                </div>

                <button id="form-input-btn" className="form-input-btn" type="submit">
                    Delete
                </button>
            </form>
        </div>
    );
}

export default FormDelete;
