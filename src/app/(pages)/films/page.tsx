import Image from 'next/image';
import icon from '../../../../public/icon.png';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './filmList.module.css';

export const metadata: Metadata = {
  title: 'Films | Next App',
  description: 'List of Star Wars films'
};

interface Film {
  episode_id: number;
  title: string;
}

async function getFilmsList() {
  const response = await fetch('https://swapi.info/api/films', {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    throw new Error('Error loading films list...');
  }

  return response.json();
}

export default async function FilmList() {
  const films = await getFilmsList();

  return (
    <>
      <h1 className={styles.title}>Star Wars Films</h1>
      <ul className={styles.list}>
        {films.map((film: Film) => (
          <li key={film.episode_id} className={styles.listItem}>
            <Link href={`/films/${film.episode_id}`} className={styles.link}>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image src={icon} alt={'Star Wars Icon'} width={25} height={25} />
                </div>
                <div className={styles.cardTitle}>
                  {film.title}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      ;
    </>
  );
}