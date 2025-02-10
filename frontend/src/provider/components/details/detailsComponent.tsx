interface DetailsProps {
  product: any;
  onLike: (product: number) => void;
}


const DetailsComponent : React.FC<DetailsProps> = ({ product, onLike })=> {
    console.log(product)

    const like = (product : number) => {
        onLike(product);
    }

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
                <h2 className="text-4xl font-bold">{product.name}</h2>
                <p className="text-lg font-semibold mt-4">{product.price} €</p>
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
            </div>
        </div>
      </div>
    );
};

export default DetailsComponent;