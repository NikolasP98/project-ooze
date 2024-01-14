<script>
import Draggable from "$lib/draggable.svelte"

const draggableItems = [
    { title: 'Drag me', pos: {x: 200, y:300} },
    { title: 'Move me', pos: {x: 300, y:300}  },
    { title: 'Touch me', pos: {x: 400, y:300}  },
  ];
</script>






<h1>Project OOZE</h1>
<p>Visit to read the documentation</p>

{#each draggableItems as item}
  <Draggable pos={item.pos}>
    {item.title}
  </Draggable>
{/each}


<canvas></canvas>

<style>
	h1 {
		font-size: 50px;
	}

	canvas {
		position: absolute;
		top: 0;
		
		width: 100%;
		height: 100%;
		
		z-index: -1;

		background-color: beige;

	}
</style>