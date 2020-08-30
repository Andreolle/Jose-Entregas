import React, { useState, useEffect } from 'react';
import MapPinIcon from '../svg/map-pin';
import SearchIcon from '../svg/search';
import searchImage from '../../assets/images/product-not-found.png';
import addressImage from '../../assets/images/not-found.png';

const SearchInput = (props) => {
	const { type } = props;
	const [searchTerm, setSearchTerm] = useState(null);
	const [results, setResults] = useState(null);
	const [config, setConfig] = useState({ icon: {}, notFound: {} });
	const { icon, notFound } = config;

	const typeHandle = (searchType) => {
		const types = {
			products: {
				icon: {
					image: <MapPinIcon/>,
				},
				notFound: {
					image: searchImage,
					maxWidth: '100px',
					alt: 'Uma lupa sobre a garrafa de cerveja que sumiu',
					message: 'Putz, não conseguimos encontrar o produto'
				}
			},
			address: {
				icon: {
					image: <SearchIcon/>,
				},
				notFound: {
					image: addressImage,
					maxWidth: '160px',
					alt: 'Uma luneta em cima de um mapa',
					message: 'Ops! Não encontramos seu endereço...'
				}
			}
		};

		setConfig(types[searchType]);
	};

	useEffect(() => {
    typeHandle(type);
	}, []);

	return (
		<div className="search">
			<div className="search__input">
				<div className="icon">
					{icon.image}
				</div>
				<input
					placeholder="Insera seu endereço para ver preço"
					className="input"
					type="text"
				/>
			</div>
			<div className="search__results">
				{
					results ? (
						<div className="results">
							Results
						</div>
					) : (
						<div className="not-found">
							<img
								src={notFound.image}
								alt={notFound.alt}
								style={{maxWidth: notFound.maxWidth}}
							/>
							<p>{notFound.message} <strong>{searchTerm}</strong></p>
						</div>
					)
				}
			</div>
		</div>
	)
};

SearchInput.defaultProps = {
	type: 'products'
};

export default SearchInput;
