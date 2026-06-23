import { Home } from "./components/Home/Home";
import { GlobalControllerProvider } from "./context/GlobalController";

export default function HomePage() {
  return (
    <GlobalControllerProvider>
      <Home />
    </GlobalControllerProvider>
  );
}
