import styles from './switcher.module.css';

/** Interface Props */
interface SwitcherProps {
	hex: string;
}

/**
 * This component is used to represent a color switcher to configure the css variable of
 * the primary accent color of the page.
 * @param props
 * @returns {JSX.Element}
 */
export const Switcher = (props: SwitcherProps) => {
	/** Props */
	const { hex } = props;

	/** Functions */
	const performChange = () => {
		document.documentElement.style.setProperty('--color-primary', hex);
	};

	return <div className={styles['switcher']} style={{ backgroundColor: hex }} onClick={performChange} />;
};

Switcher.defaultProps = {
	hex: '#000000',
};
