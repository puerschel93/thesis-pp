import styles from './result-heading.module.css';

interface ResultHeadingProps {
	title: string;
}

/**
 * This component is used to display the title of each line in the result section.
 * @returns {JSX.Element}
 */
export const ResultHeading = (props: ResultHeadingProps) => {
	const { title } = props;

	return (
		<div className={styles['result__heading']}>
			<h3>{title}</h3>
			<hr />
		</div>
	);
};

ResultHeading.defaultProps = {
	title: 'No title defined',
};
