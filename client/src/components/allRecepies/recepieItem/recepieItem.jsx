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
    return(
        <section>
                <img src={imageUrl} alt="" />
                <h2>{title}</h2>
                <div className="additionals">
                    <h5>Cooking time: {prepTime}m</h5>
                    <h5>Likes: {likes}</h5>
                    <button>Like</button>
                </div>
            </section>
    )
}