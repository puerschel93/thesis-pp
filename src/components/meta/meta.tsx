import { IoWarning } from 'react-icons/io5';
import styles from './meta.module.scss';

export const Meta = () => {
	return (
		<div className={styles['meta__container']}>
			<p>
				<span className={styles['meta__warning']}>
					<IoWarning />
				</span>
				Diese Webseite wurde ausschließlich zu Demonstrationszwecken implementiert um die
				Einbindungsmöglichkeiten von{' '}
				<a href="https://www.w3.org/Style/CSS/Overview.de.html" target="_blank" rel="noreferrer">
					CSS
				</a>{' '}
				und CSS-Präprozessoren wie{' '}
				<a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
					Sass
				</a>
				,{' '}
				<a href="https://lesscss.org/" target="_blank" rel="noreferrer">
					Less
				</a>{' '}
				und{' '}
				<a href="https://stylus-lang.com/" target="_blank" rel="noreferrer">
					Stylus
				</a>{' '}
				in responsiven Single Page Applications zu demonstrieren. Die auf dieser Webseite dargestellten
				Ergebnisse wurden aus der Bachelorarbeit entnommen, stellen jedoch <strong>keinen</strong>{' '}
				eigenständigen Inhalt der Bachelorarbeit dar, weshalb keine Garantie, trotz bester Bemühungen, für die
				Richtigkeit der auf dieser Seite ersichtlichen Werte gegeben wird. Die vollständige Bachelorarbeit kann
				bei Bedarf am Seitenende heruntergeladen werden.
			</p>
		</div>
	);
};
