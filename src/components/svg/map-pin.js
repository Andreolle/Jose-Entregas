import React from 'react';

const MapPinIcon = (props) => {
	const { fill, width, className } = props;
	return (
		<svg viewBox="0 0 24 24" width={width} role="presentation" className={className}>
			<path fill={fill} d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"></path>
		</svg>
	)
};

MapPinIcon.defaultProps = {
	fill: '#666',
	width: '30px',
	className: 'svg-icon',
}

export default MapPinIcon;
