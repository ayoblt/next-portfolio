import { ToggleProvider } from "./toggle-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ToggleProvider>{children}</ToggleProvider>;
};

export default Providers;
