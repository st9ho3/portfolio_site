<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { useTranslation } from "../i18n/helpers";
  import { getText } from '../lib';

  export let direction: 'right' | 'left'
  export let language 
  export let title

  const t = useTranslation(language)
  gsap.registerPlugin(ScrollTrigger);

  let objectRef: HTMLHeadElement;

  onMount(() => {
    
    gsap.fromTo(objectRef, 
      { 
        x: `${direction === 'left' ? '100vh' : '-150vh'}`, 
        opacity: 0 
      },
      {
        x: '0', 
        opacity: 1,
        scrollTrigger: {
          trigger: objectRef,
          start: "top bottom", 
          end: "center center", 
          scrub: true,         
        }
      }
    );
  });
</script>

<div class="container h-full flex justify-center items-center overflow-hidden w-full">
  <h1 bind:this={objectRef} class={getText('title')}>{t(title)}</h1>
</div>
