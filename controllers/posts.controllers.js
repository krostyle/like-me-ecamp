//TRUCAZO
const { response, request } = require('express')
const db = require('../db/config')


//HTTP METHODS
const getPosts = async(req = request, res = response) => {
    try {
        const text = 'SELECT * FROM posts';
        // const values = [];
        const objQuery = {
            name: 'get-posts',
            text,
            // values,
            // rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        res.json(rows)
    } catch (error) {
        console.log(error);
        return error;
    }

}

const createPost = async(req = request, res = response) => {
    try {
        const { usuario, URL, descripcion, } = req.body;
        const likes = 0;
        const text = 'INSERT INTO posts(usuario, url,descripcion,likes) VALUES($1, $2, $3, $4) RETURNING *';
        const values = [usuario, URL, descripcion, likes];
        const objQuery = {
            name: 'create-post',
            text,
            values,
            rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        res.json(rows[0])
    } catch (error) {
        console.log(error);
        return error;
    }
}

const updatePost = async(req = request, res = response) => {
    try {
        const { id } = req.query;
        const like = 1;
        const text = 'UPDATE posts SET likes=likes+$1 WHERE id = $2 RETURNING *';
        const values = [like, id];
        const objQuery = {
            name: 'update-post',
            text,
            values,
            rowMode: 'array'
        };
        const { rows } = await db.query(objQuery);
        res.json(rows[0])
    } catch (error) {
        console.log(error);
        return error;
    }
}




module.exports = {
    getPosts,
    createPost,
    updatePost
}