import Main from 'components/main';
import Title from 'components/title';
import { content } from 'data/content';
import { createContext, useEffect } from 'react';
import Logger from 'synth/logger';
import Styles from 'utils/styles';

/** Context */
export const DataContext = createContext(content);

/**
 * Main root component for the demonstration app.
 * @returns {JSX.Element}
 */
const App = () => {
	/** Effects */
	useEffect(() => Logger.log());

	return (
		<DataContext.Provider value={content}>
			<Styles>
				<Title title="Bachelorarbeit - SASS Version" />
				<Main />
			</Styles>
		</DataContext.Provider>
	);
};

export default App;
