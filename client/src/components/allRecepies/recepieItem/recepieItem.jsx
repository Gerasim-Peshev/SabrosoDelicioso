/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function RecepieItem({
    title,
    imageUrl,
    category,
    prepTime,
    portion,
    ingredients,
    likes,
    preparation,
    _id
}){
    const[liked, setLiked] = useState(false);
    const[likee, setLikes] = useState(likes);

    
    

    return(
        <section>
                <img src={imageUrl} alt="" />
                <h2>{title}</h2>
                <div className="additionals">
                    <h5>Cooking time: {prepTime}m</h5>
                    <h5>Likes: {likee}</h5>
                    <button onClick={() => {
                      if(!liked){
                        setLiked(true);
                        setLikes(likee + 1);
                      }

                      if(liked){
                        setLiked(false);
                        setLikes(likee - 1);
                      }
                    }}>Like</button>
                    <Link to={`/recepie/${_id}`}>Details</Link>
                </div>
            </section>
    )
}