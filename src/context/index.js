import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
	return (
		<AppContext.Provider
			value={{}}
		>
			{children}
		</AppContext.Provider>
	)
}
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);