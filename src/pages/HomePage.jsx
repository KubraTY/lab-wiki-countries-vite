import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries, setCountires] = useState([]);

    const fetchCountries = async () => {
        try {
            const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
            console.log(response.data)
            setCountires(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCountries()
    }, [])
    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {countries.map((country) => (
                    <li key={country._id} style={{display:"flex", justifyContent:"center", paddingBottom:20}}>           <Link to={`/${country.alpha3Code}`}  style={{display:"flex", alignItems:"center" , textAlign:"left", width:300}}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`Flag of ${country.name.common}`} /> 
                        <p style={{paddingInline:10}}>{country.name.common}</p>
                    </Link> </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
