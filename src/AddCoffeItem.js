import React from "react";

class AddCoffeItem extends React.Component {

	createFish = (event) => {
		console.log("**MAKING A FISH**");
		event.preventDefault();

		const fish = {
			name: this.refs.nameRef.value,
			status: this.refs.statusRef.value,
			image: '/images/capucchino.png'
		}

		console.log(this.refs.nameRef.value);
		console.log(fish);

		this.props.addCoffe(fish);

		event.currentTarget.reset();
	};

	render() {
		return (
			<div>
				<h3>Add new coffe item</h3>
				<form onSubmit={this.createFish}>
					<input name="name" ref="nameRef"  type="text" placeholder="Name"  />
					<select name="status" ref="statusRef" type="text" placeholder="Status" >
						<option value="available">Available</option>
						<option value="unavailable">Unavailable</option>
					</select>
					<button type="submit">+ Add Coffe To Order</button>
				</form>
				</div>
		);
	}
}

export default AddCoffeItem;