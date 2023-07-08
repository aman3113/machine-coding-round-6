import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<div className="text-blue-800">App working</div>;
		</ChakraProvider>
	);
}

export default App;
