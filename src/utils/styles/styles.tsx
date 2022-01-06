import 'styles/_fonts.scss';
import 'styles/_global.scss';
import 'styles/_reset.scss';
import 'styles/_variables.scss';

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
