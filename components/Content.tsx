import React from 'react';
import styles from '../styles/components/Content.module.scss';

export default function Content(props: any): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.wrapper}>
      <main>{children}</main>

      <aside>some side text</aside>
    </div>
  );
}
