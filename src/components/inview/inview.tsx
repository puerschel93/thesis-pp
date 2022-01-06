interface InViewProps {
	abstract: boolean;
	variable: boolean;
	mixin: boolean;
	verschachtelung: boolean;
	vererbung: boolean;
	iteration: boolean;
	conditional: boolean;
	builtin: boolean;
	custom: boolean;
	syntax: boolean;
}

export const InView = (props: InViewProps) => {
	const { abstract, variable, mixin, verschachtelung, vererbung, iteration, conditional, builtin, custom, syntax } =
		props;

	return <p>He</p>;
};
