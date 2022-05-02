import "./Form.css";
import { useForm } from "react-hook-form";
import api from "../../services/Api";

function FormRegister() {
    const { handleSubmit, register } = useForm();
    function FormData(data: any) {
        if (data) {
            api.put(`http://localhost:8080/library/update/${data.name}`, {
                ...data,
            }).catch((err: any) => {
                alert("Invalid data! \n" + err);
            });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(FormData)} id="form" className="form">
                <h1>Update</h1>

                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input id="name" type="text" className="form-input" placeholder="Enter book's name" {...register("name")} />
                </div>
                <div className="form-inputs">
                    <label htmlFor="authorID" className="form-label">
                        Author:
                    </label>
                    <input id="authorID" type="text" className="form-input" placeholder="Enter author's ID " {...register("authorID")} />
                </div>

                <div className="form-inputs">
                    <label htmlFor="publishing-company" className="form-label">
                        Publishing Company:
                    </label>
                    <input
                        id="publishing-company"
                        type="text"
                        className="form-input"
                        placeholder="Enter publishing company's name"
                        {...register("publishingCompany")}
                    />
                </div>

                <div className="form-inputs">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <input id="price " type="number" className="form-input" placeholder="Enter the prince" step="0.010" {...register("price")} />
                </div>

                <div className="form-inputs">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <input id="description" type="text" className="form-input" placeholder="Enter description" {...register("description")} />
                </div>

                <div className="form-inputs">
                    <label htmlFor="category" className="form-label">
                        Category:
                    </label>
                    <input id="category" type="text" className="form-input" placeholder="Enter category" {...register("category")} />
                </div>

                <div className="form-inputs">
                    <label htmlFor="publication-date" className="form-label">
                        Publication Date:
                    </label>
                    <input
                        id="publication-date"
                        type="date"
                        className="form-input"
                        placeholder="Enter publication date"
                        {...register("publicationDate")}
                    />
                </div>

                <div className="form-inputs">
                    <label htmlFor="language" className="form-label">
                        Language:
                    </label>
                    <input id="language" type="text" className="form-input" placeholder="Enter language" {...register("language")} />
                </div>

                <div className="form-inputs">
                    <label htmlFor="pages" className="form-label">
                        Pages:
                    </label>
                    <input id="pages" type="number" className="form-input" placeholder="Enter pages" {...register("pages")} />
                </div>

                <button id="form-input-btn" className="form-input-btn" type="submit">
                    Update
                </button>
            </form>
        </div>
    );
}

export default FormRegister;
