import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as recepieService from '../../services/recepiesService';

export default function Details(){

    const [recepie, setRecepie] = useState({});
    const {recepieId} = useParams();

    useEffect(() => {
        recepieService.getOne(recepieId)
                        .then(setRecepie);
    }, [recepieId]);

    return (
        <div className="container">
            <div className="mainInfo">
                <h1>{recepie.title}</h1>
                <img src={recepie.imageUrl} alt="" />
                <div className="info">
                    <h3>Type: {recepie.category}</h3>
                    <h3>Preparation time: {recepie.prepTime}м</h3>
                    <h3>Portions: {recepie.portion}</h3>
                </div>
            </div>
            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {recepie.ingredients.split(", ").map(ingredient => (
                        <li>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="preparation">
                <h2>Preparation</h2>
                <p>
                    {recepie.preparation}
                </p>
            </div>
        </div>
    );
}