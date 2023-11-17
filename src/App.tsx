import { ConnectKitButton } from "connectkit";
import { BrowserRouter, Routes, Route } from "react-router-dom"   
import { useAccount } from "wagmi";
import Topbar from "./Layouts/Topbar";
import Footer from "./Layouts/Footer";
import Dashboard from "./pages/Dashboard";
import Roam from "./pages/Roam";

export function App() {
  const { isConnected } = useAccount();
  return (
    <>
      <div className="fixed w-[1px] h-full bg-gray-600 top-0 left-[100px] opacity-30"></div>
      <div className="fixed w-[1px] h-full bg-gray-600 top-0 right-[100px] opacity-30"></div>
      <Topbar></Topbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roam" element={<Roam />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
      {/* <ConnectKitButton /> */}
    </>
  );
}
