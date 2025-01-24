import styles from '@/app/(pages)/films/filmList.module.css';

export default function About() {
  return (
    <div style={{ width: '100%', maxWidth: '700px', padding: '0 10px', fontSize: '18px', lineHeight: '1.7' }}>
      <h1 className={styles.title}>About app</h1>
      <p>This test application is developed using App Router (Next.js 15) and demonstrates the capabilities of static
        generation and incremental rebuilding. The application dynamically displays movie data from an open API.
      </p>
      <br/>
      <ul>
        <li>The app allows users to navigate from the root page to any of the template movie description pages.
        </li>
        <li>Movie data is retrieved from the public **swapi.info** server, which is an effective and simple way to
          demonstrate the use of static generation and incremental rebuilding in Next.js.
        </li>
      </ul>
    </div>
  );
}