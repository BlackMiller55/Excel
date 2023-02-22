import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthProvider";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CookiesProvider>
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </CookiesProvider>
);
