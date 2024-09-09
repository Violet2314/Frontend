const tabItem = document.querySelectorAll(".tab-item");
const tabItemNow = document.querySelectorAll("#tab-content-item")

function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`.${this.id}-content`);
	// Add show class
    this.style.color = '#fff';
	tabContentItem.classList.add('shownow');
}

function removeBorder() {
	tabItem.forEach(item => {
		item.classList.remove('tab-border');
        item.style.color = '#ffffff98';
	});
}

function removeShow() {
	tabItemNow.forEach(item => {
		item.classList.remove('shownow');
	});
}

tabItem.forEach(item => {
    item.addEventListener('click',selectItem);
})