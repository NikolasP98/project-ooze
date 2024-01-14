<script >
	export let pos = {x: 100, y:100}

	
	let moving = false;
	
	const  onMouseDown=()=> {
		moving = true;
	}
	
	const onMouseMove = (e) => {
		if (moving) {
			pos.x += e.movementX;
			pos.y += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
	
	// 	$: console.log(moving);
</script>



<style>
	.draggable {
		user-select: none;
		cursor:grab;
		border: solid 1px gray;
		position: absolute;
	}
	
</style>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mousedown={onMouseDown} style="left: {pos.x}px; top: {pos.y}px;" class="draggable">
		<slot></slot>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />