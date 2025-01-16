import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import DetailsComponent from "../../components/details/detailsComponent";
import Spinner from "../../components/spinner/spinner.component";

const DetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { product, getProduct} = useProducts();
    
    if (!product) getProduct(id);
  
    return (
      <>
          {product ? (<DetailsComponent product={product} />) : <Spinner />}
      </>
    );
  };
  
  export default DetailsPage;