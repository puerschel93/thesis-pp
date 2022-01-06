import ColorSwitch from 'components/colorswitch';
import Heading from 'components/heading';
import styles from './main.module.css';

/**
 * This component is the main entrypoint of the example app.
 * @returns {JSX.Element}
 */
export const Main = () => {
	return (
		<div className={styles['main__container']} id="main__container">
			<ColorSwitch />
			<Heading />
		</div>
	);
};
