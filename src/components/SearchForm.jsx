import Select from "react-select";
import DatePicker from "react-datepicker";
import { Range } from "react-range";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm({ filters, setFilters }) {
    const typeOptions = [
        { value: "Any", label: "Any" },
        { value: "House", label: "House" },
        { value: "Apartment", label: "Apartment" },
        { value: "Flat", label: "Flat" },
        { value: "Villa", label: "Villa" },
    ];

    const bedroomOptions = [
        { value: "Any", label: "Any" },
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

return (
    <div className="search-form">
        <h2>Search Properties</h2>

        <div className="form-group">
            <label>Property Type</label>
            <Select
                options={typeOptions}
                defaultValue={typeOptions[0]}
                onChange={(opt) => setFilters({ ...filters, type: opt.value })}
            />
        </div>

        <div className="form-group">
            <label>Price Range (£)</label>
            <Range
                step={10000}
                min={200000}
                max={1000000}
                values={filters.price}
                onChange={(values) => setFilters({ ...filters, price: values })}
                renderTrack={({ props, children }) => (
                    <div {...props} className="range-track">{children}</div>
                )}
                renderThumb={({ props }) => (
                    <div {...props} className="range-thumb" />
                )}
            />
            <div className="range-values">
                £{filters.price[0].toLocaleString()} – £{filters.price[1].toLocaleString()}
            </div>
        </div>

        <div className="form-group">
            <label>Bedrooms</label>
            <Select
                options={bedroomOptions}
                defaultValue={bedroomOptions[0]}
                onChange={(opt) => setFilters({ ...filters, bedrooms: opt.value })}
            />
        </div>

        <div className="form-group">
            <label>Date Added</label>
            <DatePicker
                selected={filters.date}
                onChange={(date) => setFilters({ ...filters, date })}
                dateFormat="yyyy-MM-dd"
                isClearable={true}
                placeholderText="Select a date"
                className="date-input"
            />
        </div>
    </div>
    );
}
