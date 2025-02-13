import consume from '../router/consumer'
import { queryConsumer, likeQueries, jwtQueries, commentQueries } from "../../core/queries";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

export function useComments() {
    const [comments, setComments]: any = useState(undefined);
    const [pages, setPages]: any = useState(undefined);

    const createComment = async (data: any) => {
        try {
            await consume(queryConsumer.apiComment, commentQueries.createComment, data);
            toast.success("Comentario creado")
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const getComments = ((limit: number, offset: number, product: number) => {
        consume(queryConsumer.apiComment, commentQueries.getAllComments, { limit, offset, product}).then((res: any) => {
            setComments(res.data.comments);
            setPages(res.data.pages);
        }).catch((e: any) => {
            console.error(e);
        });
    });

    const deleteComment = async (comment: number) => {
        try {
            await consume(queryConsumer.apiComment, commentQueries.deleteComment, comment);
            toast.success("Comentario eliminado")
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return { createComment, getComments, deleteComment, comments, pages};

}