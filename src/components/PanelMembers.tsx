import { panel_members } from '../data';

const PanelMembers = () => {
	return (
		<div className='w-full py-8 custom-gradient'>
			<div className='mx-auto px-4 max-w-7xl'>
				<h1 className='logo-title text-white text-4xl font-medium italic md:ml-4 mb-8'>
					Panel Members
				</h1>
				<div className='flex flex-wrap justify-around lg:flex-nowrap lg:justify-between gap-4'>
					{panel_members.map((member) => (
						<div
							key={member.id}
							className='flex flex-col items-center mb-4 w-32 sm:w-36 md:w-40 lg:w-32 xl:w-36 text-white'
						>
							<div className='relative w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 overflow-hidden rounded-full mb-2 hover:shadow-lg transition-all duration-300'>
								<img
									src={member.img}
									alt={member.name}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='space-y-1'>
								<h3 className='text-sm md:text-base text-center font-semibold w-full leading-tight'>
									{member.name}
								</h3>
								<p className='text-xs text-center w-full'>{member.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PanelMembers;
