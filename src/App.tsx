import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <Main />
        </div>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
export default App;
