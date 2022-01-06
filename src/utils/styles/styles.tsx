import 'styles/fonts.css';
import 'styles/global.css';
import 'styles/reset.css';
import 'styles/variables.css';

/** Props Interface */
interface StylesProps {
	children: React.ReactNode;
}

/**
 * This component manages all the created stylesheets.
 * @returns {JSX.Element}
 */
export const Styles = (props: StylesProps) => {
	return <>{props.children}</>;
};
