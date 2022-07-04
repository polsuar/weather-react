import React from 'react'

function TopButtons() {

	const cities = [
		{
			id: 1,
			name: 'Buenos Aires'
		},
		{
			id: 2,
			name: 'Berlin'
		},
		{
			id: 3,
			name: 'London'
		},
		{
			id: 4,
			name: 'Paris'
		},
		{
			id: 5,
			name: 'Rome'
		}
	]
	return (
		<div className="flex items-center justify-around my-6">
			{cities.map(city => (
				<button key={city.id} className="text-white text-lg font-medium">{city.name}</button>
			))
			}
		</div>
	)
}

export default TopButtons