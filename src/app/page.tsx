import styles from '@/app/(pages)/films/filmList.module.css';
import style from './home.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Welcome to Star Wars films</h1>
      <div className={style.wrapper}>
        {/*<Image src={image}
               alt={'Star wars movie'}
               placeholder={'blur'}
               fill
               sizes="(max-width: 900px) 100vw, (max-width: 600px) 50vw, 33vw"
               priority
        />*/}
      </div>
    </>
  );
};