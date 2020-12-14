import React from "react";
import styles from '../styles/components/Content.module.scss';


export default function Content(props: { children: Object }) {
    return (
        <div className={styles.wrapper}>
            <main>{props.children}</main>

            <aside>some side text</aside>
        </div>
    );
}
