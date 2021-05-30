import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    products: [],
  };

  create = (id, name, price) =>
    this.setState({
      products: [...this.state.products, { id: id, name: name, price: price }],
    });

  update = (targetId, name, price) =>
    this.setState({
      products: this.state.products.map((product) =>
        product.id !== targetId
          ? product
          : {
              id: targetId,
              name: name,
              price: price,
            }
      ),
    });

  delete = (targetId) =>
    this.setState({
      products: this.state.products.filter(({ id }) => id !== targetId),
    });

  render() {
    const { products } = this.state;
    return (
      <table className="products">
        <thead>
          <tr>
            <th className="products__th">#</th>
            <th className="products__th">Название</th>
            <th className="products__th">Цена</th>
            <th className="products__th">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, price }) => (
            <tr key={id}>
              <td className="products__td">{id}</td>
              <td className="products__td">{name}</td>
              <td className="products__td">{price}</td>
              <td className="products__td">
                <button
                  className="products__btn"
                  onClick={() => this.delete(id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  componentDidMount() {
    this.setState({
      products: [
        { id: 1, name: "Товар 1", price: 1000 },
        { id: 2, name: "Товар 2", price: 2000 },
        { id: 3, name: "Товар 3", price: 3000 },
        { id: 4, name: "Товар 4", price: 4000 },
        { id: 5, name: "Товар 5", price: 5000 },
      ],
    });
  }
}

export default App;
