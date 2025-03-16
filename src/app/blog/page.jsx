import React from 'react';
import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

const BlogPage = async () => {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
