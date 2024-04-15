import { FC, useState } from "react";
import NavBar from "../../Organisms/Nav-Bar/Index";
import Input from "../../Molecules/Input/Index";
import Heading from "../../Atoms/Headings";
import BtnMain from "../../Molecules/Btn-Main/Index";
import Text from "../../Atoms/Text";
import "./Style.css";

const CheckoutPage: FC = () => {
	const [proceed, setProceed] = useState<boolean>(false);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(e.target);
		const formData = new FormData(e.target as HTMLFormElement);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const houseNumber = formData.get("houseNo") as string;
		const postcode = formData.get("postcode") as string;
		const street = formData.get("street") as string;

		// Create an object with the form data
		const formDataObject = {
			name,
			email,
			houseNumber,
			postcode,
			street,
		};

		console.log(formDataObject);
	};

	return (
		<main className="checkout-page">
			<NavBar left="Back" />
			<form onSubmit={onSubmit} className="checkout-page__form">
				<div className="checkout-page__section">
					<Heading
						type="Primary"
						size="one"
						text="Addressee Details"
						colour="--grey-one"
					/>
					<Input
						type="User"
						placeholder="Pamela Anderson"
						label="Name"
						required={true}
						name="name"
					/>
					<Input
						type="Email"
						placeholder="email@email.com"
						label="Email"
						required={true}
						name="email"
						inputType="email"
					/>
				</div>
				<div className="checkout-page__section">
					<Heading
						type="Primary"
						size="one"
						text="Delivery Details"
						colour="--grey-one"
					/>
					<div className="checkout-page__input-group">
						<Input
							type="House"
							placeholder="10"
							label="House No"
							required={true}
							name="houseNo"
							inputType="number"
						/>
						<Input
							type="Pin"
							placeholder="SW1A 2AB"
							label="Postcode"
							required={true}
							name="postcode"
						/>
					</div>
					<Input
						type="Map"
						placeholder="Downing St."
						label="Street"
						required={true}
						name="street"
					/>
				</div>
				<div className="checkout-page__button">
					<BtnMain type="submit" text="Continue" cb={setProceed} />
					<Text
						size="two"
						text="By pressing checkout, you agree to the platform's terms and conditions"
						colour="--grey-two"
					/>
				</div>
			</form>
		</main>
	);
};

export default CheckoutPage;
