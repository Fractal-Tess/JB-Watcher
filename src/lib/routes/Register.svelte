<script lang="ts">
  let a = 1;
</script>

<h1>{a}</h1>

<button
  on:click={() => {
    a++;
  }}
>
  Add to a</button
>
