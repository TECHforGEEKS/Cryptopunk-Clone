import React from 'react';
import CollectionCard from './CollectionCard.jsx';
import './PunkList.css';

const PunkList = ({ punkListData, setSelectedPunk }) => {
	return (
		<div className="punkList">
			{punkListData.map((punk) => {
				return (
					<div
						onClick={() => {
							setSelectedPunk(punk.token_id);
						}}
					>
						<CollectionCard
							key={punk.token_id}
							id={punk.token_id}
							name={punk.name}
							traits={punk.traits}
							image={punk.image_original_url}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default PunkList;
