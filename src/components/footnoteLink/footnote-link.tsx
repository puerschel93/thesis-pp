/** Props Interface */
interface FootnoteLinkProps {
	label: string;
	href: string;
}

/**
 * This component represents a link in the footnote section.
 * @param props
 * @returns {JSX.Element}
 */
export const FootnoteLink = (props: FootnoteLinkProps) => {
	/** Props */
	const { label, href } = props;

	return (
		<li>
			{label}{' '}
			<a href={href} target="_blank" rel="noreferrer">
				{href}
			</a>
		</li>
	);
};
