---
aside: false
---

<style>
	.example{
		border: 1px solid #f5f5f5;
		border-radius: 5px;
		padding:20px
	}
	.el-button {
		margin:10px 5px
	}
	
	details > summary:first-of-type {
		/* font-size: 10px; */
		padding-top: 10px;
		cursor: pointer;
		color: #1989fa;
	}
</style>

<Demo />

<details>
<summary>展开查看</summary>

::: code-group
<<< ./demo/index.vue
:::
</details>

<script setup>
import Demo from './demo/index.vue'
</script>