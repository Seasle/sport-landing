const links = document.querySelectorAll('a[href^="#"]');
const dependency = document.querySelector('[data-dependency]');
const size = dependency ? dependency.getBoundingClientRect() : new DOMRect();

for (let link of links) {
	link.addEventListener('click', (event) => {
		event.preventDefault();

		let target = document.querySelector(link.getAttribute('href'));
		if (target) {
			let position = target.getBoundingClientRect();
			let { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = document.documentElement;

			if (scrollHeight > clientHeight) {
				position.y -= size.height;
			}

			if (scrollWidth > clientWidth) {
				position.x -= size.width
			}

			scrollTo({
				top: Math.round(scrollTop + position.y),
				left: Math.round(scrollLeft + position.x),
				behavior: 'smooth'
			});

		}
	});
}