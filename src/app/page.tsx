import Image from 'next/image'
import icon from './../../public/icon.png'
import styles from './page.module.css';

interface Film {
  episode_id: number;
  title: string;
}

export const revalidate = 3600;

export default async function FilmList() {
  const response = await fetch('https://swapi.dev/api/films/');
  if (!response.ok) {
    return <div>Error loading films...</div>;
  }
  const data = await response.json();
  const films: Film[] = data.results;

  const correctFilms = films.map((film, index) => ({
    ...film,
    episode_id: index + 1,
  }));

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Star Wars Films</h1>
      <ul className={styles.list}>
        {correctFilms.map((film) => (
          <li key={film.episode_id} className={styles.listItem}>
            <a href={`/films/${film.episode_id}`} className={styles.link}>
              <div className={styles.card}>
                <Image src={icon} alt={'Star Wars Icon'}/>
                {film.title}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}