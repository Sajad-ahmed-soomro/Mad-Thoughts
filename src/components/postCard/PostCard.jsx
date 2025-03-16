import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && (
                    <div className={styles.imgContainer}>
                        <Image src={post.img} alt="Post image" fill className={styles.img} />
                    </div>
                )}
                <span className={styles.date}>02.08.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link href={`/blog/${post.slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
