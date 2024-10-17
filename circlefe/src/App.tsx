import { Suspense } from "react";
import Router from "./router";

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router />
    </Suspense>
  );
};

export default App;
