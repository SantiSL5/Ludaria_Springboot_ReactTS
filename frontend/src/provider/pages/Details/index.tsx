import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import DetailsComponent from "../../components/details/detailsComponent";
import Spinner from "../../components/spinner/spinner.component";
import { useLikes } from "../../hooks/useLike";

const DetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { product, getProduct} = useProducts();
    const { setLike } = useLikes();
    
    if (!product) getProduct(id);

    const handleLike = async (product: number) => {
      try {
          await setLike(product);
          getProduct(id);
      } catch (e){
          console.log(e);
      }
    };


    return (
      <>
          {product ? (<DetailsComponent product={product} onLike={handleLike} />) : <Spinner />}
      </>
    );
  };
  
  export default DetailsPage;