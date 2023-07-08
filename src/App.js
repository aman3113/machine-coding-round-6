import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { RestaurantPage } from "./Pages/RestaurantPage";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
	return (
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/restaurant/:restaurantId"
						element={<RestaurantPage />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;
