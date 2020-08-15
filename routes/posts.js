const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// 読み込み
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.json({ message:err });
    }
});

// 書き込み
router.post('/', async (req,res) => {
    const post = new Post({
        name: req.body.name,
        comment: req.body.comment
    });

    try{
        const savedPost = await post.save();
        res.json(savePost);
    } catch(err) {
        res.json({ message:err });
    }
});

// 削除
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({ message:err });
    }
});

// 更新
router.patch('/:postId', async (req,res) => {
    try{
        const updatePost = await Post.updateOne(
            { _id: req.params.postId},
            { $set: {name: req.body.name } }
        );
        res.json(post);
    } catch(err) {
        res.json({ message:err });
    }
});


module.exports = router;