const TeachersRow = () => {
	const teachersData = [
		{
			id: 1,
			name: 'Ms. Anu Batish',
			title: 'The Indo British School, Nabha',
			phone: '98158-94419',
			img: './Anu_Batish_rounded.jpg',
		},
		{
			id: 2,
			name: 'Mr. Santosh Shukla',
			title: 'Delhi Public School, Patiala',
			phone: '90231-99901',
			img: './Santosh_Shukla_rounded.jpg',
		},
		{
			id: 3,
			name: 'Ms. Neerja Sethi',
			title: 'Sri Aurobindo International School, Patiala',
			phone: '94638-43504',
			img: './Neerja_Sethi_rounded.png',
		},
		{
			id: 4,
			name: 'Mr. Sanjeev Jain',
			title: 'Shahid Ganj Public School, Mudki, Ferozpur',
			phone: '98722-10738',
			img: './Sanjeev_Jain_rounded.jpg',
		},
		{
			id: 5,
			name: 'Ms. Indu Sharma',
			title: 'Bhupindra International Public School, Patiala',
			phone: '98148-48505',
			img: './Indu_Sharma_rounded.jpg',
		},
		{
			id: 6,
			name: 'Ms. Manjari Tejpal',
			title: 'Gems Public School, Patiala',
			phone: '99880-83999',
			img: './user_icon.webp',
		},
		{
			id: 7,
			name: 'Mr. Vivek Tiwari',
			title: 'DAV, Patiala',
			phone: 'XXXXX-XXXXX',
			img: './Vivek_Tiwari_rounded.jpg',
		},
	];

	return (
		<div className='w-full py-8 teacher-row-gradient'>
			<div className='mx-auto px-4'>
				<div className='flex flex-wrap justify-around gap-6'>
					{teachersData.map((teacher) => (
						<div
							key={teacher.id}
							className='flex flex-col items-center mb-4 w-36 md:w-40 text-white'
						>
							<div className='relative w-24 h-24 md:w-36 md:h-36 overflow-hidden rounded-full mb-3 hover:shadow-lg transition-all duration-300'>
								<img
									src={teacher.img}
									alt={teacher.name}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='space-y-1'>
								<h3 className='text-lg md:text-left text-center font-semibold w-full leading-tight'>
									{teacher.name}
								</h3>
								<p className='text-sm md:text-left text-center w-full'>
									{teacher.title}
								</p>
								<p className='text-sm md:text-left text-center w-full'>
									+91 {teacher.phone}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TeachersRow;
