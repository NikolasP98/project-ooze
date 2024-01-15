<script>
	import '../app.css';
</script>

<header>
	<a href="/">main</a>
	<a href="/posts">POSTS</a>
	<a href="projects">PROJECTS</a>
</header>

<main>
	<slot />
</main>

<style>
	/* * {
		box-sizing: border-box;
	} */
	header {
		width: 100%;
		height: 40px;
		padding-inline: 50px;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 20px;

		color: white;
		background-color: gray;
	}

	header > p {
		background-color: red;
	}

	main {
		padding-inline: 20px;
	}
</style>
