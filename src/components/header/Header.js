import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
	const [inputSearch, setInputSearch] = useState('');
	return (
		<div className='header'>
			<div className='header__left'>
				<MenuIcon />
				<Link to='/'>
					<img
						className='header__logo'
						src='https://neilpatel.com/wp-content/uploads/2015/09/youtube.png'
						alt=''
					/>
				</Link>
			</div>

			<div className='header__input'>
				<input
					value={inputSearch}
					type='text'
					placeholder='Search'
					onChange={(e) => setInputSearch(e.target.value)}
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className='header__inputButton' />
				</Link>
			</div>

			<div className='header__icons'>
				<VideoCallIcon className='header__icon' />
				<AppsIcon className='header__icon' />
				<NotificationsIcon className='header__icon' />
				<Avatar
					src='https://lh3.googleusercontent.com/ogw/ADGmqu-u0I6Q1XkbjwC8THHCVQszfaZ6RCMVMtSitKzrIg=s83-c-mo'
					alt='My Profile Pic'
				/>
			</div>
		</div>
	);
}

export default Header;
