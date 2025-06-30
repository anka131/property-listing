import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";


function AppLayout() {
    const [propertyData, setPropertyData] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        const fetchPropertyData = async () => {
            try{
                const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json");
                if(!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                setPropertyData(data);
                setOriginalData(data);
                console.log(data);  
            }catch{
                console.log("Error fetching coffee");
            }
        };
        fetchPropertyData();
    }, []);

    return (
        <div className="main">
            <div className="banner">
                <h1>Peace, nature, dream</h1>
                <h4>Find and book a great experience</h4>
            </div>
            <SearchBar propertyData={propertyData} setPropertyData={setPropertyData} originalData={originalData} />
            <div className='container'>
            <h2>Over 200 stays</h2>
            <CardComponent propertyData={propertyData}  />
            </div>          
           
        </div>

    )
}

export default AppLayout
