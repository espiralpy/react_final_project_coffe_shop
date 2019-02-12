import React from "react";
import styled from "styled-components";

const Button = styled.form`
	.button {
	  background-color: #4CAF50; 
	  border: none;
	  color: white;
	  padding: 16px 32px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 13px;
	  margin: 4px 2px;
	  -webkit-transition-duration: 0.4s; 
	  transition-duration: 0.4s;
	  cursor: pointer;
	}
	
	.button-gray:hover {
	  background-color: white;
	  color: black;
	  border: 2px solid #555555;
	}

	.default-gray {
	  background-color: #555555;
	  color: white;
	}

	input[type=text], select {
	  width: 400px;
	  padding: 12px 20px;
	  margin: 8px 30px 0px 30px;
	  display: inline-block;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  box-sizing: border-box;
	}
`;

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

					<Button>
					<input name="name" ref="nameRef"  type="text" placeholder="Coffe name.."  />
					<select name="status" ref="statusRef" type="text" placeholder="Status" >
						<option value="available">Available</option>
						<option value="unavailable">Unavailable</option>
					</select>
						<button  className="button default-gray" type="submit">+ Add Coffe To Order</button>
					</Button>
				</form>
				</div>
		);
	}
}

export default AddCoffeItem;