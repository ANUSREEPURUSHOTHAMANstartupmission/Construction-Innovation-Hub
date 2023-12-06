<script>
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import {Autoplay, Navigation} from 'swiper';
  import 'swiper/css';
  import "swiper/css/navigation";
  import programs from './data/programs.json';
  
</script>
<div class="px-16 mt-8">
<Swiper
	modules="{[Autoplay, Navigation]}"
	spaceBetween={50}
	slidesPerView={1}
	centeredSlides={true}
	loop={true}
	navigation={true}
	autoplay={{
		delay: 6000,
		disableOnInteraction: false,
	}}
	breakpoints={{
		"768": {
		  slidesPerView: 3,
		  spaceBetween: 30,
		},
		"1300": {
		  slidesPerView: 4,
		  spaceBetween: 20,
		},
	}}
>
	{#each programs as program}
		<SwiperSlide>
			<div class="card who bg-cover bg-no-repeat h-72 bg-center" style="background-image: url('/img/{program.image}');">
			<!-- <div class="content" >{program.title}</div> -->
			 
			<div class="content text-white w-full p-0">
				<h3 class=" text-xl font-data font-medium">{program.title}</h3>
				<p class="justify-center font-data text-base ">
					{program.content}
				</p>
			</div>
		</div>
		</SwiperSlide>
	{/each}
</Swiper>
</div>

<style lang="scss">
	 .who{
    position: relative;
    width: 100%;
    overflow: hidden;

    &:hover{
      &::after{
        top: 0;
      }

      .content{
        top: 0;
        h3{
          text-align: center;
        }
        p{
          display: block;
        }
      }
    }

    .content{
      position: absolute;
      top: 78%;
      z-index: 2;
      padding: 15px 10px;
      transition: all 500ms ease;
      
      h3{
       
        font-weight: bold;
        margin-bottom: .5rem;
      }

      p{
        
        font-weight: 300;
        line-height: 2rem;
        display: none;
        transition: all 500ms ease;
        text-align: center;
        margin-bottom: .5rem;
      }
    }

    &::after{
      position: absolute;
      content: '';
      left: 0;
      top: 78%;
      border: 15px;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      background: rgba(0, 0, 0, 0.8);
      z-index: 1;
      transition: all 500ms ease
    }
  }
	
</style>
