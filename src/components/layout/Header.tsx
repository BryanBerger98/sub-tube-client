import logo from '../../assets/images/icon_256.png';

const Header = () => {
	return (
		<nav className='drop-shadow h-12 bg-slate-100 w-100 flex items-center gap-2 px-2'>
			<div className='w-10'>
				<img src={logo} alt='SubTube' className='w-100' />
			</div>
			<h1 className='text-red-500 font-semibold text-xl m-0'>SubTube</h1>
		</nav>
	);
};

export default Header;
