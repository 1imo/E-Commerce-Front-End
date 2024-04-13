export const product = {
	id: 1,
	heading: "Everyday Stone Vase",
	category: "Ceramics",
	images: [
		"https://images.squarespace-cdn.com/content/v1/5e8b3c8e75baa442b3ebb9f9/1625001623869-H8KWHGLFBWATK396I1XR/IMG_3419.JPG?format=750w",
		"https://images.squarespace-cdn.com/content/v1/5e8b3c8e75baa442b3ebb9f9/1625001667351-RPXVS7VXEQBQ5E67L83L/IMG_3426.JPG?format=750w",
		"https://images.squarespace-cdn.com/content/v1/5e8b3c8e75baa442b3ebb9f9/1688901697716-AG5VKC8XFV01I9RRVG1U/DSC02413.jpeg?format=750w",
	],
	options: [
		["#1", 125],
		["#2", 120],
	],
	description:
		"Introduce a touch of natural elegance to your home with our Everyday Stone Vase. Crafted from high-quality ceramic materials, this vase showcases a unique stone-like texture that adds depth and character to any space. Its versatile design makes it perfect for displaying your favorite flowers or as a standalone decorative piece. Available in two distinct variations, each vase is meticulously handcrafted, ensuring that no two pieces are exactly alike. Elevate your interior décor with the timeless beauty of the Everyday Stone Vase.",
};

export const selected = {
	id: product.id,
	heading: product.heading,
	category: product.category,
	options: product.options[0] || undefined,
	quanitity: 0,
};

export interface Product {
	id: number;
	heading: string;
	option: string;
	price: number;
	quantity: number;
}

export const addToBasket = (product: Product) => {
	const basket = JSON.parse(localStorage.getItem("basket") || "[]");
	const index = basket.findIndex(
		(item: Product) =>
			item.id === product.id && item.option === product.option
	);

	if (index === -1) {
		basket.push(product);
	} else {
		basket[index].quantity += product.quantity;
	}

	localStorage.setItem("basket", JSON.stringify(basket));
};
