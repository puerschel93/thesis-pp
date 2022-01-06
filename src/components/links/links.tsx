import { useHide } from 'hooks/use-hide';
import { IoLogoGithub } from 'react-icons/io5';
import styles from './links.module.scss';

/**
 * This component provides the links to the repository and the preprocessor
 * example.
 * @returns {JSX.Element}
 */
export const Links = () => {
	/** Hooks */
	const hide = useHide();

	/** Functions */
	const forwardGithub = () => {
		window.open('https://github.com/puerschel93/thesis-pp');
	};

	return (
		<div
			className={`
			${styles['links__container']}
			${hide ? styles['links__container--hidden'] : ''}
		`}
		>
			<span className={styles['links__github']} onClick={forwardGithub}>
				<IoLogoGithub />
				<p>Code auf GitHub einsehen</p>
			</span>
			<a href="https://css.prshl.de" target="_blank" rel="noreferrer">
				zur CSS-Version
			</a>
		</div>
	);
};
