import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import icon from './../../../public/icon.png';
import style from './filmList.module.css';

interface Props {
  episodeId: number;
  title: string;
}

export const FilmListItem = ({ episodeId, title }: Props) => {
  return (
    <li className={style.listItem}>
      <Link href={`/films/${episodeId}`} className={style.link}>
        <div className={style.card}>
          <div className={style.cardImg}>
            <Image src={icon} alt={'Star Wars Icon'} width={25} height={25} />
          </div>
          <div className={style.cardTitle}>
            {title}
          </div>
        </div>
      </Link>
    </li>
  );
};