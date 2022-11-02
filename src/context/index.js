import { createContext, useContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
	return (
		<AppContext.Provider>
			{children}
		</AppContext.Provider>
	)
}
export default AppProvider;
export const useAppContext = () => useContext(AppContext);