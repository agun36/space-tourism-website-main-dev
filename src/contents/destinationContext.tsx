/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
type DestinationContextType = {
    destination: number;
    setDestination: (value: number) => void;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DestinationContext = createContext<DestinationContextType>(undefined as any);
export const DestinationProvider = ({ children }: any) => {
    const [destination, setDestination] = useState(0);
    return (
        <DestinationContext.Provider value={{ destination, setDestination }}>
            {children}
        </DestinationContext.Provider>
    );
}