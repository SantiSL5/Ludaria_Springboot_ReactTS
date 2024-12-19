import { useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}

const LoginComponent = ({ login }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit = (data: IFormInputs) => {
    login(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6 border rounded-md shadow-md">
        <h2
          className="text-3xl font-bold text-center"
          style={{ color: "#FB5D1C" }}
        >
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Formato de correo no válido",
                },
              })}
              className={`mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 focus:ring focus:ring-opacity-50 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-[#FB5D1C]"
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
              className={`mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 focus:ring focus:ring-opacity-50 ${
                errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-[#FB5D1C]"
              }`}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-base text-white rounded-md"
            style={{
              backgroundColor: "#FB5D1C",
              borderColor: "#FFA07A",
              borderWidth: "1px",
            }}
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          ¿No tienes una cuenta?
          <a
            href="/register"
            className="font-medium ml-1"
            style={{ color: "#FB5D1C" }}
          >
             Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
