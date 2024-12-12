import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import React from "react";

interface IFormInputs {
    id: number;
    name: string;
    img: string;
    type: string;
}

interface ICreateUpdateProps {
    createCategory: (data: IFormInputs) => void;
    operation: "create" | "update";
    updateData: IFormInputs | null;
    updateCategory: (data: IFormInputs) => void;
    changeForm: (data: IFormInputs | null, operation: "create" | "update") => void;
}

const CreateUpdate = ({
    createCategory,
    operation,
    updateData,
    updateCategory,
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
                img: updateData.img,
                type: updateData.type,
            });
        }

        if (operation === "create") {
            console.log("Resetting form for create");
            reset();
        }
    }, [operation, updateData, reset]);

    const onSubmit = (data: IFormInputs) => {
        if (operation === "create") {
            console.log("Creating category...");
            createCategory(data);
        } else if (operation === "update") {
            console.log("Updating category...");
            updateCategory(data);
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
                            {...register("name", {
                                required: "This input is required.",
                            })}
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
                    <label htmlFor="img" className="text-dark">
                        Img:
                        <input
                            id="img"
                            type="text"
                            className="m-2 px-4 py-2 border border-gray-300 rounded"
                            {...register("img", {
                                required: "This input is required.",
                            })}
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
                    <label htmlFor="type" className="text-dark">
                        Category:
                        <select
                            id="category"
                            className="m-2 px-4 py-2 border border-gray-300 rounded"
                            {...register("type", {
                                required: "This field is required.",
                            })}
                        >
                            <option value="">Select a category</option>
                            <option value="GAME">GAME</option>
                            <option value="ACCESSORY">ACCESSORY</option>
                            <option value="PUZZLE">PUZZLE</option>
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="type"
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
