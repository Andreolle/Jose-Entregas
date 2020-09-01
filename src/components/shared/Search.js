import React, { useState, useEffect } from 'react';
import MapPinIcon from '../svg/map-pin';
import SearchIcon from '../svg/search';
import ArrowBack from '../svg/arrow-back';
import searchImage from '../../assets/images/product-not-found.png';
import addressImage from '../../assets/images/not-found.png';
import GeoCodeAPI from '../../services/geocode';

const SearchInput = (props) => {
	const { type, placeholder } = props;
	const [searchTerm, setSearchTerm] = useState('');
	const [isActive, setActive] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [results, setResults] = useState([]);
	const [timer, setTimer] = useState(null);
	const [config, setConfig] = useState({ icon: {}, notFound: {} });
	const { icon, notFound } = config;

	const typeHandle = (searchType) => {
		const types = {
			products: {
				icon: {
					image: <SearchIcon/>,
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
					image: <MapPinIcon/>,
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

	const backHandle = () => {
		setActive(false);
		setSearchTerm('');
	};

	const fetchAddress = async (value) => {
		const coordenates = await GeoCodeAPI(value);
		const { results } = coordenates;
		const modeledResults = [];

		results.map(
			(
				{
					formatted_address: address,
					geometry: { location }
				}
			) => {
			const obj = {
				address,
				location,
			}
			modeledResults.push(obj);
		})

		setResults(modeledResults);
	};

	const searchHandle = (term) => {
		const { value } = term;
		clearTimeout(timer);

		setTimer(
			setTimeout(() => {
				if (value.length !== 0) {
					if (type === 'address') {
						fetchAddress(value)
					};

					setActive(true);
				} else {
					setActive(false)
				}
			}, 700)
		);

		setSearchTerm(value);
	};

	useEffect(() => {
    typeHandle(type);
	}, []);

	return (
		<div className="search">
			<div className="search__input">
				<div className="icon">
					{ isActive
						? (<ArrowBack onClick={() => backHandle()} className="back" />)
						: icon.image
					}
				</div>
				<input
					onChange={({ target }) => searchHandle(target)}
					placeholder={placeholder}
					value={searchTerm}
					className="input"
					type="text"
				/>
			</div>

			{
				searchTerm.length !== 0 && (
					<div className={isActive ? 'search__results active' : 'search__results'}>
						{
							results.length !== 0 ? (
								<div className="results">
									{
										results.map(({ address }, i) => {
											return (
												<p key={i}>{address}</p>
											)
										})
									}
								</div>
							) : (
								<div className="not-found">
									<img
										src={notFound.image}
										alt={notFound.alt}
										style={{maxWidth: notFound.maxWidth}}
									/>
									<p>{notFound.message}
										<strong>
										{
											type !== 'address' && searchTerm
										}
										</strong>
									</p>
								</div>
							)
						}
					</div>
				)
			}

		</div>
	)
};

SearchInput.defaultProps = {
	type: 'products',
	placeholder: '',
};

export default SearchInput;
