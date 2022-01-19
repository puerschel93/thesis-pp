import FootnoteLink from 'components/footnoteLink';
import ResultHeading from 'components/resultheading';
import styles from './footnote.module.scss';

export const Footnote = () => {
	return (
		<div className={styles['footnote__container']}>
			<ResultHeading title="Hinweise" />
			<p>Für die Erstellung dieses Projekts wurden folgende Bibliotheken und Tools verwendet:</p>
			<ul>
				<FootnoteLink label="Sass-Loader" href="https://www.npmjs.com/package/sass-loader" />
				<FootnoteLink label="Sass" href="https://www.sass-lang.com" />
				<FootnoteLink label="Create React App" href="https://create-react-app.dev" />
				<FootnoteLink label="React" href="https://reactjs.org" />
				<FootnoteLink label="React Icons" href="https://react-icons.netlify.com" />
				<FootnoteLink label="React Helmet" href="https://github.com/nfl/react-helmet" />
				<FootnoteLink label="React Router" href="https://reactrouter.com" />
				<FootnoteLink label="Firebase" href="https://firebase.google.com" />
				<FootnoteLink label="Choices.js" href="https://github.com/Choices-js/Choices" />
				<FootnoteLink label="Moment.js" href="https://momentjs.com" />
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
