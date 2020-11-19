import React from 'react';
import './RecommendedVideos.css';
import VideoCard from '../videoCard/VideoCard';

function RecommendedVideos() {
	return (
		<div className='recommendedVideos'>
			<h2>Recommended </h2>
			<div className='recommendedVideos__videos'>
				<VideoCard
					title='The Religious Qualities of Celebrity, Pop Culture'
					views='127,267 views'
					timestamp='Nov 17, 2020'
					channelImage={
						'https://yt3.ggpht.com/ytc/AAUvwnhcaqhF-VWw3wkCftFl07dRP2KMvATn5KHyAOsw=s48-c-k-c0xffffffff-no-rj-mo'
					}
					channel='JRE Clips'
					image={'http://i3.ytimg.com/vi/d9LlFB4Tx-Y/hqdefault.jpg'}
				/>
				<VideoCard
					title='Trump Files ANOTHER Suit Blocking Michigan Results, Media Finally Realizes Trump Can STILL Win This'
					views='727,964 views'
					timestamp='Nov 11, 2020'
					channelImage={
						'https://yt3.ggpht.com/ytc/AAUvwnimy6HbvT2I3cuXnpiLJBu2axdJ4hFrAnPbGOJTZA=s48-c-k-c0xffffffff-no-rj-mo'
					}
					channel='Tim Pool'
					image={'http://i3.ytimg.com/vi/IsHmSuv_mUQ/hqdefault.jpg'}
				/>
				<VideoCard
					title='Mike Tyson: My belts are garbage'
					views='8,446,527 views'
					timestamp='May 29, 2011'
					channelImage={
						'https://yt3.ggpht.com/a/AATXAJwkmMYyaUTdcJnt16irL3_Wha_gD_6aHjj4DLnEKw=s48-c-k-c0xffffffff-no-rj-mo'
					}
					channel='CBS'
					image={'http://i3.ytimg.com/vi/pgcHBcQRlpw/hqdefault.jpg'}
				/>
				<VideoCard
					title='A Powerful Secret to Unlocking Your Potential | Jordan Peterson'
					views='6,531 views'
					timestamp='Jan 10, 2019'
					channelImage={
						'https://yt3.ggpht.com/a/AATXAJzseIHP_zdC86HNcrE82z8CnXm3XJq-bdK3n1f1=s48-c-k-c0xffffffff-no-rj-mo'
					}
					channel='Thought Feeder'
					image={'http://i3.ytimg.com/vi/FU1Po6qH7O8/hqdefault.jpg'}
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos;
