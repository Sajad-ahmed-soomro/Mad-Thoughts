import { Post, User } from './model.js';
import { connectToDB } from './utils.js';

export const getPosts = async () => {
    try {
        await connectToDB();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error('Failed to fetch posts:', error.message);
        throw new Error("failed to fetch posts");
    }
};

export const getPost = async ({ slug }) => {
    try {
        await connectToDB();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        console.error('Failed to fetch post:', error.message);
        throw new Error("failed to fetch post");
    }
};

export const getUser = async (id) => {

    try {
        await connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error('User not found:', error.message);
        throw new Error("User not found");
    }
};


export const getUsers = async () => {

    try {
        await connectToDB();
        const users = await User.find();
        return users;
    } catch (error) {
        console.error('Users not found:', error.message);
        throw new Error("Users not found");
    }
};

