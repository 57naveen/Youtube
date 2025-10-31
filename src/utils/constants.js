
const Google_API_KEY = "AIzaSyD0HGhVKjmX8_9PgkrRBK3VFkE2EfD0poc"

export const  YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key="+ Google_API_KEY

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVECHATCOUNT = 20

export const YOUTUBE_SEARCH_RESULTS_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&key=" + Google_API_KEY + "&q=";
