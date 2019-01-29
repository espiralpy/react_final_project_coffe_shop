import React from "react";

class Order extends React.Component {
	delete = (event, props) => {
		const context = this,
			keyValue = context.refs.deleteButtonRef.name;

		context.props.order[keyValue] = null;

		context.setState(context.props.order);
	};

	renderOrder = key => {
		const fish = this.props.products[key];
		const count = this.props.order[key];

		return <li key={key}>{count} {fish.name} {this.renderDeleteButton(key, this.props)}</li>;
	};

	renderDeleteButton = (value) => {
		return <button type="submit" ref="deleteButtonRef" name={value} onClick={this.delete}>Delete This Order </button>;
	};


	render() {
		const orderIds = Object.keys(this.props.order);

		return (
			<div>
				<h3>Selected Coffes</h3>
				<ul>
					{orderIds.map(this.renderOrder)}
				</ul>
			</div>
		);
	}
}

export default Order;