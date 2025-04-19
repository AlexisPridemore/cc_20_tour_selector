const DestinationSelector = ({ destinations, selected, onChange }) => {
    return (
      <div className="mb-6 text-center">
        <label htmlFor="destination" className="mr-2 font-medium">Choose a destination:</label>
        <select
          id="destination"
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="border p-2 rounded"
        >
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DestinationSelector;