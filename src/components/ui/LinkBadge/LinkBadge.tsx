import Link from 'next/link';
import type { FC } from 'react';
import s from './LinkBadge.module.css';

interface Props {
  title: string;
  link: string;
  color: string;
}

export const LinkBadge: FC<Props> = ({ title, link, color }) => {
  return (
    <Link
      target={'_blank'}
      className={s.container}
      href={link}
      style={{
        borderColor: color,
        background: color.replace('rgb', 'rgba').replace(')', ', .1)'),
      }}
    >
      <span className={s.title}>{title}</span>
    </Link>
  );
};
