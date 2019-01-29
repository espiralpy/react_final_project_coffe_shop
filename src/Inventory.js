import React from "react";
import AddCoffeItem from "./AddCoffeItem";

class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<AddCoffeItem addCoffe={this.props.addCoffe} deleteCoffe={this.props.deleteCoffe}/>
				<h3>Load coffe database</h3>
				<button onClick={this.props.loadSampleCoffes}>Load Menu</button>
				<h3>Clear coffe database</h3>
				<button onClick={this.props.clearDatas}>Clear All Menu</button>
			</div>
		);
	}
}

export default Inventory;