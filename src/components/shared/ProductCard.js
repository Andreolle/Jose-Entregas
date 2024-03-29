import React, { useState } from 'react';

const ProductCard = ({ mode }) => {
	const [quantity, setQuantity] = useState(1);

	const updateQuantity = (type) => {
		if (type === 'add') {
			setQuantity(quantity + 1);
		} else {
			if (quantity <= 1) return quantity;
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className={`product-card product-card--${mode}`}>
			<div className="product-card__content">
				<div className="product-card__image">
					<img src="https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg" alt=""/>
				</div>
				<div className="product-card__description">
					<h4 className="product-card__title">Antarctica Original 300ml - Caixa com 12 Unidades</h4>
					<p className="product-card__price">R$ 2,20</p>
				</div>
			</div>
			<div className="product-card__actions">
				<div className="quantity">
					<div
						onClick={() => updateQuantity('remove')}
						className="quantity__minus">-</div>
					<div className="quantity__value">{quantity}</div>
					<div
						onClick={() => updateQuantity('add')}
						className="quantity__plus">+</div>
				</div>
				{
					mode === 'shelf' && (
						<div className="buy-button">
							Adicionar
						</div>
					)
				}
				{
					mode === 'cart' && (
						<a href="">Excluir</a>
					)
				}
			</div>
		</div>
)};

ProductCard.defaultProps = {
	mode: 'shelf'
};

export default ProductCard;
