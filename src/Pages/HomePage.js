import React, { useState } from "react";
import { cuisineData } from "../Data";
import RestaurantList from "../Components/RestaurantList";

const HomePage = () => {
	const [selectedCuisine, setSelectedCuisine] = useState(null);
	return (
		<div className="flex flex-col items-center p-4">
			<p className="text-4xl font-bold mb-4">Food Ordering App</p>
			<p className="text-2xl font-semibold mb-2">Select Your Cuisine:</p>
			<div className="flex gap-2 mb-8">
				{cuisineData?.map(({ id, name }) => (
					<div
						key={id}
						onClick={() => setSelectedCuisine(id)}
						className={`p-1 bg-red-400 text-white cursor-pointer rounded ${
							selectedCuisine === id && "bg-red-500"
						}`}
					>
						{name}
					</div>
				))}
			</div>
			<RestaurantList selectedCuisine={selectedCuisine} />
		</div>
	);
};

export default HomePage;
