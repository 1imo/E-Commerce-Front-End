document.addEventListener("DOMContentLoaded", function () {
	const productImgGrid = document.querySelector(".product-img__grid");

	if (productImgGrid) {
		let isDown = false;
		let startX: number;
		let scrollLeft = 0;
		let scrollTimer: ReturnType<typeof setTimeout> | null = null;

		productImgGrid.addEventListener("mousedown", (e: Event) => {
			const mouseEvent = e as MouseEvent;
			isDown = true;
			productImgGrid.classList.add("active");
			startX =
				mouseEvent.pageX - (productImgGrid as HTMLElement).offsetLeft;
			scrollLeft = productImgGrid.scrollLeft;
		});

		productImgGrid.addEventListener("mouseleave", () => {
			isDown = false;
			productImgGrid.classList.remove("active");
		});

		productImgGrid.addEventListener("mouseup", () => {
			isDown = false;
			productImgGrid.classList.remove("active");
		});

		productImgGrid.addEventListener("mousemove", (e: Event) => {
			const mouseEvent = e as MouseEvent;
			if (!isDown) return;
			e.preventDefault();
			const x =
				mouseEvent.pageX - (productImgGrid as HTMLElement).offsetLeft;
			const walk = (x - startX) * 2;
			productImgGrid.scrollLeft = scrollLeft - walk;
		});

		// Snap to the nearest item when scrolling ends
		productImgGrid.addEventListener("scroll", () => {
			if (scrollTimer) {
				clearTimeout(scrollTimer);
			}
			productImgGrid.classList.add("scrolling");
			scrollTimer = setTimeout(() => {
				productImgGrid.classList.remove("scrolling");
				snapToNearestItem();
			}, 100);
		});

		function snapToNearestItem() {
			if (productImgGrid) {
				const scrollPosition = productImgGrid.scrollLeft;
				const itemWidth =
					(
						productImgGrid.querySelector(
							".product-img__grid > *"
						) as HTMLElement
					).offsetWidth || 0;
				const nearestItemIndex = Math.round(scrollPosition / itemWidth);
				const nearestScrollPosition = nearestItemIndex * itemWidth;
				productImgGrid.scrollTo({
					left: nearestScrollPosition,
					behavior: "smooth",
				});
			}
		}
	}
});
