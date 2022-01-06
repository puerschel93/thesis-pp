import { useEffect, useState } from 'react';

/**
 * This hook is used to chose whether to show or hide the component.
 */
export const useHide = (): boolean => {
	const [hide, setHide] = useState(false);
	const [container, setContainer] = useState<HTMLElement>(
		document.getElementById('main__container') ?? ({} as HTMLElement)
	);

	const handleScroll = () => {
		setHide((container?.scrollTop ?? 0) > 25);
	};

	useEffect(() => {
		if (!container.scrollTop) {
			setContainer(document.getElementById('main__container') ?? ({} as HTMLElement));
		}
	}, [container]);

	useEffect(() => {
		if (!container.addEventListener) return;
		container?.addEventListener('scroll', handleScroll);
		return () => {
			container?.removeEventListener('scroll', handleScroll);
		};
	});

	return hide;
};
