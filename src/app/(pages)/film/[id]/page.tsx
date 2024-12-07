import Link from 'next/link';
import styles from './film.module.css';

interface Film {
  episode_id: number;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export const revalidate = 60;

export default async function Film({ params }: { params: { id: string } }) {
  const response = await fetch(`https://swapi.dev/api/films/${params.id}`);

  if (!response.ok) {
    throw new Error(`Error loading film...`);
  }

  const film: Film = await response.json();

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{film.title}</h1>
        <p className={styles.text}><strong>Description:</strong> {film.opening_crawl}</p>
        <p className={styles.text}><strong>Director:</strong> {film.director}</p>
        <p className={styles.text}><strong>Producer:</strong> {film.producer}</p>
        <p className={styles.text}><strong>Release Date:</strong> {film.release_date}</p>
        <Link href="/" className={styles.link}>Home</Link>
      </div>
    </main>
  );
}