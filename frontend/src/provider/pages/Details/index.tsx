import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import DetailsComponent from "../../components/details/detailsComponent";
import Spinner from "../../components/spinner/spinner.component";
import { useLikes } from "../../hooks/useLike";
import { useComments } from "../../hooks/useComments";
import { useEffect, useState } from "react";
import PaginationComponent from "../../components/generic/paginationComponent";
import CommentsListComponent from "../../components/details/commentsListComponent";

const DetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { product, getProduct} = useProducts();
    const { setLike } = useLikes();

    const { createComment, getComments, deleteComment, comments, pages } = useComments();
    const [currentPage, setCurrentPage] = useState(1);
    
    if (!product) getProduct(id);

    useEffect(() => {
        if (product) getComments(4,currentPage-1, product.id);
    }, [currentPage, product]);

    const handleLike = async (product: number) => {
      try {
          await setLike(product);
          getProduct(id);
      } catch (e){
          console.log(e);
      }
    };

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const handleNewComment = async (data :any) => {
      try {
        await createComment(data);
        getProduct(id)
        setCurrentPage(1)
      } catch (e){
          console.log(e);
      }
    };

    const handleDeleteComment = async (comment:number) => {
      try {
        await deleteComment(comment);
        getProduct(id)
        setCurrentPage(1)
      } catch (e){
          console.log(e);
      }
    };


    return (
      <div className="mb-4">
          {product ? (<DetailsComponent product={product} onLike={handleLike} onNewComment={handleNewComment} onDeleteComment={handleDeleteComment} />) : <Spinner />}
          {comments ? (<CommentsListComponent comments={comments} onDeleteComment={handleDeleteComment}/>) : <Spinner />}
          {comments ? (<PaginationComponent currentPage={currentPage} totalPages={pages} onPageChange={handlePageChange} />) : <Spinner />}
      </div>
    );
  };
  
  export default DetailsPage;