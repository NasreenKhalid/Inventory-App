import React, { Component } from "react";

//Form component which is used as EDIT_ITEM_FORM as well as CREATE_ITEM_FORM
export default class Form extends Component {
  constructor(props) {
    super(props);

    //initializing state
    this.state = {
      name: !this.props.name ? "" : this.props.name,
      price: !this.props.price ? "" : this.props.price,
      price: !this.props.qty ? "" : this.props.qty,
      price: !this.props.qtysold ? "" : this.props.qtysold,
      price: !this.props.pricesold ? "" : this.props.pricesold,
      dateadded: !this.props.dateadded ? "" : this.props.dateadded
    };
  }

  //funtion that upadtes state on input change
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //function that sends the final data when user presses Submit
  handleSubmit = () => {
    const { name, price, qty, qtysold, pricesold, dateadded } = this.state;
    if (
      this.props.name &&
      this.props.price &&
      this.props.qty &&
      this.props.qtysold &&
      this.props.pricesold &&
      this.props.dateadded
    ) {
      this.props.updateItem({
        name,
        price,
        qty,
        qtysold,
        pricesold,
        dateadded
      });
    } else {
      this.props.addItem({ name, price, qty, qtysold, pricesold, dateadded });
    }
  };

  //calls parent function to close form
  handleCancel = () => this.props.closeForm();

  render() {
    return (
      <form className="menu-row">
        <div className="menu-item-name">
          <input
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="menu-item-price">
          <input
            value={this.state.price}
            onChange={this.handleChange}
            name="price"
            placeholder="Purchase price"
            type="text"
          />
        </div>
        <div className="menu-item-qty">
          <input
            value={this.state.qty}
            onChange={this.handleChange}
            name="qty"
            placeholder="Purchase_Qty"
            type="text"
          />
        </div>
        <div className="menu-item-qtysold">
          <input
            value={this.state.qtysold}
            onChange={this.handleChange}
            name="qtysold"
            placeholder="Qty sold"
            type="text"
          />
        </div>
        <div className="menu-item-pricesold">
          <input
            value={this.state.pricesold}
            onChange={this.handleChange}
            name="pricesold"
            placeholder="Price sold"
            type="text"
          />
        </div>
        <div className="menu-item-dateadded">
          <input
            value={this.state.dateadded}
            onChange={this.handleChange}
            name="dateadded"
            placeholder="00/00/0000"
            type="text"
          />
        </div>
        <div className="operations">
          <span onClick={this.handleSubmit} className="btn done">
            <i className="fas fa-check" />
          </span>
          <span onClick={this.handleCancel} className="btn cancel">
            <i className="fas fa-times" />
          </span>
        </div>
      </form>
    );
  }
}
