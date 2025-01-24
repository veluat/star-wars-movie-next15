import Link from 'next/link';
import { Metadata } from 'next';
import { CustomTitle } from '@/components/custom-title/CustomTitle';
import style from './Movie.module.css';

interface Movie {
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
  const movie = await getMovieData(id);
  return {
    title: movie.title
  };
}

async function getMovieData(id: string): Promise<Movie> {
  const response = await fetch(`https://swapi.info/api/films/${id}`, {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    throw new Error(`Error loading movie...`);
  }

  return response.json();
}

export default async function Movie({ params }: { params: Params }) {
  const { id } = await params;

  const movie = await getMovieData(id);

  return (
    <main className={style.container}>
      <div className={style.card}>
        <CustomTitle>{movie.title}</CustomTitle>
        <p className={style.text}><strong>Description:</strong> {movie.opening_crawl}</p>
        <p className={style.text}><strong>Director:</strong> {movie.director}</p>
        <p className={style.text}><strong>Producer:</strong> {movie.producer}</p>
        <p className={style.text}><strong>Release Date:</strong> {movie.release_date}</p>
        <Link href={'/movies'} className={style.link}>Movies List</Link>
      </div>
    </main>
  );
}