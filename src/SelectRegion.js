import React from 'react';

const RegionData = ["Asia", "Europe", "Africa", "Americas", "Oceania", "Polar"]

const SelectRegion = ({selectValue, setSelectValue}) => {
    

    return (
        <div>
            <select value={selectValue} onChange={event => setSelectValue(event.target.value)}>
                <option value="">Select a Region</option>
                {RegionData.map((region, index) => (

                    <option value={region} key={index}>{region}</option>
                ))}
                
            </select>
        </div>
    )
}

export default SelectRegion;
