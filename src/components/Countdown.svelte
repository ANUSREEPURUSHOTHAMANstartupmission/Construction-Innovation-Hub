<script>
	import {onMount} from 'svelte';

	export let date;

	let countDate = new Date(date).getTime();
	let interval = null;

	let dayText = 0, hourText = 0, minText = 0, secText = 0;

	onMount(() => {
		interval = setInterval(moveTimer, 1000)
	})

	function moveTimer(){
		const now = new Date().getTime();
		const gap = countDate - now;

		const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

		if(gap < 0){
      clearInterval(interval);
			return;
    }

		const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / minute);
    const textSec = Math.floor((gap % minute) / second);

		dayText = textDay.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    hourText = textHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    minText = textMin.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    secText = textSec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	}

</script>

<div class="flex  flex-row z-40 bottom-0 absolute  font-data">
	<div class="counter  text-white shadow font-thin font-goals md:text-4xl px-1 py-8  text-2xl  flex flex-col items-center justify-center">
		{dayText}
		<div class="text-sm font-light font-data ">Days</div>
	</div>
	<div class=" counter text-white shadow  font-thin font-goals md:text-4xl px-1 py-8  text-2xl  flex flex-col items-center justify-center">
		{hourText}
		<div class="text-sm font-light font-data">Hours</div>
	</div>
	<div class="counter  text-white shadow font-thin  font-goals md:text-4xl px-1 py-8  text-2xl  flex flex-col items-center justify-center">
		{minText}
		<div class="text-sm font-light font-data">Mins</div>
	</div>
	<div class="counter  text-white shadow  font-thin font-goals md:text-4xl px-1 py-8  text-2xl  flex flex-col items-center justify-center">
		{secText}
		<div class="text-sm font-light font-data">Secs</div>
	</div>
</div>

<style lang="scss">
	.counter{
		margin: .5rem;
	}
</style>