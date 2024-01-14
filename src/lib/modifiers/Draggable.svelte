<script >
// @ts-nocheck
	import { spring } from 'svelte/motion';
	export let coords = {x: 100, y:100};
	
	let pos = spring(
		coords,
		{
			stiffness: 0.3,
			damping: 0.8
		}
	)

		
	let moving = false;
		
	const  onMouseDown=()=> {
		moving = true;
	}
	

	const onMouseMove = (e) => {
		if (moving) {
			coords.x += e.movementX
			coords.y += e.movementY
			
			pos.set(coords)
		}
	}
	
	const onMouseUp = () => {
		moving = false;
	}

</script>



<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousedown={onMouseDown} style="left: {$pos.x}px; top: {$pos.y}px;" class="draggable {moving && 'pickedup'}">
	<slot/>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />



<style>
	.draggable {
		user-select: none;
		cursor:grab;
		position: absolute;
	}
	
	.pickedup {
		cursor: grabbing;
		/* transform: scale(1.02); */

		transition: transform 0.1s ease-in-out;
	}

	div > :global(.card)::after {
		content: '';
		position: absolute;
		top:0;
		left:0;

		width: 100%;
		height: 100%;

		z-index: -1;

		border-radius: 5px;
		
		box-shadow: 0 0 0 0 rgba(0,0,0);
		transition: box-shadow 0.1s ease-in-out;
		
	}
	
	.pickedup > :global(.card)::after {
		box-shadow: 4px 6px 14px -3px #000000;
	}

</style>