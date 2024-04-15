import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home-Page/Index";
import ProductPage from "./Pages/Product-Page/Index";
import BasketPage from "./Pages/Basket-Page/Index";
import CheckoutPage from "./Pages/Checkout-Page/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/item/:id" element={<ProductPage />} />
			<Route path="/basket" element={<BasketPage />} />
			<Route path="/checkout" element={<CheckoutPage />} />
		</Routes>
	);
}

export default App;
