<script lang="ts">
  import { Router } from 'svelte-routing';

  import Header from './components/Header/Header.layout.svelte';
</script>

<main>
  <Router>
    <Header />
  </Router>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    font-family: 'Source Code Pro', monospace;
  }
</style>
