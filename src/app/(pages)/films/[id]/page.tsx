import styles from './film.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

interface Film {
  episode_id: number;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const film = await getFilmData(id);
  return {
    title: film.title
  };
}

async function getFilmData(id: string): Promise<Film> {
  const response = await fetch(`https://swapi.info/api/films/${id}`, {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    throw new Error(`Error loading film...`);
  }

  return response.json();
}

export default async function Film({ params }: { params: Params }) {
  const { id } = await params;

  const film = await getFilmData(id);

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{film.title}</h1>
        <p className={styles.text}><strong>Description:</strong> {film.opening_crawl}</p>
        <p className={styles.text}><strong>Director:</strong> {film.director}</p>
        <p className={styles.text}><strong>Producer:</strong> {film.producer}</p>
        <p className={styles.text}><strong>Release Date:</strong> {film.release_date}</p>
        <Link href={'/films'} className={styles.link}>Films List</Link>
      </div>
    </main>
  );
}