import ListComponent from '../../components/shop/listComponent'
import FilterComponent from '../../components/shop/filterComponent';
import { useProducts } from '../../hooks/useProducts';
import Spinner from '../../components/spinner/spinner.component';

const ShopPage = () => {
    const { products, getAllProducts } = useProducts();

    if (!products) getAllProducts();

    return (
        <div className="container mx-auto p-4">
  
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-64 bg-gray-100 p-4 rounded-lg">
            <FilterComponent />
          </aside>
  
          <div className="flex-1">
            {products ? (<ListComponent items={products} />) : <Spinner />}
          </div>
        </div>
      </div>
    );
};

export default ShopPage;