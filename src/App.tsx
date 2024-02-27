import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { I18nextProvider } from "react-i18next";

import i18n from "./components/i18n/i18n";

const queryClient = new QueryClient();

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="flex h-screen">
            <div className="border-r">
              <Sidebar />
            </div>
            <div className="px-2">
            <Main />
            </div>
          </div>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </I18nextProvider>
  );
};
export default App;
