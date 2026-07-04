import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="site-layout min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="site-main flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
