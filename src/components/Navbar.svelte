<script>

  export let menu_open;

  let y = 0;

  $: scrolled = y > 100;

  function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }

  const handleCyclo = (e) => {
    e.preventDefault()
    let button = e.target.closest('[data-target]');
    let target = button.getAttribute('data-target');
    let offset = button.getAttribute('data-offset');
    
    window.scroll({
      left:0,
      top:findPos(document.getElementById(target))-offset, 
      behavior:'smooth'
    });

    menu_open = !menu_open
    
  }

</script>

<svelte:window bind:scrollY={y}/>



<div id="navbar" class="w-64 min-h-screen sm:w-full sm:min-h-0 sm:h-20 p-8 sm:py-3 bg-[#040e26]  mt-4 left-0 top-0 
    sm:flex sm:items-center
     ease-in-out transition-all transform duration-300
    -translate-x-full sm:translate-x-0  absolute z-50 
     {menu_open?'translate-x-0':''} {scrolled?'md:bg-transparent':'md:bg-transparent'}
    ">
  


    <div class="flex bg-white top-4 absolute sm:hidden">    
      <button on:click="{()=> menu_open = !menu_open }" class="z-50 bg-[#003845] cursor-pointer fixed right-5 w-10 h-10 text-xl ml-auto transition duration-150 hover:shadow leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none" type="button">
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-3 duration-500 { menu_open ? 'opacity-0':'' }" ></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white duration-500 { menu_open ? 'transform rotate-45':'' }"></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white duration-500 { menu_open ? 'transform -rotate-45':'' }"></span>
        <span class="block absolute w-6 h-0.5 rounded-sm bg-white bottom-2.5 duration-500 { menu_open ? 'opacity-0':'' }"></span>
      </button>
    </div>




    <div class="w-screen container mx-auto sm:flex sm:items-center sm:justify-between">
      <div class=" md:mx-10 m-0  font-medium w-fit p-0 rounded-md flex items-center justify-center">
       
        <img src="/Construction-Innovation-Hub/img/logo-white.svg" alt="logo" class=" {scrolled?'h-12':'h-16'}">
      </div>

      <nav>
        <ul class="sm:flex md:text-xs gap-2 w-full">
         
          <li on:click="{()=> menu_open = !menu_open }"  class="w-fit px-5 py-2 transform  hover:underline hover:decoration-[#fd226a] hover:decoration-2 transition duration-500 hover:scale-100" >
            <a href="/" class="md:text-white text-white  text-base  font-data ">Home</a>
          </li>
          
           
          <li on:click="{()=> menu_open = !menu_open }" class="w-fit mt-2" >
            <a href="https://forms.zohopublic.com/keralastartupmission/form/ConstructionInnovationHub/formperma/8Fk9GeVnaCuv78xHePjjzhVD_59yFvxIylusBUFjjyE" target="_blank" class=" w-fit font-data px-5 p-1 md:text-base text-sm text-white hover:bg-transparent bg-[#a21a43] border-[#a21a43] hover:text-white border-2 font-goals  ml-auto  uppercase">Apply Now</a>
          </li>
        </ul>
      </nav>
    </div>

</div>

<main class="w-full fixed bg-black z-40" >
  <div class="flex sm:hidden" >        
    <img src="/Construction-Innovation-Hub/img/logo-white.svg" alt="Logo" class="object-contain h-12 px-2">
    <button on:click="{()=> menu_open = !menu_open }" class="z-50 cursor-pointer fixed right-5 w-10 h-10 text-xl ml-auto transition duration-150 hover:shadow leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
      <span class="block absolute w-6 h-0.5 rounded-sm bg-white top-3 duration-500 { menu_open ? 'opacity-0':'' }" ></span>
      <span class="block absolute w-6 h-0.5 rounded-sm bg-white duration-500 { menu_open ? 'transform rotate-45':'' }"></span>
      <span class="block absolute w-6 h-0.5 rounded-sm bg-white duration-500 { menu_open ? 'transform -rotate-45':'' }"></span>
      <span class="block absolute w-6 h-0.5 rounded-sm bg-white bottom-2.5 duration-500 { menu_open ? 'opacity-0':'' }"></span>
    </button>
  </div>
</main>

