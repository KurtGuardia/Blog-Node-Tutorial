const express = require('express');
const Blog = require('../models/blogs');
const blogController = require('../controllers/blogsController');

const router = express.Router();

router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/create', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;
