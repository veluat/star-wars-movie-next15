import styles from './FilmList.module.css';
interface Film {
  episode_id: number;
  title: string;
}

export const revalidate = 3600;

export default async function Page() {
  const response = await fetch('https://swapi.dev/api/films/');
  const data = await response.json();
  const films: Film[] = data.results;

  const correctFilms = films.map((film, index) => ({
    ...film,
    episode_id: index + 1,
  }));

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Films</h1>
      <ul className={styles.list}>
        {correctFilms.map((film) => (
          <li key={film.episode_id} className={styles.listItem}>
            <a href={`/films/${film.episode_id}`} className={styles.link}>
              {film.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}