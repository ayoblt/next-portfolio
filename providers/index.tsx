import FramerLazyMotion from "./framer-provider";
import { ToggleProvider } from "./toggle-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <FramerLazyMotion>
    <ToggleProvider>{children}</ToggleProvider>
    // </FramerLazyMotion>
  );
};

export default Providers;
