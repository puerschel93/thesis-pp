import hint from 'assets/changecolor.svg';
import { useHide } from 'hooks/use-hide';
import { ReactSVG } from 'react-svg';
import styles from './color-switch.module.css';

export const Hint = () => {
	/** Hooks */
	const hide = useHide();

	return (
		<div
			className={`
			${styles.hint}
			${hide ? styles['hint__lead--hidden'] : ''}
		`}
		>
			<ReactSVG src={hint} />
		</div>
	);
};
