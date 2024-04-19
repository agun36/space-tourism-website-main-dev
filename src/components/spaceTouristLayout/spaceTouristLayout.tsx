import { ReactNode } from "react";
import './styles.scss';
import { DestinationProvider } from "../../contents/destinationContext";
export const SpaceTourism = ({ children }: { children: ReactNode }) => {
    return (
        <DestinationProvider>

            <section>
                <div className="content-wrapper">
                    {children}
                </div>
            </section>
        </DestinationProvider>
    )
}