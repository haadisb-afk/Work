const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const filters = document.querySelectorAll('.filter');
const destinationCards = document.querySelectorAll('.destination-card');
const saveButtons = document.querySelectorAll('.save-button');
const savedCount = document.querySelector('.saved-count');
const toast = document.querySelector('.toast');
const newsletterForm = document.querySelector('.newsletter-form');
const formStatus = document.querySelector('.form-status');

let savedPlaces = [];

function showToast(message) {
	toast.textContent = message;
	toast.classList.add('show');
	window.setTimeout(() => toast.classList.remove('show'), 2400);
}

menuToggle.addEventListener('click', () => {
	const isOpen = mainNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		mainNav.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
	});
});

filters.forEach((filter) => {
	filter.addEventListener('click', () => {
		filters.forEach((item) => item.classList.remove('active'));
		filter.classList.add('active');
		const category = filter.dataset.filter;
		destinationCards.forEach((card) => {
			card.hidden = category !== 'all' && !card.dataset.category.includes(category);
		});
	});
});

saveButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const place = button.dataset.place;
		const isSaved = savedPlaces.includes(place);
		savedPlaces = isSaved ? savedPlaces.filter((item) => item !== place) : [...savedPlaces, place];
		button.classList.toggle('saved', !isSaved);
		button.textContent = isSaved ? '♡' : '♥';
		savedCount.textContent = savedPlaces.length;
		showToast(isSaved ? `${place} removed from saved places` : `${place} saved for later`);
	});
});

newsletterForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = document.querySelector('#email').value.trim();
	formStatus.textContent = `You're on the list. See you in your inbox, ${email}.`;
	newsletterForm.reset();
});
