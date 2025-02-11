import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { ChatBot } from "./components/ChatBot/ChatBot";
import { Home } from "./pages/Home/Home";
import { Map } from "./pages/Map/Map";
import { ApartmentDetail } from "./pages/ApartmentDetail/ApartmentDetail";
import "./styles/main.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Header />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/apartment/:id" element={<ApartmentDetail />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
