import dayjs from "dayjs";
import Rating from "@mui/material/Rating";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useUsers } from "../../hooks/useUsers";
import { useEffect, useState } from "react";

interface CommentsListProps {
    comments: any;
    onDeleteComment: (id: number) => void;
}

const commentsListComponent : React.FC<CommentsListProps> = ({ comments, onDeleteComment })=> {
    const {user, isAdmin} = useUsers();
    const deleteComment = (id:number) => {
        onDeleteComment(id);
    }

    useEffect(() => {

    }, [comments, user, isAdmin]);

    return (
        <div className="container mx-auto p-6 pt-0 w-full border">
            <div className="flex flex-col md:flex-row w-full">
                <div className="mt-6 w-full">
                    <h2 className="text-2xl font-bold mt-3">Opiniones de los usuarios</h2>
                    {comments.length === 0 ? (
                        <p className="text-gray-500 mt-4">Todavia no hay comentarios</p>
                    ) : (
                        comments.map((comment: any, index: any) => (
                            <div key={index} className="border-b pb-8 mt-3 border-gray-400 py-4 relative">
                                {(isAdmin || (user && comment.user.id === user.data.id)) && (
                                    <div className="absolute top-2 right-2">
                                    <IconButton 
                                        color="error" 
                                        aria-label="delete"
                                        onClick={() => {
                                        deleteComment(comment.id);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    </div>
                                )}
                                <div className="mt-2">
                                    <Rating defaultValue={comment.rate} readOnly/>
                                </div>
                                <p className="text-md ml-1 mb-3">{comment.content}</p>
                                <p className="text-sm ml-1 mt-3">{dayjs(comment.createdAt).format("DD/MM/YYYY HH:mm")}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default commentsListComponent;