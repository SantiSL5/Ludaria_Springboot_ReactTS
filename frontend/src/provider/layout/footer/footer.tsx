import { Button, Checkbox } from "flowbite-react";

function Footer() {
  return (
    <>
      <div className="bg-gray-100 pt-5 pb-8 flex justify-center items-center border-b border-gray-400">
        <div className="w-2/5">
          <span className="text-3xl font-bold">Recibe las últimas novedades y ofertas:</span>
          <div className="mt-5">
            <div className="flex">
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email*" required />
              <Button color="blue" className="ml-5 w-46">Suscribirse</Button>
            </div> 
          </div>
          <div className="flex items-center mt-3">
            <Checkbox className="border border-black"></Checkbox>
            <span className="ml-2">Acepto la <a href="#" className="text-blue-600">Política de Privacidad y el Aviso legal</a></span>
          </div>
        </div>
      </div>
      <footer className="bg-white text-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 justify-items-center">

            <div>
              <h3 className="font-semibold text-lg">Acerca de Ludaria</h3>
              <ul className="space-y-2 mt-4">
                <li>Quiénes somos</li>
                <li>Las fichas</li>
                <li>Gastos de envío</li>
                <li>Devoluciones</li>
                <li>Preguntas Frecuentes</li>
                <li>Pago a plazos</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Nuestras Tiendas</h3>
              <ul className="space-y-2 mt-4">
                <li>Barcelona</li>
                <li>Lugo</li>
                <li>Madrid</li>
                <li>Sevilla</li>
                <li>Valencia</li>
                <li>Valladolid</li>
                <li>Zaragoza</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Descubre</h3>
              <ul className="space-y-2 mt-4">
                <li>Juegos más vendidos</li>
                <li>Outlet: juegos de mesa</li>
                <li>Nuevos juegos de mesa</li>
                <li>Mejores juegos de mesa</li>
                <li>Tarjeta Regalo</li>
                <li>Concurso de Juegos</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Juegos más buscados</h3>
              <ul className="space-y-2 mt-4">
                <li>Juegos de mesa familiares</li>
                <li>Juegos de mesa para 2</li>
                <li>Juegos de mesa infantiles</li>
                <li>Juegos de rol</li>
                <li>Juegos de cartas</li>
                <li>Próximos lanzamientos</li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto pt-4 px-4 border-solid border-t-2 border-gray-700 justify-items-center">

            <div className="grid grid-cols-3 justify-items-center place-items-center">
              <a style={{ cursor: 'pointer'}} className="text-gray-500 hover:text-gray-700">Condiciones generales</a>
              <a style={{ cursor: 'pointer'}} className="text-gray-500 hover:text-gray-700">Política de Privacidad y Aviso Legal</a>
              <a style={{ cursor: 'pointer'}} className="text-gray-500 hover:text-gray-700">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;