import React from "react";
import { restaurantsData } from "../Data";
import RestaurantItems from "./RestaurantItems";

const RestaurantList = ({ selectedCuisine }) => {
	const selectedRestaurants =
		selectedCuisine === null
			? restaurantsData
			: restaurantsData.filter(
					(restaurant) => restaurant.cuisine_id === selectedCuisine
			  );
	return (
		<div className="w-full flex flex-col gap-4">
			{selectedRestaurants?.map((restaurant) => (
				<RestaurantItems details={restaurant} key={restaurant.id} />
			))}
		</div>
	);
};

export default RestaurantList;
