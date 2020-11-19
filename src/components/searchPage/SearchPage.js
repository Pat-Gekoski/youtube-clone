import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../channelRow/ChannelRow';
import VideoRow from '../videoRow/VideoRow';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />

			<ChannelRow
				image='https://yt3.ggpht.com/ytc/AAUvwnjUiAn9eQXhuSu93QR603h0yDYl0wSxK1H5WqldAA=s88-c-k-c0x00ffffff-no-rj'
				channel='The Survival'
				verified
				subs='1.82M'
				noOfVideos={64}
				description="Watch the two dudes build the coolest shit you've ever seen! This is nothing short of impressive!"
			/>
			<hr />

			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
			<VideoRow
				views='23K'
				subs='1.82M'
				description='Build The Most Tunnel Underground Swimming Pool'
				timestamp='4 days ago'
				channel='The Survival'
				title='Build The Most Tunnel Underground Swimming Pool'
				image='http://i3.ytimg.com/vi/gnag04ZAnf8/hqdefault.jpg'
			/>
		</div>
	);
}

export default SearchPage;
