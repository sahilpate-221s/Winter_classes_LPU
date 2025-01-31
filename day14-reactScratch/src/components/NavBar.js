import React, { useState } from "react";

const NavBar = ({onSearch}) =>{
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    return(
        <nav>
            <input
                type="text"
                placeholder="serach here"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

        </nav>
    );
};

export default NavBar;