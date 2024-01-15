<script>
	// @ts-nocheck
	import { spring } from 'svelte/motion';

	export let coords = { x: 100, y: 100 };
	let initialTouch = { x: 0, y: 0 };

	let pos = spring(coords, {
		stiffness: 0.3,
		damping: 0.8
	});

	let moving = false;

	const onDown = (e) => {
		e.preventDefault();
		moving = true;
		if (e.type === 'touchstart') {
			const touch = e.touches[0];
			initialTouch.x = touch.clientX;
			initialTouch.y = touch.clientY;
		}
	};

	const onMove = (e) => {
		if (!moving) return;

		let deltaX, deltaY;

		if (e.type === 'mousemove') {
			deltaX = e.movementX;
			deltaY = e.movementY;
		} else {
			// 'touchmove'
			const touch = e.touches[0];
			deltaX = touch.clientX - initialTouch.x;
			deltaY = touch.clientY - initialTouch.y;

			initialTouch.x = touch.clientX;
			initialTouch.y = touch.clientY;
		}

		coords.x += deltaX;
		coords.y += deltaY;
		pos.set(coords);
	};

	const onUp = () => (moving = false);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mousedown={onDown}
	on:touchstart={onDown}
	style="left: {$pos.x}px; top: {$pos.y}px;"
	class="draggable {moving && 'pickedup'}"
>
	<slot />
</div>

<svelte:window on:mouseup={onUp} on:mousemove={onMove} on:touchend={onUp} on:touchmove={onMove} />

<style>
	.draggable {
		user-select: none;
		cursor: grab;
		position: absolute;
	}

	.pickedup {
		cursor: grabbing;
	}

	div > :global(.card)::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		z-index: -1;

		border-radius: 5px;

		box-shadow: 0 0 0 0 rgba(0, 0, 0);
		transition: box-shadow 0.1s ease-in-out;
	}

	.pickedup > :global(.card)::after {
		box-shadow: 4px 6px 14px -3px #000000;
	}
</style>
