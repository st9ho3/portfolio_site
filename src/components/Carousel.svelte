<script lang="ts">
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import { onMount } from 'svelte';
  
  export let images: { src: string; alt: string; title?: string}[] = [];
  export let autoSlide: boolean = false;
  export let autoSlideInterval: number = 3000;

  let currentIndex = 0;

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  const goToSlide = (index: number) => {
    currentIndex = index;
  };

  onMount(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval);
    }
  });
</script>

<div class="relative bg-transparent w-full max-w-4xl mx-auto group">
  <div class="overflow-hidden rounded-xl shadow-lg relative aspect-video bg-gray-900">
    {#each images as image, i}
      <div 
        class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
        class:opacity-100={currentIndex === i}
        class:opacity-0={currentIndex !== i}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          class="w-full h-full object-cover"
        />
        {#if image.title}
          <div class="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white backdrop-blur-sm">
           <h3 class="text-lg font-bold">{image.title}</h3>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <button 
    on:click={prevSlide}
    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 translate-x-4 group-hover:translate-x-0"
    aria-label="Previous Slide"
  >
    <ChevronLeft />
  </button>

  <button 
    on:click={nextSlide}
    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 -translate-x-4 group-hover:translate-x-0"
    aria-label="Next Slide"
  >
    <ChevronRight />
  </button>

  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
    {#each images as _, i}
      <button
        on:click={() => goToSlide(i)}
        class="w-3 h-3 rounded-full transition-all duration-300 bg-white"
        class:opacity-100={currentIndex === i}
        class:opacity-50={currentIndex !== i}
        class:scale-125={currentIndex === i}
        aria-label={`Go to slide ${i + 1}`}
      ></button>
    {/each}
  </div>
</div>