import { CustomTitle } from '@/components/custom-title/CustomTitle';
import style from './About.module.css';

export default function About() {
  return (
    <div className={style.about}>
      <CustomTitle>About app</CustomTitle>
      <p>This test application is developed using App Router (Next.js 15) and demonstrates the capabilities of static
        generation and incremental rebuilding. The application dynamically displays movie data from an open API.
      </p>
      <p>&#10004; The app allows users to navigate from the root page to any of the template movie description pages.
      </p>
      <p>&#10004; Movie data is retrieved from the public **swapi.info** server, which is an effective and simple way to
        demonstrate the use of static generation and incremental rebuilding in Next.js.
      </p>
    </div>
  );
}