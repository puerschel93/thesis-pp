import ResultHeading from 'components/resultheading';
import styles from './footnote.module.css';

export const Footnote = () => {
	return (
		<div className={styles['footnote__container']}>
			<ResultHeading title="Hinweise" />
			<p>Für die Erstellung dieses Projekts wurden folgende Bibliotheken und Tools verwendet:</p>
			<ul>
				<li>
					Firebase{' '}
					<a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
						firebase.google.com/
					</a>
				</li>
				<li>
					React{' '}
					<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
						www.reactjs.org/
					</a>
				</li>
				<li>
					React Router{' '}
					<a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
						www.reactrouter.com/
					</a>
				</li>
				<li>
					React Helmet{' '}
					<a href="https://github.com/nfl/react-helmet" target="_blank" rel="noreferrer">
						github.com/nfl/react-helmet
					</a>
				</li>
				<li>
					React Icons{' '}
					<a href="https://react-icons.netlify.com/" target="_blank" rel="noreferrer">
						react-icons.netlify.com/
					</a>
				</li>
				<li>
					Create React App{' '}
					<a href="https://create-react-app.dev/" target="_blank" rel="noreferrer">
						www.create-react-app.dev/
					</a>
				</li>
			</ul>
			<div className={styles.legal}>
				<p>©{new Date().getFullYear()} by Florian Pürschel</p>
				<a href="https://www.prshl.de" target="_blank" rel="noreferrer">
					www.prshl.de
				</a>
			</div>
		</div>
	);
};
