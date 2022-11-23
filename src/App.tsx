import React, { useContext } from 'react';
import './App.css';
import GoogleLoginButton from './components/authentication/GoogleLoginButton';
import Header from './components/layout/Header';
import { AuthenticationContext } from './context/authentication.context';

function App() {
	const { currentUser } = useContext(AuthenticationContext);
	return (
		<>
			<Header />
			{!currentUser && (
				<div className='h-80 flex items-center justify-center'>
					<GoogleLoginButton />
				</div>
			)}
		</>
	);
}

export default App;
