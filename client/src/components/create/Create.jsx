export default function Create(){
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Recepie</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter recepie title"/>

                    <label htmlFor="image">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" placeholder="Upload a photo"/>

                    <label htmlFor="category">Type:</label>
                    <select className="customSelect" name="category" id="category" value={"Easy"}>
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                    </select>

                    <label htmlFor="prepTime">Preparation time in minutes:</label>
                    <input type="number" name="prepTime" id="prepTime" placeholder="0" />

                    <label htmlFor="portion">Portions:</label>
                    <input type="number" name="portion" id="portion" />

                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea name="ingredients" id="ingredients" cols="30" rows="10"></textarea>

                    <label htmlFor="preparation">Preparation:</label>
                    <textarea name="preparation" id="preparation" cols="30" rows="10"></textarea>

                    <input className="btn submit" type="submit" value="Create recepie" />
                </div>
            </form>
        </section>
    );
}