import React, { useState } from 'react';
import './CartPage.scss';
import { FaTrash } from 'react-icons/fa';  // Importando o ícone de delete

const CartPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Produto 1',
      price: 59.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 79.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    },
    // Adicione mais itens conforme necessário
  ]);

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Carrinho de Compras</h1>
      
      {/* Cabeçalho da Tabela */}
      <div className="cart-header">
        <div className="header-product">Produtos</div>
        <div className="header-quantity">Quantidade</div>
        <div className="header-price">Preço</div>
        <div className="header-subtotal">Subtotal</div>
      </div>

      <div className="cart-items">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="cart-item">
              <button
                className="delete-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                <FaTrash />
              </button>
              <div className="cart-item-product">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                </div>
              </div>
              <div className="cart-item-quantity">
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
              </div>
              <div className="cart-item-price">
                <p>R${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-total">
                <p>R${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart-message">Não há itens no carrinho.</p>
        )}
      </div>

      {items.length > 0 && (
        <div className="cart-summary">
          <h2>Resumo do Pedido</h2>
          <p>Total: R${totalPrice.toFixed(2)}</p>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
