const FilterComponent = () => {
  return (
    <aside className="w-full sm:w-64 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Filtros</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Categoría</h3>
          <ul className="space-y-1">
            <li>
              <input type="checkbox" id="category1" />
              <label htmlFor="category1" className="ml-2">Juegos de mesa</label>
            </li>
            <li>
              <input type="checkbox" id="category2" />
              <label htmlFor="category2" className="ml-2">Puzzles</label>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Núm. jugadores</h3>
          <ul className="space-y-1">
            <li>
              <input type="checkbox" id="players1" />
              <label htmlFor="players1" className="ml-2">1</label>
            </li>
            <li>
              <input type="checkbox" id="players2" />
              <label htmlFor="players2" className="ml-2">2</label>
            </li>
            <li>
              <input type="checkbox" id="players3" />
              <label htmlFor="players3" className="ml-2">3+</label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};


export default FilterComponent;