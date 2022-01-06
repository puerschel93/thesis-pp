import useBreakpoints from '@thebiltheory/usebreakpoints';
import ResultHeader from 'components/resultheader';
import ResultHeading from 'components/resultheading';
import { Section } from 'enums/sections';
import { useInView } from 'react-hook-inview';
import styles from './result.module.css';

/** Interface Props */
interface ResultProps {
	section: Section;
}

/**
 * The result component is used to display a result section of the bachelorthesis.
 * @param {ResultProps}
 * @returns {JSX.Element}
 */
export const Result = (props: ResultProps) => {
	/** Props */
	const { section } = props;

	/** Hooks */
	const value = useBreakpoints([0, 0, 1, 1], [576, 768, 992, 1200])[0] as number;

	const [ref, inView] = useInView({
		threshold: value,
	});

	return (
		<div
			className={`
			${styles['result__container']}
			${inView ? styles['result__container--inview'] : ''}
		`}
			ref={ref}
		>
			<ResultHeading title={section} />
			<ResultHeader />
			<p className={styles['result__percentage']}>82%</p>
			<p className={styles['result__content']}>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
				massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
				felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
				justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
				venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
				Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
				consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
				Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
				vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
				eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
				nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
				Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
				faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
				consequat, leo eget bibendum sodales, augue velit cursus nunc,
			</p>
		</div>
	);
};

Result.defaultProps = {
	section: Section.NotAvailable,
};
