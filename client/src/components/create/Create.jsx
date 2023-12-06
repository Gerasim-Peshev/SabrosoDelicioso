import * as recepiesServices from "../../services/recepiesService";
import { useNavigate } from 'react-router-dom';

export default function Create(){

    const navigate = useNavigate();

    const createRecepieHandler = async (e) => {
        e.preventDefault();

        const recepieData = Object.fromEntries(new FormData(e.currentTarget));

        const data = {
            title: recepieData.title,
            imageUrl: recepieData.imageUrl,
            category: recepieData.category,
            prepTime: recepieData.prepTime,
            portion: recepieData.portion,
            ingredients: recepieData.ingredients.split(', ' || ',' || ' '),
            preparation: recepieData.preparation,
            likes: recepieData.likes
        }
        try{
            await recepiesServices.recepieCreate(data);

            navigate('/');
        } catch (err){
            console.log(err);
        }

    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createRecepieHandler}>
                <div className="container">
                    <h1>Create Recepie</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter recepie title"/>

                    <label htmlFor="image">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" placeholder="Upload a photo"/>

                    <label htmlFor="category">Type:</label>
                    <input type="text" name="category" id="category" placeholder="Easy, Normal or Hard"/>

                    <label htmlFor="prepTime">Preparation time in minutes:</label>
                    <input type="number" name="prepTime" id="prepTime" placeholder="0" />

                    <label htmlFor="portion">Portions:</label>
                    <input type="number" name="portion" id="portion" placeholder="0" />

                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea name="ingredients" id="ingredients" cols="30" rows="10"></textarea>

                    <label htmlFor="preparation">Preparation:</label>
                    <textarea name="preparation" id="preparation" cols="30" rows="10"></textarea>

                    <input className="toHide" name="likes" id="likes" defaultValue={0} />

                    <input className="btn submit" type="submit" value="Create recepie" />
                </div>
            </form>
        </section>
    );
}