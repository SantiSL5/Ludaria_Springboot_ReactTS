const DetailsComponent = (product:any) => {
  console.log(product.product)
    return (
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img
                    src={`/assets/products/${product.product.img}`}
                    alt={product.product.name}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div className="md:w-1/2 md:pl-6">
                <h2 className="text-4xl font-bold">{product.product.name}</h2>
                <p className="text-lg font-semibold mt-4">{product.product.price} €</p>
                <h2 className="text-2xl mt-4 font-bold">Descripción</h2>
                <p className="text-lg mt-2">{product.product.description}</p>
                <h2 className="text-2xl mt-4 font-bold">Especificaciones</h2>
                <p className="text-lg mt-2">Categoría: <span className="font-bold">{product.product.category.name}</span></p>
                <p className="text-lg mt-2">Edad: <span className="font-bold">+{product.product.age}</span></p>

                {product.product.type == "GAME" ? <p className="text-lg mt-2">Autor/es: <span className="font-bold">{product.product.author}</span></p> : <></>}
                {product.product.type == "GAME" ? <p className="text-lg mt-2">Dificultad: <span className="font-bold">{product.product.difficulty}</span></p> : <></>}
                {product.product.type == "GAME" ? <p className="text-lg mt-2">Duración: <span className="font-bold">{product.product.duration}</span></p> : <></>}
                {product.product.type == "GAME" ? <p className="text-lg mt-2">Jugadores: <span className="font-bold">{product.product.minPlayers}-{product.product.maxPlayers}</span></p> : <></>}
                {product.product.type == "GAME" ? <p className="text-lg mt-2">Fecha de publicación: <span className="font-bold">{product.product.launchDate}</span></p> : <></>}

                {product.product.type == "PUZZLE" ? <p className="text-lg mt-2">Autor/es: <span className="font-bold">{product.product.author}</span></p> : <></>}
                {product.product.type == "PUZZLE" ? <p className="text-lg mt-2">Número de piezas: <span className="font-bold">{product.product.numPieces}</span></p> : <></>}
                {product.product.type == "PUZZLE" ? <p className="text-lg mt-2">Dificultad: <span className="font-bold">{product.product.difficulty}</span></p> : <></>}

                {product.product.type == "ACCESSORY" && product.product.game != null ? <p className="text-lg mt-2">Expansión de: <span className="font-bold">{product.product.game.name}</span></p> : <></>}
            </div>
        </div>
      </div>
    );
};

export default DetailsComponent;