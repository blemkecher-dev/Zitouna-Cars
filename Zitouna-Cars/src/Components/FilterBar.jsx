function FilterBar({ brands = [], brand, setBrand, fuel, setFuel, maxPrice, setMaxPrice }) {
  return (
    <div className="filter-bar">
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="All">All brands</option>
        {brands.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>

      <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
        <option value="All">All fuels</option>
        <option value="Diesel">Diesel</option>
        <option value="Petrol">Petrol</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Electric">Electric</option>
      </select>

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;