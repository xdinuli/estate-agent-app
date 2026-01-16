import Select from "react-select";
import DatePicker from "react-datepicker";
import { Range, getTrackBackground } from "react-range"; // 1. Import this helper
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm({ filters, setFilters }) {
    // Options
    const typeOptions = [
        { value: "Any", label: "Any Type" },
        { value: "House", label: "House" },
        { value: "Apartment", label: "Apartment" },
        { value: "Flat", label: "Flat" },
        { value: "Villa", label: "Villa" },
    ];

    const bedroomOptions = [
        { value: "Any", label: "Any Bedrooms" },
        { value: 1, label: "1+" },
        { value: 2, label: "2+" },
        { value: 3, label: "3+" },
        { value: 4, label: "4+" },
        { value: 5, label: "5+" },
    ];

    const locationOptions = [
        { value: "Any", label: "Any Location" },
        { value: "Colombo", label: "Colombo" },
        { value: "Kandy", label: "Kandy" },
        { value: "Galle", label: "Galle" },
        { value: "Nuwara Eliya", label: "Nuwara Eliya" },
        { value: "Negombo", label: "Negombo" },
    ];

    // Range Constants
    const MIN_PRICE = 200000;
    const MAX_PRICE = 1000000;

    return (
    <div className="search-form">
        
        {/* Location */}
        <div className="form-group">
            <label>Location</label>
            <Select
                options={locationOptions}
                defaultValue={locationOptions[0]}
                onChange={(opt) => setFilters({ ...filters, location: opt.value })}
                placeholder="Select Location"
            />
        </div>

        {/* Property Type */}
        <div className="form-group">
            <label>Property Type</label>
            <Select
                options={typeOptions}
                defaultValue={typeOptions[0]}
                onChange={(opt) => setFilters({ ...filters, type: opt.value })}
            />
        </div>

        {/* Bedrooms */}
        <div className="form-group">
            <label>Min Bedrooms</label>
            <Select
                options={bedroomOptions}
                defaultValue={bedroomOptions[0]}
                onChange={(opt) => setFilters({ ...filters, bedrooms: opt.value })}
            />
        </div>

        {/* Date Picker */}
        <div className="form-group">
            <label>Date Added After</label>
            <DatePicker
                selected={filters.date}
                onChange={(date) => setFilters({ ...filters, date })}
                dateFormat="yyyy-MM-dd"
                isClearable={true}
                placeholderText="Select date"
                wrapperClassName="date-picker-wrapper"
            />
        </div>

        {/* Price Range */}
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Price Range (Rs)</label>
            <div style={{ padding: '10px 10px 0 10px' }}>
                <Range
                    step={10000}
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    values={filters.price}
                    onChange={(values) => setFilters({ ...filters, price: values })}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className="range-track"
                            style={{
                                ...props.style,
                                background: getTrackBackground({
                                    values: filters.price,
                                    colors: ["#e2e8f0", "#2563eb", "#e2e8f0"], 
                                    min: MIN_PRICE,
                                    max: MAX_PRICE,
                                }),
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div {...props} className="range-thumb" />
                    )}
                />
            </div>
            
            <div className="range-values">
                Rs {filters.price[0].toLocaleString()} – Rs {filters.price[1].toLocaleString()}
            </div>
        </div>
    </div>
    );
}