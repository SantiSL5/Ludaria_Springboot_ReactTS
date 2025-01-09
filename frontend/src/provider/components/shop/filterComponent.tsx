import React, { useState } from 'react';

interface FilterComponentProps {
    categories: string[];
    brands: string[];
    onFiltersChange: (filters: {
        type: string | null;
        category: string | null;
        brand: string | null;
        minPrice: number | null;
        maxPrice: number | null;
    }) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ categories, brands, onFiltersChange }) => {
    const [filters, setFilters] = useState({
        type: null,
        category: null,
        brand: null,
        minPrice: null,
        maxPrice: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;

      setFilters(prevFilters => {
          const newFilters = { ...prevFilters };

          if (type === 'number') {
              newFilters[name] = value ? parseInt(value, 10) : null;
          } else {
              newFilters[name] = value || null;
          }

          onFiltersChange(newFilters);

          return newFilters;
      });
    };

    const handleResetFilters = () => {
        const resetFilters = {
            type: null,
            category: null,
            brand: null,
            minPrice: null,
            maxPrice: null,
            minPlayers: null,
            maxPlayers: null,
        };
        setFilters(resetFilters);
        onFiltersChange(resetFilters);
    };


    return (
        <aside className="w-full sm:w-64 p-4 rounded-lg bg-gray-100">
            <h2 className="text-lg font-bold mb-4">Filtros</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">Tipo de producto</h3>
                    <select
                        name="type"
                        value={filters.type || ''}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="">Selecciona un tipo</option>
                        <option value="GAME">Juegos de mesa</option>
                        <option value="ACCESSORY">Accesorios</option>
                        <option value="PUZZLE">Puzzles</option>
                    </select>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Categoría</h3>
                    <select
                        name="category"
                        value={filters.category || ''}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-white"
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Marca</h3>
                    <select 
                        name="brand"
                        value={filters.brand || ''}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-white"
                    >
                        <option value="">Selecciona una marca</option>
                        {brands.map((bran) => (
                            <option key={bran.id} value={bran.id}>{bran.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Rango de precio</h3>
                    <div className="flex gap-4">
                        <input
                            name="minPrice"
                            type="number" 
                            value={filters.minPrice || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md bg-white"
                        />
                        <input
                            name="maxPrice"
                            type="number" 
                            value={filters.maxPrice || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md bg-white"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button 
                        onClick={handleResetFilters} 
                        className="w-full bg-gray-500 text-white p-2 rounded-md mt-4"
                    >
                        Borrar filtros
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default FilterComponent;
