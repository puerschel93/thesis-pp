import Main from 'components/main';
import Title from 'components/title';
import Styles from 'utils/styles';

/**
 * Main root component for the demonstration app.
 * @returns {JSX.Element}
 */
const App = () => {
	return (
		<Styles>
			<Title title="Bachelorarbeit - CSS Version" />
			<Main />
		</Styles>
	);
};

export default App;
