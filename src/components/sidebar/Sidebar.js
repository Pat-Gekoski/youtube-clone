import React from 'react';
import './Sidebar.css';
import SidebarRow from '../sidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcion from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUbAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow selected title='Home' Icon={HomeIcon} />
			<SidebarRow title='Trending' Icon={WhatshotIcon} />
			<SidebarRow title='Subscriptions' Icon={SubscriptionIcion} />
			<hr />
			<SidebarRow title='Library' Icon={VideoLibraryIcon} />
			<SidebarRow title='History' Icon={HistoryIcon} />
			<SidebarRow title='Your Videos' Icon={OnDemandVideoIcon} />
			<SidebarRow title='Watch Later' Icon={WatchLaterIcon} />
			<SidebarRow title='Liked Videos' Icon={ThumbUbAltOutlinedIcon} />
			<SidebarRow title='Show More' Icon={ExpandMoreOutlinedIcon} />
			<hr />
		</div>
	);
}

export default Sidebar;
