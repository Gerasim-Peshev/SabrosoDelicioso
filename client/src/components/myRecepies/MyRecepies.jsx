import { useContext, useEffect, useState } from "react";
import * as recepiesServices from "../../services/recepiesService";
import RecepieItem from "./recepieItem/recepieItem";
import AuthContext from "../../contexts/authContext";

export default function MyRecepies(){

    const {userId} = useContext(AuthContext);
    const [recepies, setRecepies] = useState([]);

    useEffect(() => {
        recepiesServices.getAllMyRecepies(userId)
                        .then(result => setRecepies(result));
    }, []);

    console.log(recepies);

    return (
        <main>
        <h1>My Recepies</h1>
        <div className="recepiesContainer">

            
            {/* <section>
                <img src="https://gotvach.bg/files/1200x800/originalnoshkembe3.webp" alt="" />
                <h2>Shkembe chorba</h2>
                <div className="additionals">
                    <h5>Cooking time: 60м</h5>
                    <h5>Likes: 1000000</h5>
                    <button>Like</button>
                </div>
            </section>
            <section>
                <img src="https://www.1001recepti.com/images/photos/recipes/size_4/ikonomichna-iahniia-ot-leshta-s-chesun-i-chubrica-1-[2935].jpg" alt="" />
                <h2>Leshta</h2>
                <div className="additionals">
                    <h5>Coocking time: 75м</h5>
                    <h5>Likes: 87</h5>
                    <button>Like</button>
                </div>
            </section>
            <section>
                <img src="https://www.1001recepti.com/images/photos/recipes/size_4/ikonomichna-iahniia-ot-leshta-s-chesun-i-chubrica-1-[2935].jpg" alt="" />
                <h2>Leshta</h2>
                <div className="additionals">
                    <h5>Coocking time: 75м</h5>
                    <h5>Likes: 87</h5>
                    <button>Like</button>
                </div>
            </section> */}

            {recepies.length > 0 ? 
                recepies.map(recepie => (
                        <RecepieItem key={recepie._id} {...recepie} />
                    ))
                :
                        <h3 className="no-articles">No articles yet</h3>
            }
        </div>
    </main>
    );
}