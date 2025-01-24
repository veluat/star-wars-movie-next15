import React, { ReactNode } from 'react';
import style from './CustomTitle.module.css';

type Props = {
  children: ReactNode;
};

export const CustomTitle = ({ children }: Props) => {
  return <h1 className={style.title}>{children}</h1>;
};
