import React from "react";
import { Link } from "react-router-dom";

const RestaurantItems = ({ details }) => {
	const { id, name, menu } = details;
	return (
		<div>
			<p className="text-2xl font-semibold mb-2">Dishes by {name}</p>
			<div className=" max-w-[100vw] overflow-x-auto Scroll flex gap-8">
				{menu?.map((item) => (
					<SingleItem
						itemDetail={item}
						restaurantId={id}
						key={id}
						restaurantName={name}
					/>
				))}
			</div>
		</div>
	);
};

const SingleItem = ({ itemDetail, restaurantId, restaurantName }) => {
	const { name, imgSrc, price, qty } = itemDetail;
	return (
		<Link to={`/restaurant/${restaurantId}`}>
			<div className="border border-black rounded-md cursor-pointer w-[20vw] h-[25vw] min-w-[200px] p-1">
				<img className="w-full h-[75%]" src={imgSrc} alt="" />
				<p>{name}</p>
				<p>{`Rs.${price} for ${qty}`}</p>
				<p>{restaurantName}</p>
			</div>
		</Link>
	);
};

export default RestaurantItems;
