<script>
import Card from "$lib/components/Card.svelte"
// import Toolbar from "$lib/components/Toolbar.svelte"

import Draggable from "$lib/modifiers/Draggable.svelte"

const draggableItems = [
    { title: 'Drag me'},
	{ title: 'Move me'},
    { title: 'Touch me' },
  ];

const spawnLocation = {x: 800, y:300}
</script>

<!-- <Toolbar/> -->

<h1>Project OOZE</h1>
<p>Visit to read the documentation</p>

{#each draggableItems as item}
  <Draggable coords={{x:100, y:200}}>
    {item.title}
  </Draggable>
{/each}

{#each draggableItems as item}
  <Draggable coords={{x:100, y:100}}>
	<Card title={item.title}/>
  </Draggable>
{/each}





<Draggable coords={spawnLocation}>
	<svg>
		<circle cx={20} cy={20} r={20} />
	</svg>
</Draggable>
  


<canvas></canvas>

<style>

svg {
		width: 40px;
		height: 40px;
		margin: -8px;
	}
	circle {
		fill: #ff3e00;
	}
	h1 {
		font-size: 50px;
	}

	canvas {
		position: absolute;
		top: 0;
		
		width: 100%;
		height: 100%;
		
		z-index: -100;

		background-color: beige;

	}
</style>