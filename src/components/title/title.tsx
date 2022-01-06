import Helmet from 'react-helmet';

interface TitleProps {
	title: string;
}

/**
 * This component is used to modify the <title> tag of the page.
 * @param props: TitleProps
 * @returns {JSX.Element}
 */
export const Title = (props: TitleProps) => {
	return (
		<Helmet>
			<title>{props.title}</title>
		</Helmet>
	);
};

/** Default Props */
Title.defaultProps = {
	title: 'No title provided.',
};
