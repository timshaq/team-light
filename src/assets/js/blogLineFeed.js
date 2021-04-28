export default function () {

	const blogLineFeed = document.getElementById('blogLineFeed');
	if(!blogLineFeed) return;

	const newsBlogLineTab = document.getElementById('newsBlogLineTab');
	const articlesBlogLineTab = document.getElementById('articlesBlogLineTab');
	const reviewsBlogLineTab = document.getElementById('reviewsBlogLineTab');
	const btnsList = [newsBlogLineTab,articlesBlogLineTab,reviewsBlogLineTab];

	const feedsNL = blogLineFeed.querySelectorAll('.feed__list');
	const feedsList = Array.prototype.slice.call(feedsNL);

	function feedsRemoveActiveClass() {
		feedsList.forEach( feed => feed.classList.remove('active') )
	}
	function feedAddActiveClass(feed) {
		feed.classList.add('active')
	}

	function btnsRemoveActiveClass() {
		btnsList.forEach( feed => feed.classList.remove('active') )
	}
	function btnAddActiveClass(feed) {
		feed.classList.add('active')
	}

	btnsList.forEach((btn, index) => {
		btn.addEventListener('click', function() {
			let curFeed = feedsList[index];
			if( !curFeed.classList.contains('active') ) {
				btnsRemoveActiveClass();
				btnAddActiveClass(btn);

				feedsRemoveActiveClass();
				feedAddActiveClass(curFeed)
			}
		})
	})

}