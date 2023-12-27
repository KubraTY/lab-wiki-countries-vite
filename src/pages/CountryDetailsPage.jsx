import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
        console.log(response.data); // Log the data to understand its structure

        setCountry(response.data);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [countryId]); // The effect runs whenever countryId changes

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>

      <h2>Borders:</h2>
      <ul>
        {country.borders.length === 0 ? (
          <p>No borders</p>
        ) : (
          country.borders.map((border) => (
            <li key={border}>
              <Link to={`/${border}`}>{border}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};


export default CountryDetails;
