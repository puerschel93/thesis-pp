import { DataContext } from 'App';
import Abstract from 'components/abstract';
import Footnote from 'components/footnote';
import Meta from 'components/meta';
import Result from 'components/result';
import { Section } from 'enums/sections';
import { useContext } from 'react';
import styles from './content.module.css';

export const Content = () => {
	/** Context */
	const data = useContext(DataContext);

	return (
		<div className={styles['content__container']}>
			<Meta />
			<Abstract />
			<Result section={Section.Variables} data={data.variablen} />
			<Result section={Section.Mixins} data={data.mixins} />
			<Result section={Section.Verschachtelung} data={data.verschachtelung} />
			<Result section={Section.Vererbung} data={data.vererbung} />
			<Result section={Section.Iteration} data={data.iteration} />
			<Result section={Section.BedingteAnweisungen} data={data.bedingteanweisungen} />
			<Result section={Section.EingebauteFunktionen} data={data.eingebautefunktionen} />
			<Result section={Section.BenutzerdefinierteFunktionen} data={data.benutzerdefiniertefunktionen} />
			<Result section={Section.AlternativeSyntax} data={data.alternativesyntax} />
			<Footnote />
		</div>
	);
};
