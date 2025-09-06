import { useState } from "react";
import Pill from "./Pill";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pool", "Luxury", "Pet Friendly"];

 const FilterSection = () => {
    const [activeFilter, setActiveFilter] = useState<string>("");

    return (
        <div className="flex gap-3 flex-wrap justify-center my-6">
            {filters.map((filter) => (
                <Pill
                    key={filter}
                    label={filter}
                    active={activeFilter === filter}
                    onClick={() => setActiveFilter(filter === activeFilter ? "" : filter)}
                />
            ))}
        </div>
    );
};

export default FilterSection