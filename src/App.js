import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./components/utils/appstore";
function App() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
