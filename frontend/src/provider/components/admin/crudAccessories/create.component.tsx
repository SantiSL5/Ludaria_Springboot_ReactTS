import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
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
    gameId: number;
}

interface ICreateUpdateProps {
    createAccessory: (data: IFormInputs) => void;
    operation: "create" | "update";
    updateData: IFormInputs | null;
    updateAccessory: (data: IFormInputs) => void;
    changeForm: (data: IFormInputs | null, operation: "create" | "update") => void;
}

const CreateUpdate = ({
    createAccessory,
    operation,
    updateData,
    updateAccessory,
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
                gameId: updateData.game.id ? updateData.game.id : updateData.game,
            });
        }

        if (operation === "create") {
            reset();
        }
    }, [operation, updateData, reset]);

    const onSubmit = (data: IFormInputs) => {
        if (operation === "create") {
            createAccessory(data);
            window.location.reload();
        } else if (operation === "update") {
            updateAccessory(data);
            changeForm(null, "create");
            window.location.reload();
        }
    };

    return (
        <div className="m-4">
            <form onSubmit={handleSubmit(onSubmit)} className="text-base">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center place-items-center">
                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
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

                    <div className="mb-2 w-full">
                        <label htmlFor="gameId" className="text-dark">
                            Game ID:
                            <input
                                id="gameId"
                                type="number"
                                className="m-2 px-4 py-2 border border-gray-300 rounded"
                                {...register("gameId", { required: "This input is required." })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="gameId"
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
                            onClick={() => {
                                changeForm(null, "create");
                            }}
                        >
                            Back to create
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreateUpdate;