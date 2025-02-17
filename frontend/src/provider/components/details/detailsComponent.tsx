import Rating from "@mui/material/Rating";
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InfoIcon from '@mui/icons-material/Info';


interface DetailsProps {
  product: any;
  onLike: (product: number) => void;
  onNewComment: (data: any) => void;
  onDeleteComment: (id: number) => void;
}


const DetailsComponent : React.FC<DetailsProps> = ({ product, onLike, onNewComment, onDeleteComment })=> {
    const {user, isAdmin} = useUsers();
    const [comment, setComment] = useState("");
    const [rate, setRate]= useState(0);
    const maxLength = 280;

    const handleInputChange = (e:any) => {
        setComment(e.target.value);
    };

    const like = (product : number) => {
        onLike(product);
    }

    const deleteComment = () => {
        onDeleteComment(product.comment.id);
    }

    const handleComment = () => {
        if (rate<=0) {
            toast.info("Añade una valoración");
        }
        if (comment != "" && rate > 0) {
            console.log("Comentario enviado:", comment, rate);
            onNewComment({"content": comment, "product": product.id, "rate": rate});
            setComment("");
            setRate(0);
        }
    };

    useEffect(() => {
    
    }, [user, isAdmin]);
    

    return (
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img
                    src={`/assets/products/${product.img}`}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div className="md:w-1/2 md:pl-6">
                <h2 className="text-5xl font-bold">{product.name}</h2>
                <Rating className="mt-5" value={product.rating} precision={0.1} size="large" readOnly/>
                <p className="text-xl font-semibold mt-4">{product.price} €</p>
                <div className="flex items-center mt-3">
                        <p className="text-lg text-black mr-1">{product.likes || 0} </p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                like(product.id);
                            }}
                            className="flex items-center text-red-500"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path
                                    fillRule="evenodd"
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    clipRule="evenodd"
                                    className={product.liked ? "fill-red-600 stroke-red-600" : "fill-none stroke-black"}
                                />
                            </svg>
                        </button>
                </div>
                <div>
                    <span className="text-lg">{product.numComments}</span> <ChatBubbleOutlineIcon />
                </div>
                <h2 className="text-2xl mt-4 font-bold">Descripción</h2>
                <p className="text-lg mt-2">{product.description}</p>
                <h2 className="text-2xl mt-4 font-bold">Especificaciones</h2>
                <p className="text-lg mt-2">Categoría: <span className="font-bold">{product.category.name}</span></p>
                <p className="text-lg mt-2">Edad: <span className="font-bold">+{product.age}</span></p>

                {product.type == "GAME" ? <p className="text-lg mt-2">Autor/es: <span className="font-bold">{product.author}</span></p> : <></>}
                {product.type == "GAME" ? <p className="text-lg mt-2">Dificultad: <span className="font-bold">{product.difficulty}</span></p> : <></>}
                {product.type == "GAME" ? <p className="text-lg mt-2">Duración: <span className="font-bold">{product.duration}</span></p> : <></>}
                {product.type == "GAME" ? <p className="text-lg mt-2">Jugadores: <span className="font-bold">{product.minPlayers}-{product.maxPlayers}</span></p> : <></>}
                {product.type == "GAME" ? <p className="text-lg mt-2">Fecha de publicación: <span className="font-bold">{product.launchDate}</span></p> : <></>}

                {product.type == "PUZZLE" ? <p className="text-lg mt-2">Autor/es: <span className="font-bold">{product.author}</span></p> : <></>}
                {product.type == "PUZZLE" ? <p className="text-lg mt-2">Número de piezas: <span className="font-bold">{product.numPieces}</span></p> : <></>}
                {product.type == "PUZZLE" ? <p className="text-lg mt-2">Dificultad: <span className="font-bold">{product.difficulty}</span></p> : <></>}

                {product.type == "ACCESSORY" && product.game != null ? <p className="text-lg mt-2">Expansión de: <span className="font-bold">{product.game.name}</span></p> : <></>}
            </div>
        </div>
        
        <div className="mt-6">
            {user ? (
                product.comment ? (
                    <div>
                        <h2 className="text-2xl font-bold">Tu comentario</h2>
                        <div className="bg-gray-100 p-4 rounded-lg mt-4 relative">
                            <div className="absolute top-2 right-2">
                                <IconButton color="error" aria-label="delete" onClick={deleteComment}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <div className="mt-2">
                                <Rating defaultValue={product.comment.rate} readOnly />
                            </div>
                            <p className="text-lg ml-1">{product.comment.content}</p>
                            <p className="text-md ml-1 mt-3">{dayjs(product.comment.createdAt).format("DD/MM/YYYY HH:mm")}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold">Deja tu comentario</h2>
                        <div className="mt-6">
                            <label htmlFor="rate" className="block text-lg font-semibold mb-2">
                                Valoración
                            </label>
                            <Rating
                                value={rate}
                                onChange={(event, newValue: any) => {
                                    setRate(newValue);
                                }}
                            />
                            <label htmlFor="content" className="block text-lg font-semibold mb-2">
                                Comentario
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                rows={3}
                                maxLength={maxLength}
                                value={comment}
                                onChange={handleInputChange}
                                className="w-full border rounded-lg p-2"
                                placeholder="Escribe tu comentario aquí..."
                            ></textarea>
                            <p className="text-right text-sm text-gray-500">
                                {comment.length}/{maxLength}
                            </p>
                            <button
                                onClick={handleComment}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
                            >
                                Enviar comentario
                            </button>
                        </div>
                    </div>
                )
            ) : (
                <p className="text-red-600 mt-4 flex items-center"><InfoIcon />Debes loguearte para poder valorar los productos.</p>
            )}
        </div>

      </div>
    );
};

export default DetailsComponent;