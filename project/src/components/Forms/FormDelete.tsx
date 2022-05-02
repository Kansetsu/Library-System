import "./Form.css";
import { useForm } from "react-hook-form";
import api from "../../services/Api";

function FormDelete() {
    const { handleSubmit, register } = useForm();
    function FormData(data: any) {
        api.delete("http://localhost:8080/library/delete", {
            ...data,
        }).catch((err: any) => {
            alert("Invalid data! \n" + err);
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
