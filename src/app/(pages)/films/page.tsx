import React from 'react';
import { CustomTitle } from '@/components/custom-title/CustomTitle';
import { Metadata } from 'next';
import { FilmListItem } from '@/components/film-list-item/FilmListItem';
import style from './filmList.module.css';

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
      <CustomTitle>Star Wars Films</CustomTitle>
      <ul className={style.list}>
        {films.map((film: Film) => (
          <FilmListItem key={film.episode_id} episodeId={film.episode_id} title={film.title} />
        ))}
      </ul>
    </>
  );
}
