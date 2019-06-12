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

	index < elements.length - 1 ? index++ : index = 0;
};

setInterval(changeImage, 5000);