import useBreakpoints from '@thebiltheory/usebreakpoints';
import ResultHeader from 'components/resultheader';
import ResultHeading from 'components/resultheading';
import { Section } from 'enums/sections';
import { useInView } from 'react-hook-inview';
import styles from './result.module.scss';

interface Content {
	frequence: number | string;
	content: string;
}

/** Interface Props */
interface ResultProps {
	section: Section;
	data: Content;
}

/**
 * The result component is used to display a result section of the bachelorthesis.
 * @param {ResultProps}
 * @returns {JSX.Element}
 */
export const Result = (props: ResultProps) => {
	/** Props */
	const { section, data } = props;

	/** Hooks */
	const value = useBreakpoints([0, 0, 1, 1], [576, 768, 992, 1200])[0] as number;
	const [ref, inView] = useInView({
		threshold: value,
	});

	return (
		<div
			className={`
			${styles['result__container']}
			${inView || value === 0 ? styles['result__container--inview'] : ''}
		`}
			ref={ref}
		>
			<ResultHeading title={section} />
			<ResultHeader />
			<p className={styles['result__percentage']}>
				{data.frequence}
				{typeof data.frequence !== 'string' && '%'}
			</p>
			<p className={styles['result__percentage--embedded']}>
				Häufigkeit{' '}
				<h1>
					{data.frequence}
					{typeof data.frequence !== 'string' && '%'}
				</h1>
			</p>
			<p className={styles['result__content']} dangerouslySetInnerHTML={{ __html: data.content }} />
		</div>
	);
};

Result.defaultProps = {
	section: Section.NotAvailable,
	data: {
		frequence: 0,
		content: '',
	},
};
