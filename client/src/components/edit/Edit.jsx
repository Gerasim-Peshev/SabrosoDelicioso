import { useNavigate, useParams } from "react-router-dom";

import * as recepieService from '../../services/recepiesService';
import { useEffect, useState } from "react";

export default function Edit() {

    const navigate = useNavigate();
    const { recepieId } = useParams();
    const [recepie, setRecepie] = useState({
        title: '',
        imageUrl: '',
        category: '',
        prepTime: '',
        portion: '',
        ingredients: '',
        preparation: ''
    });

    useEffect(() => {
        recepieService.getOne(recepieId)
                        .then(setRecepie);
    }, [recepieId]);

    const editRecepieSubmitHandler = async (e) => {
        e.preventDefault();

        const recepieData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(recepieData.ingredients);

        const data = {
            title: recepieData.title,
            imageUrl: recepieData.imageUrl,
            category: recepieData.category,
            prepTime: recepieData.prepTime,
            portion: recepieData.portion,
            ingredients: recepieData.ingredients.toLowerCase().split(/[, |w | , ]+/),
            preparation: recepieData.preparation,
        };

        console.log(data.ingredients);

        try {
            await recepieService.recepieEdit(recepieId, data);

            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setRecepie(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    console.log(recepie);

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editRecepieSubmitHandler}>
                <div className="container">
                    <h1>Edit Recepie</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={recepie.title} onChange={onChange} placeholder="Enter recepie title"/>

                    <label htmlFor="image">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={recepie.imageUrl} onChange={onChange} placeholder="Upload a photo"/>

                    <label htmlFor="category">Type:</label>
                    <input type="text" name="category" id="category" value={recepie.category} onChange={onChange} placeholder="Easy, Normal or Hard"/>

                    <label htmlFor="prepTime">Preparation time in minutes:</label>
                    <input type="number" name="prepTime" id="prepTime" value={recepie.prepTime} onChange={onChange} placeholder="0" />

                    <label htmlFor="portion">Portions:</label>
                    <input type="number" name="portion" id="portion" value={recepie.portion} onChange={onChange} placeholder="0" />

                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea name="ingredients" id="ingredients" value={recepie.ingredients} onChange={onChange} cols="30" rows="10"></textarea>

                    <label htmlFor="preparation">Preparation:</label>
                    <textarea name="preparation" id="preparation" value={recepie.preparation} onChange={onChange} cols="30" rows="10"></textarea>

                    <input className="btn submit" type="submit" value="Edit recepie" />
                </div>
            </form>
        </section>
    );
}