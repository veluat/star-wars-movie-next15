import React from 'react';
import { CustomTitle } from '@/components/custom-title/CustomTitle';
import { Metadata } from 'next';
import { MovieListItem } from '@/components/movie-list-item/MovieListItem';
import style from './MovieList.module.css';

export const metadata: Metadata = {
  title: 'Movies List | Next App',
  description: 'List of Star Wars movies'
};

interface Movie {
  episode_id: number;
  title: string;
}

async function getMoviesList() {
  const response = await fetch('https://swapi.info/api/films', {
    next: {
      revalidate: 3600
    }
  });

  if (!response.ok) {
    throw new Error('Error loading movies list...');
  }

  return response.json();
}

export default async function MovieList() {
  const movies = await getMoviesList();

  return (
    <>
      <CustomTitle>Star Wars Movies</CustomTitle>
      <ul className={style.list}>
        {movies.map((movie: Movie) => (
          <MovieListItem key={movie.episode_id} episodeId={movie.episode_id} title={movie.title} />
        ))}
      </ul>
    </>
  );
}
