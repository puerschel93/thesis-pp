import { config } from 'backend/config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/** Initialize firebase */
const app = initializeApp(config);
export const db = getFirestore(app);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
