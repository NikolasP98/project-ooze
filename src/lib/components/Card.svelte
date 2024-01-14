<script>
	export let title = "Title"
	export let moving = false

</script>


<div class="card {moving && 'pickedup'}">
	<p>test window</p>
	<h3>{title}</h3>
	
	<img draggable="false" src="https://picsum.photos/100" alt="">
	
	<slot/>

</div>

<style>
.card {
	padding: 5px;
	border-radius: 5px;
	
	background-color: red;
}



img {
	user-select: none;

}

p, h3 {
	margin: 0;
	font-family: 'Courier New', Courier, monospace;
}

p {
	font-size: 8px;

	letter-spacing: 3px;
}
</style>