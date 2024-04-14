import { useEffect, useState } from "react";

export const useDesktopScroll = (
	ref: React.RefObject<HTMLElement>,
	axis: "x" | "y"
) => {
	const [isDown, setIsDown] = useState(false);
	const [startPos, setStartPos] = useState(0);
	const [scrollPos, setScrollPos] = useState(0);

	useEffect(() => {
		snapToNearestItem();
	}, []);

	const getItemSize = () => {
		const firstChild = ref.current?.querySelector(".product-img__lrg");
		const firstChildAsHTMLElement = firstChild as HTMLElement;
		return axis === "x"
			? firstChildAsHTMLElement?.offsetWidth || 0
			: firstChildAsHTMLElement?.offsetHeight || 0;
	};

	const snapToNearestItem = () => {
		const itemSize = getItemSize();
		if (itemSize) {
			const nearestItemIndex = Math.round(scrollPos / itemSize);
			const nearestScrollPosition = nearestItemIndex * itemSize;
			ref.current?.scrollTo({
				[axis === "x" ? "left" : "top"]: nearestScrollPosition,
				behavior: "smooth",
			});
		}
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
		setIsDown(true);
		setStartPos(axis === "x" ? e.pageX : e.pageY); // Fixed typo
		e.preventDefault();
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (!isDown) return;
		const movePos = axis === "x" ? e.pageX - startPos : e.pageY - startPos;
		const newScrollPos = scrollPos - movePos;
		setScrollPos(newScrollPos);
	};

	const handleMouseUp = () => {
		setIsDown(false);
		snapToNearestItem();
	};

	return {
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	};
};
