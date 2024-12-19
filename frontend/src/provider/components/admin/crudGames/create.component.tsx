import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import React from "react";

interface IFormInputs {
    id: number;
    name: string;
    description: string;
    price: string;
    img: string;
    age: number;
    stock: number;
    brand: number;
    category: number;
    author: string;
    difficulty: string;
    launchDate: string;
    duration: number;
    minPlayers: number;
    maxPlayers: number;
}

interface ICreateUpdateProps {
    createGame: (data: IFormInputs) => void;
    operation: "create" | "update";
    updateData: IFormInputs | null;
    updateGame: (data: IFormInputs) => void;
    changeForm: (data: IFormInputs | null, operation: "create" | "update") => void;
}

const CreateUpdateGame = ({
    createGame,
    operation,
    updateData,
    updateGame,
    changeForm,
}: ICreateUpdateProps) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset,
    } = useForm<IFormInputs>({
        criteriaMode: "all",
    });

    React.useEffect(() => {
        if (operation === "update" && updateData) {
            reset({
                id: updateData.id,
                name: updateData.name,
                description: updateData.description,
                price: updateData.price,
                img: updateData.img,
                age: updateData.age,
                stock: updateData.stock,
                brand: updateData.brand.id ? updateData.brand.id : updateData.brand,
                category: updateData.category.id ? updateData.category.id : updateData.category,
                author: updateData.author,
                difficulty: updateData.difficulty,
                launchDate: updateData.launchDate,
                duration: updateData.duration,
                minPlayers: updateData.minPlayers,
                maxPlayers: updateData.maxPlayers,
            });
        }

        if (operation === "create") {
            reset();
        }
    }, [operation, updateData, reset]);

    const onSubmit = (data: IFormInputs) => {
        if (operation === "create") {
            createGame(data);
        } else if (operation === "update") {
            console.log(data);
            updateGame(data);
            changeForm(null, "create");
        }
    };

    return (
        <div className="m-4">
        <form onSubmit={handleSubmit(onSubmit)} className="text-base">
            <div className="mb-2">
                <label htmlFor="name" className="text-dark">
                    Name:
                    <input
                        id="name"
                        type="text"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("name", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="description" className="text-dark">
                    Description:
                    <textarea
                        id="description"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("description", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="description"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="price" className="text-dark">
                    Price:
                    <input
                        id="price"
                        type="text"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("price", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="price"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="img" className="text-dark">
                    Img:
                    <input
                        id="img"
                        type="text"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("img", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="img"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="age" className="text-dark">
                    Age:
                    <input
                        id="age"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("age", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="age"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="stock" className="text-dark">
                    Stock:
                    <input
                        id="stock"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("stock", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="stock"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="brand" className="text-dark">
                    Brand:
                    <input
                        id="brand"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("brand", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="brand"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="category" className="text-dark">
                    Category:
                    <input
                        id="category"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("category", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="category"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="author" className="text-dark">
                    Author:
                    <input
                        id="author"
                        type="text"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("author", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="author"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="difficulty" className="text-dark">
                    Difficulty:
                    <input
                        id="difficulty"
                        type="text"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("difficulty", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="difficulty"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="launchDate" className="text-dark">
                    Launch Date:
                    <input
                        id="launchDate"
                        type="text"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("launchDate", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="launchDate"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="duration" className="text-dark">
                    Duration:
                    <input
                        id="duration"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("duration", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="duration"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="minPlayers" className="text-dark">
                    Min Players:
                    <input
                        id="minPlayers"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("minPlayers", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="minPlayers"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            <div className="mb-2">
                <label htmlFor="maxPlayers" className="text-dark">
                    Max Players:
                    <input
                        id="maxPlayers"
                        type="number"
                        className="m-2 px-4 py-2 border border-gray-300 rounded"
                        {...register("maxPlayers", { required: "This input is required." })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="maxPlayers"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                      <p className="text-red-500" key={type}>
                                          {message}
                                      </p>
                                  ))
                                : null;
                        }}
                    />
                </label>
            </div>

            {operation === "create" ? (
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Create
                    </button>
                ) : (
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            className="bg-green-600 text-white px-4 py-2 rounded ml-3"
                            onClick={() => changeForm(null, "create")}
                        >
                            Back to create
                        </button>
                    </div>
                )}
        </form>
    </div>
);
};

export default CreateUpdateGame;