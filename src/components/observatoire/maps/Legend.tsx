import styles from '@/styles/observatoire/maps/Legend.module.scss';

const Legend = (props:any) => {
  return (
    <div className={styles.legend}>
      <div className={styles.legend_title}>{props.title}</div>
    </div>
  );
};

export default Legend;