import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Heading from "./Atoms/Headings";
import Icon from "./Atoms/Icons";
import Text from "./Atoms/Text";
import BtnIcon from "./Molecules/Btn-Icon/Index";
import CrdCollections from "./Molecules/Crd-Collections/Index";
import CrdProducts from "./Molecules/Crd-Products-Sml/Index";
import QuantitySelect from "./Molecules/Quantity-Select/Index";
import Input from "./Molecules/Input/Index";
import LabelSelect from "./Molecules/Label-Select/Index";
import BtnMain from "./Molecules/Btn-Main/Index";
import ProductImgLrg from "./Molecules/Product-Img-Lrg/Index";
import NavBar from "./Organisms/Nav-Bar/Index";
import ProductPgActions from "./Organisms/Product-Pg-Actions/Index";
import ProductGrid from "./Organisms/Product-Grid/Index";
import CollectionsGrid from "./Organisms/Collections-Grid/Index";
import ProductImgGrid from "./Organisms/Product-Img-Grid/Index";
import LabelSelectGrid from "./Organisms/Label-Select-Grid/Index";
import BasketCrd from "./Molecules/Crd-Basket/Index";
import BasketCrdGrid from "./Organisms/Basket-Crd-Grid/Index";
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
