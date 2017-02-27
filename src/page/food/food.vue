<template>
	<div>
		{{selectedFood.label}}
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			msg: 123
		}
	},
	computed: mapGetters([
		'selectedFood'
	])
}
</script>