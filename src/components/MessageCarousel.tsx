import { Link } from 'react-router-dom';
import { Message } from '../types';

const messages: Message[] = [
	{
		id: 1,
		image: './chairman_rounded.png',
		title: "CHAIRMAN'S MESSAGE",
		name: 'Sh. Anil Bhargava',
		message: `Education and industry are two sides of the same coin—one shapes minds, the other refines them. As an industry professional, I have...`,
		link: '/chairmans-message',
		designation: 'Chairman, Managing Committee',
		location: 'Thapar Polytechnic College, Patiala',
	},
	{
		id: 2,
		image: './vice_chairman_rounded.png',
		title: "VICE CHAIRMAN'S MESSAGE",
		name: 'Dr. Gurbinder Singh',
		message: `Education today is not just about imparting knowledge; it is about equipping students with the skills and...`,
		link: '/vice-chairmans-message',
		designation: 'Vice Chairman, Managing Committee TPC',
		location: 'Registrar, TIET, Director LMTSM',
	},
	{
		id: 3,
		image: './coordinator_rounded.png',
		title: "COORDINATOR'S MESSAGE",
		name: 'Dr. Dwarika Nath Ratha',
		message: `Education is the cornerstone of progress, and as leaders in academia, we must constantly adapt to ensure our students are prepared...`,
		link: '/coordinators-message',
		designation: 'Professor, Civil Engineering, TIET',
		location: 'Coordinator, Thapar Polytechnic College',
	},
	{
		id: 4,
		image: './principal_rounded.png',
		title: "PRINCIPAL'S MESSAGE",
		name: 'Dr. Ankush Kansal',
		message: `Education stands at a transformative juncture where traditional
      methods must evolve to meet the ever-changing demands of the
      modern world...`,
		link: '/principals-message',
		designation: 'Principal, Thapar Polytechnic College',
		location: 'Patiala, Punjab',
	},
];

const MessageCard: React.FC<{ data: Message }> = ({ data }) => (
	<div className='p-3 w-full md:w-1/2 lg:w-1/4'>
		<div className='flex flex-col items-start bg-white shadow rounded-2xl p-4 h-full'>
			<img
				src={data.image}
				className='w-full max-h-40 object-contain mx-auto'
				alt={`${data.title}'s Image`}
			/>
			<div className='w-full flex flex-col flex-grow'>
				<p className='playfair font-semibold text-xl my-2 text-center'>
					{data.title}
				</p>
				<p className='font-light text-slate-600 text-justify'>{data.message}</p>
				<Link to={data.link} className='inline-block mt-2 text-red-600'>
					Read More
				</Link>

				{/* Spacer div to push the footer to the bottom */}
				<div className='flex-grow'></div>

				<div className='mt-6'>
					<span className='text-slate-600 font-light'>Warm regards,</span>
					<br />
					<span className='text-xl font-semibold text-red-600'>
						{data.name}
					</span>
					<br />
					<span className='font-light mt-1'>
						{data.designation}
						<br />
						{data.location}
					</span>
				</div>
			</div>
		</div>
	</div>
);

const MessageCards = () => {
	return (
		<div
			className='px-4 py-14'
			style={{
				background: 'url(./red_bg.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='container mx-auto max-w-7xl'>
				<div className='flex flex-wrap justify-center'>
					{messages.map((msg, i) => (
						<MessageCard key={i} data={msg} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MessageCards;
