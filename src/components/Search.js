import React from 'react';
import MapPinIcon from './svg/map-pin';

const SearchInput = () => (
	<div className="search">
		<div className="search__input">
			<div className="icon">
				<MapPinIcon />
			</div>
			<input
				placeholder="Insera seu endereço para ver preço"
				className="input"
				type="text"
			/>
		</div>
		<div className="search__results">
		</div>
	</div>
);

export default SearchInput;
