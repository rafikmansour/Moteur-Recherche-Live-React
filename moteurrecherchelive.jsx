import React, { useState } from "react";

const SearchEngine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Simulons une liste de données pour la recherche que j'ai trouvé sur le web
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pear",
  ];

  // Fonction pour mettre à jour les résultats de recherche en fonction du terme de recherche
  const handleSearch = (searchTerm) => {
    const results = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  // Gérer le changement de la valeur de recherche
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <h2>Moteur de recherche en temps réel</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Rechercher..."
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchEngine;
