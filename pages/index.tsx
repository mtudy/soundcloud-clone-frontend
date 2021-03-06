import { useState } from 'react';
import Head from 'next/head';
import { useMutation, useQuery } from '@apollo/client';
import { Button } from 'antd';
import styles from '../styles/Home.module.css';
import CREATE_MUSIC from '../graphql/createMusicMutation.graphql';
import MUSIC_QUERY from '../graphql/musicQuery.graphql';

export default function Home(): JSX.Element {
  const [id, setId] = useState();

  const [createMusic] = useMutation(CREATE_MUSIC);
  const { data } = useQuery(MUSIC_QUERY, {
    variables: {
      id,
    },
  });
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await createMusic({ variables: { title: '김정명 바보' } });
    setId(result.data.createMusic.id);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {data ? data.music.title : 'Empty'}
          <br />
          <small>
            {data ? data.music.id : ''}
          </small>
        </h1>

        <form onSubmit={onSubmit}>
          <Button type="primary">Run</Button>
        </form>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
