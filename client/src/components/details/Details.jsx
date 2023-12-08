import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import * as recepieService from '../../services/recepiesService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";

export default function Details(){

    const navigate = useNavigate();
    const { username, userId } = useContext(AuthContext);
    const [recepie, setRecepie] = useState({});
    const [comments, setComments] = useState([]);
    const {recepieId} = useParams();

    useEffect(() => {
        recepieService.getOne(recepieId)
                        .then(setRecepie);

        commentService.getCommentsFor(recepieId)
                        .then(setComments);
    }, [recepieId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formD = new FormData(e.currentTarget);

        console.log(formD);

        if(!username){
            return;
        }

        const newComment = await commentService.create(recepieId, formD.get('comment'));

        console.log(newComment);

        setComments(state => [...state, {...newComment, username: {username}}]);
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${recepie.title}`);

        if (hasConfirmed) {
            await recepieService.removeRecepie(recepieId);

            navigate('/');
        }
    }

    return (
        <div className="container">
            <div className="mainInfo">
                <h1>{recepie.title}</h1>
                <img src={recepie.imageUrl} alt="" />
                <div className="info">
                    <h3>Type: {recepie.category}</h3>
                    <h3>Preparation time: {recepie.prepTime}m</h3>
                    <h3>Portions: {recepie.portion}</h3>
                </div>
            </div>
            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {recepie.ingredients?.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="preparation">
                <h2>Preparation</h2>
                <p>
                    {recepie.preparation}
                </p>
            </div>

            {userId === recepie._ownerId 
                ? (
                    <div className="buttons">
                        <Link to={`/recepie/${recepie._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )
                :
                (<></>)
            }

            <div className="comments">
                <label>Comments:</label>
                {comments.length > 0 
                    ?
                    (
                        <ul>
                            {comments.map(({_id, text, owner}) => 
                                <li key={_id}><p>{owner || username} : {text}</p></li>)}
                        </ul>
                    )
                    :
                    (
                        <p className="noComment">No comments</p>
                    )
                }

            </div>

            <article className="createComment">
                        <label>Add comment:</label>
                        <form className="form" onSubmit={addCommentHandler}>
                            <textarea name="comment" placeholder="Comment here"></textarea>
                            <input className="btn submit" type="submit" value="Add Comment"/>
                        </form>
            </article>
        </div>
    );
}