export interface Product {
	id: number;
	heading: string;
	option: string;
	price: number;
	quantity: number;
}

export class Basket {
	private static basket: Array<Product>;

	static {
		Basket.basket = JSON.parse(localStorage.getItem("basket") || "[]");
	}

	static addItem(product: Product) {
		const index = Basket.basket.findIndex(
			(item: Product) =>
				item.id === product.id && item.option === product.option
		);

		if (index === -1) {
			Basket.basket.push(product);
		} else {
			Basket.basket[index].quantity += product.quantity;
		}

		localStorage.setItem("basket", JSON.stringify(Basket.basket));
	}

	static removeItem(item: Product) {
		const index = Basket.basket.findIndex(
			(product: Product) =>
				product.id === item.id && product.option === item.option
		);

		if (index !== -1) {
			if (Basket.basket[index].quantity > 1) {
				Basket.basket[index].quantity -= 1;
			} else {
				Basket.basket.splice(index, 1);
			}
			localStorage.setItem("basket", JSON.stringify(Basket.basket));
		}
	}

	static getTotal() {
		return Basket.basket.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	}

	static getItems() {
		return Basket.basket;
	}
}
