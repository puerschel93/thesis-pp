import Abstract from 'components/abstract';
import Meta from 'components/meta';
import Result from 'components/result';
import { Section } from 'enums/sections';
import styles from './content.module.css';

export const Content = () => {
	return (
		<div className={styles['content__container']}>
			<Meta />
			<Abstract />
			<Result section={Section.Variables} />
			<Result section={Section.Mixins} />
			<Result section={Section.Verschachtelung} />
			<Result section={Section.Vererbung} />
			<Result section={Section.Iteration} />
			<Result section={Section.BedingteAnweisungen} />
			<Result section={Section.EingebauteFunktionen} />
			<Result section={Section.BenutzerdefinierteFunktionen} />
			<Result section={Section.AlternativeSyntax} />
		</div>
	);
};
