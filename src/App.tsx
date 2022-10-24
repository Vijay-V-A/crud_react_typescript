import Home from "./Components/Home";
import store from "./StateManagement/store";
import AppProviders from "./AppProviders";

const App = () => {
  return (
    <AppProviders>
      <Home />
    </AppProviders>
  );
};

export default App;
