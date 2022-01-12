import ResultHeading from 'components/resultheading';
import { Section } from 'enums/sections';
import style from './abstract.module.scss';

/** Props Interface */
interface AbstractProps {
	section: Section;
	data: {
		content: string;
	};
}

/**
 * This component is used to display the abstract of the bachelorthesis. It is defined in
 * a separate file because its content varies to the other sections.
 * @returns {JSX.Element}
 */
export const Abstract = (props: AbstractProps) => {
	/** Props */
	const { section, data } = props;

	return (
		<div className={style['abstract__container']}>
			<ResultHeading title={section} />
			<p dangerouslySetInnerHTML={{ __html: data.content }} />
		</div>
	);
};
