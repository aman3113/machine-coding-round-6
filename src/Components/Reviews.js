import React from "react";
import { AiFillStar } from "react-icons/ai";

const Reviews = ({ reviewArr }) => {
	return (
		<div className="py-4">
			<p className="text-2xl font-bold mb-2">Reviews</p>
			<div className="flex flex-col gap-3">
				{reviewArr?.map((review, idx) => {
					const { rating, comment, revName, pp } = review;
					return (
						<div
							key={idx}
							className="flex justify-between items-start border-b-2 border-gray-500 p-2"
						>
							<div>
								<div className="flex items-center gap-2">
									<img
										src={pp}
										className="w-[30px] h-[30px] rounded-[50%]"
										alt=""
									/>
									<span>{revName}</span>
								</div>
								<p>{comment}</p>
							</div>
							<div className="bg-green-800 text-yellow-400 px-2 flex items-center gap-1 rounded-md">
								{rating}
								<AiFillStar size={15} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Reviews;
