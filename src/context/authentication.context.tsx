import { createContext, ReactNode, useState } from 'react';

type AuthenticationContextProviderProperties = {
	children: ReactNode;
};

type AuthenticationContextValue = {
	currentUser: null;
};

const AuthenticationContext = createContext<AuthenticationContextValue>({
	currentUser: null,
});

export { AuthenticationContext };

const AuthenticationContextProvider = ({ children }: AuthenticationContextProviderProperties) => {
	const [currentUser, setCurrentUser] = useState(null);

	const value = {
		currentUser,
	};

	return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};

export default AuthenticationContextProvider;
