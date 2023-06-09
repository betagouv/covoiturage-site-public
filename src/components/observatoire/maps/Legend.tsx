import styles from '@/styles/observatoire/maps/Legend.module.scss';

interface Props {
  title: string;
}

export function Legend(props: Props) {
  return (
    <div className={styles.legend}>
      <div className={styles.legend_title}>{props.title}</div>
    </div>
  );
}
