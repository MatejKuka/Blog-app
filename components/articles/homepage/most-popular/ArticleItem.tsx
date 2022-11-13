import React from 'react';
import styles from "../../../../styles/MPopularArticleItem.module.css";
import Image from "next/image";
import Link from "next/link";

const API_URL = "http://localhost:1337";

export function LargeArticleItem({slug, category, title, imageURL}) {
    return (
        <Link href={`articles/${slug}`}>
            <div className={styles.largecontainer}>
                <div className={styles.largeimagecontainer}>
                    <Image
                        fill
                        alt={"Image"}
                        src={`${API_URL}${imageURL}`}
                        className={styles.large_image}
                    />
                </div>
                <h3>{category}</h3>
                <h1>{title}</h1>
            </div>
        </Link>
    );
}

export function SmallArticleItem({slug, category, title, imageURL}) {
    return (
        <Link href={`articles/${slug}`}>
            <div className={styles.smallcontainer}>
                <div className={styles.smallimagecontainer}>
                    <Image alt={"Image"}
                           src={`${API_URL}${imageURL}`}
                           fill
                           className={styles.small_image}
                    />
                </div>
                <h3>{category}</h3>
                <h1>{title}</h1>
            </div>
        </Link>
    );
}

