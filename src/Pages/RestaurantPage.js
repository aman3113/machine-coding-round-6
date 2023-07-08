import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { restaurantsData } from "../Data";
import { MdArrowBack } from "react-icons/md";
import Reviews from "../Components/Reviews";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";

export const RestaurantPage = () => {
	const [reviewArr, setReviewArr] = useState([]);
	const [openReviewModel, setOpenReviewModel] = useState(false);
	const [formData, setFormData] = useState({
		rating: "",
		comment: "",
		revName: "Aman Antil",
		pp: "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg",
	});

	const { restaurantId } = useParams();
	const restaurant = restaurantsData.find(
		(item) => item.id === Number(restaurantId)
	);
	const { name, address, averageRating, menu, ratings } = restaurant;

	const menuItems = menu?.map((item) => item.name);

	function handleAddReview() {
		setReviewArr((prev) => [formData, ...prev]);
		setOpenReviewModel(false);
	}

	useEffect(() => {
		setReviewArr(ratings);
	}, []);
	return (
		<div className="py-[30px] px-[10vw] ">
			<Link to="/">
				<MdArrowBack size={30} className="absolute top-2 left-2" />
			</Link>
			<div className="flex items-center justify-between border-b-2 py-3 ">
				<div>
					<p className="text-5xl font-semibold mb-2">{name}</p>
					<p>{menuItems.toString()}</p>
					<p>{address}</p>
					<p>
						Average Rating: <span>{averageRating}</span>
					</p>
				</div>
				<button
					className="bg-red-400 text-white p-1 px-2 rounded-md"
					onClick={() => setOpenReviewModel(true)}
				>
					Add Review
				</button>
			</div>
			<Reviews reviewArr={reviewArr} />
			<Modal
				isOpen={openReviewModel}
				onClose={() => setOpenReviewModel(false)}
				isCentered
			>
				<ModalOverlay />
				<ModalContent bg="red.400" textColor="white">
					<ModalHeader fontSize={30}>Add Your Review</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<div className="flex flex-col gap-6">
							<label>
								Rating:
								<select
									className="border rounded-md ml-4 px-3 py-1 focus:outline-none text-black"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											rating: e.target.value,
										}))
									}
								>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
								</select>
							</label>
							<label>
								Comment:
								<input
									className="border rounded-md px-3 py-1 bg-white ml-4 focus:outline-none text-black"
									placeholder="write your comments here..."
									type="text"
									value={formData.comment}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											comment: e.target.value,
										}))
									}
								/>
							</label>
						</div>
					</ModalBody>

					<ModalFooter>
						<Button
							variant="ghost"
							className="w-full border bg-white"
							onClick={handleAddReview}
						>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};
