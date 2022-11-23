import logo from '../../assets/images/icon_256.png';

const GoogleLoginButton = () => {
	return (
		<button className='flex items-center gap-4 drop-shadow px-8 py-4 bg-red-500 text-slate-50 rounded-xl hover:bg-red-600'>
			<img src={logo} alt='SubTube' className='w-8' />
			<span>Login with YouTube</span>
		</button>
	);
};

export default GoogleLoginButton;
