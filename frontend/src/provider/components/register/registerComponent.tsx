import { useForm } from "react-hook-form";

interface IFormInputs {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}

const RegisterComponent = ({ registerH }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit = (data: IFormInputs) => {
    registerH(data);
  };

  return (
    <div className="flex justify-center items-center my-20 bg-white">
      <div className="w-full max-w-md p-8 space-y-6 border rounded-md shadow-md">
        <h2
          className="text-3xl font-bold text-center"
          style={{ color: "#FB5D1C" }}
        >
          Registrarse
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
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "El nombre de usuario es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre de usuario debe tener al menos 3 caracteres",
                },
              })}
              className={`mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 focus:ring focus:ring-opacity-50 ${
                errors.username ? "border-red-500 focus:ring-red-500" : "focus:ring-[#FB5D1C]"
              }`}
            />
            {errors.username && (
              <span className="text-sm text-red-500">{errors.username.message}</span>
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
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/,
                  message:
                    "Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial",
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
          <div>
            <label
              htmlFor="repeatPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Repetir Contraseña
            </label>
            <input
              type="password"
              id="repeatPassword"
              {...register("repeatPassword", {
                required: "Por favor, repite la contraseña",
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Las contraseñas no coinciden";
                },
              })}
              className={`mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 focus:ring focus:ring-opacity-50 ${
                errors.repeatPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-[#FB5D1C]"
              }`}
            />
            {errors.repeatPassword && (
              <span className="text-sm text-red-500">
                {errors.repeatPassword.message}
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
            Registrarse
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          ¿Ya tienes una cuenta?
          <a
            href="/login"
            className="font-medium ml-1"
            style={{ color: "#FB5D1C" }}
          >
            Inicia Sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
