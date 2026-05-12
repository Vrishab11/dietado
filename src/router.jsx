import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer"

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/CartPage";
import ContactUs from "./pages/ContactUsPage";
import FindUs from "./pages/FindUsPage";
import AboutUs from "./pages/AboutUsPage";

import WhatsAppFloat from "./components/common/WhatsAppFloat";
import ScrollToTop from "./components/common/ScrollToTop";

const Layout = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <Footer />
    <WhatsAppFloat />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
        { path: "Menu", element: <MenuPage /> },
      { path: "Details/:id", element: <ItemDetailsPage /> },
      { path: "Cart", element: <CartPage />},
      { path: "ContactUs", element: <ContactUs /> },
      { path: "FindUs", element: <FindUs />},
      { path: "AboutUs", element: <AboutUs />},
    ],
  },
]);