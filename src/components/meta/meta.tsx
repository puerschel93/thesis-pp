import { IoWarning } from 'react-icons/io5';
import styles from './meta.module.css';

export const Meta = () => {
	return (
		<div className={styles['meta__container']}>
			<p>
				<span className={styles['meta__warning']}>
					<IoWarning />
				</span>
				Diese Webseite wurde ausschließlich zu Demonstrationszwecken implementiert um die
				Einbindungsmöglichkeiten von{' '}
				<a href="" target="_blank">
					CSS
				</a>{' '}
				und CSS-Präprozessoren wie{' '}
				<a href="" target="_blank">
					Sass
				</a>
				,{' '}
				<a href="" target="_blank">
					Less
				</a>{' '}
				und{' '}
				<a href="" target="_blank">
					Stylus
				</a>{' '}
				in responsiven Single Page Applications zu demonstrieren. Die auf dieser Webseite dargestellten
				Ergebnisse wurden aus der Bachelorarbeit entnommen, stellen jedoch <strong>keinen</strong>{' '}
				eigenständigen Inhalt der Bachelorarbeit dar, weshalb keine Garantie, trotz bester Bemühungen, für die
				Richtigkeit der in auf dieser Seite ersichtlichen Werte gegeben wird. Die vollständige Bachelorarbeit
				kann bei Bedarf am Seitenende heruntergeladen werden.
			</p>
		</div>
	);
};
