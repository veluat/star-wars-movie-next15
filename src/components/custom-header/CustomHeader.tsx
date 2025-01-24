import Link from 'next/link';

export const CustomHeader = () => {
  return (
    <header className={'wrapper'}>
      <Link href={'/'}>Home</Link>
      <Link href={'/films'}>Films</Link>
      <Link href={'/about'}>About</Link>
    </header>
  );
};