import Content from 'components/content';
import { useHide } from 'hooks/use-hide';
import styles from './heading.module.scss';

export const Heading = () => {
	/** Hooks */
	const hide = useHide();

	return (
		<div className={styles['heading__container']}>
			<div
				className={`
				${styles['heading__lead']}
				${hide ? styles['heading__lead--hidden'] : ''}
			`}
			>
				<div>
					<p>Florian Pürschel</p>
					<h1 className={styles['lead__main']}>Bachelorarbeit</h1>
				</div>
			</div>

			<Content />
		</div>
	);
};
