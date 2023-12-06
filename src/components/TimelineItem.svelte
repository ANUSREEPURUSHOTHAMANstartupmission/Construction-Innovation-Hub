<script>
  export let date;
  export let title;
</script>

<li class="mb-10 ml-6 relative ">
  <div class="absolute w-4 h-4 bg-white border-4 border-blue-900 rounded-full -left-[2.1rem] mt-2"></div>
  <p class="absolute md:-left-[18rem] md:w-[15rem] md:text-right p-0 m-0 md:font-bold -top-4 md:top-0">{date}</p>
  <p class="font-bold text-lg mb-1 pt-3 md:pt-0">{title}</p>
</li>