import { useState } from "react";

function SearchBar({ propertyData = [], setPropertyData, originalData }) {
    
        const [activeTab, setActiveTab] = useState("all");
         const [isOn, setIsOn] = useState(false);

        const handleAllLocations = function() {
    setPropertyData(originalData);
};

    const toggleSwitch = () => {
        setIsOn(!isOn);
        if (!isOn) {
            setPropertyData(originalData.filter(host => host.superhost));
        } else {
            setPropertyData(originalData);
        }
    }
    const toggleSelectedtype = (selectedType) => {
        let filteredData = originalData;

        if (selectedType === "1" || selectedType === "2") {
            filteredData = filteredData.filter(
                place => place.capacity && typeof place.capacity.bedroom !== "undefined" && place.capacity.bedroom === Number(selectedType)
            );
        }

        if (isOn) {
            filteredData = filteredData.filter(place => place.superhost);
        }

        setPropertyData(filteredData);
    };

    const [selectedType, setSelectedType] = useState("");

    const handleLocationClick = (location) => {
        setActiveTab(location);
        let filteredData = originalData.filter(place => place.location === location);

        if (selectedType === "1" || selectedType === "2") {
            filteredData = filteredData.filter(
                place => place.capacity && typeof place.capacity.bedroom !== "undefined" && place.capacity.bedroom === Number(selectedType)
            );
        }

        if (isOn) {
            filteredData = filteredData.filter(place => place.superhost);
        }

        setPropertyData(filteredData);
    };

    return (
        <div className="search-bar">
            <div className="buttons">
                <button onClick={() => {
                    setActiveTab("all");
                    handleAllLocations();
                }}>All Stays</button>
                {[...new Set(originalData.map(place => place.location))].map((location, idx) => (
                    <button
                        key={location}
                        onClick={() => handleLocationClick(location)}
                        className={activeTab === location ? "tab-button active" : "tab-button"}
                    >
                        {location}
                    </button>
                ))}
            </div>

            <div className="selectors">
                <label className="switch">
                    <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
                    <span className="slider"></span>
                </label>
                <span className="sup">Superhost</span>

                <select
                    className="dropdown"
                    value={selectedType}
                    onChange={(e) => {
                        const type = e.target.value;
                        setSelectedType(type);
                        toggleSelectedtype(type);
                    }}
                >
                    <option value="" disabled hidden>Select type</option>
                    <option value="1">One Bedroom</option>
                    <option value="2">Two Bedrooms</option>
                </select>
            </div>
        </div>
    );
}

export default SearchBar;
