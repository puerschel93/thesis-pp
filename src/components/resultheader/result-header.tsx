import styles from './result-header.module.css';

export const ResultHeader = () => {
	return (
		<div className={styles['result__header']}>
			<div>Häufigkeit</div>
			<div>Zusammenfassung</div>
		</div>
	);
};
