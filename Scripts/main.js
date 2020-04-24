const elements = document.querySelectorAll('.hero-background');
let currentIndex = 1;

const changeImage = () => {
	elements.forEach(function (element, index) {
		let styleMap = element.attributeStyleMap;
		if (currentIndex === index) {
			styleMap.set('opacity', 1);
		} else {
			styleMap.set('opacity', 0);
		}
	});

	currentIndex < elements.length - 1 ? currentIndex++ : currentIndex = 0;
};

setInterval(changeImage, 5000);
