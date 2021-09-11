const { Router } = require('express');
const { createPost, getPosts, updatePost } = require('../controllers/posts.controllers');


const router = Router();

router.get('/posts', getPosts);

router.post('/post', createPost);
router.put('/post', updatePost);





module.exports = router;