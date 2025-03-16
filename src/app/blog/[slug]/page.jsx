import React,{Suspense} from 'react';
import styles from './SinglePostPage.module.css';
import Image from 'next/image';
import { getPost } from '@/lib/data';
import PostUser from '@/components/postUser/postUser'

export const generateMetadata = async({ params }) =>{
  const { slug } =params;
  const post =getPost(slug);
  return{
    title:post.title,
    description:post.desc
  }

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // Ensure getPost is awaited and receives the correct slug parameter
  const post = await getPost({ slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          
          {post && <Suspense fallback={<div>Loading...</div>

          }>
            <PostUser userId={post.userId}></PostUser>
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailvale}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
