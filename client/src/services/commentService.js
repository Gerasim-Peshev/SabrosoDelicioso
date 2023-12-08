import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (recepieId, text) => {
    const newComment = await request.post(baseUrl, {
        recepieId,
        text
    });

    return newComment;
}

export const getCommentsFor = async (recepieId) => {

    const query = new URLSearchParams({
        where: `recepieId="${recepieId}"`,
        load: `owner=_ownerId:users`
    });

    const comments = await request.get(`${baseUrl}?${query}`);

    comments.map(comment => comment.owner = comment.owner.username);

    console.log(comments);
    return comments;
}