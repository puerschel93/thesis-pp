import Switcher from 'components/switcher';
import { colors } from 'utils/colors';
import styles from './color-switch.module.css';
import { Hint } from './hint';

export const ColorSwitch = () => {
	return (
		<div className={styles['colorswitch__container']}>
			{colors.map((hex, index) => (
				<Switcher key={hex + index} hex={hex} />
			))}

			<Hint />
		</div>
	);
};
