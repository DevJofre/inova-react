import React, { useState } from "react";
import "./ProductPage.scss";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    // Lógica para adicionar ao carrinho
    console.log("Produto adicionado ao carrinho!");
  };

  return (
    <div className="product-page">
      <div className="product-main">
        <div className="product-image">
          <img
            src="https://via.placeholder.com/500"
            alt="Nome do Produto"
          />
        </div>
        <div className="product-details">
          <h1 className="product-title">Nome do Produto</h1>
          <p className="product-description">
            Esta é uma breve descrição do produto. Ele tem várias características incríveis e é perfeito para suas necessidades.
          </p>
          <div className="product-price">$99.99</div>
          <div className="product-quantity">
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <div className="product-info-reviews">
        <div className="product-additional-info">
          <h2>Informações Adicionais</h2>
          <ul>
            <li><strong>Marca:</strong> Nome da Marca</li>
            <li><strong>Peso:</strong> 500g</li>
            <li><strong>Modelo:</strong> Modelo XYZ</li>
            <li><strong>Descrição:</strong> Detalhes adicionais sobre o produto e suas características.</li>
          </ul>
        </div>
        <div className="product-reviews">
          <h2>Avaliações</h2>
          <div className="review">
            <p><strong>João:</strong> Excelente produto, super recomendo!</p>
            <p><strong>Data:</strong> 20/08/2024</p>
          </div>
          <div className="review">
            <p><strong>Maria:</strong> Muito bom, mas o preço poderia ser um pouco mais baixo.</p>
            <p><strong>Data:</strong> 18/08/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
