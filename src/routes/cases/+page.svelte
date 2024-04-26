<!-- LOGIC -->
<script lang="ts">
    import "../../app.css"
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";

    import dsrSnapshot from "$lib/assets/DSR-snapshot.png"
    import kmfSnapshot from "$lib/assets/KMF-snapshot.png"
    import codeBg from "$lib/assets/codebg.png"

    
</script>

<!-- DOM -->
<Header/>
<section class="bg-center bg-no-repeat bg-[url('$lib/assets/codebg.png')] bg-cover bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Udforsk vores cases for et bedre overblik</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 text-sm lg:px-48 ">Her i Grønbech Solutions tager vi stor stolthed i, at kunne vise vores tidligere cases frem, til fremtidige kunder, så vi kan hjælpe jer med at få et overblik over, hvor vores evner ligger henne, i forhold til det du selv gerne vil opnå med din hjemmeside.</p>
        
    </div>
</section>

<main class="flex gap-14 md:gap-28 flex-col p-10">
    
    <section class="flex flex-col md:flex-row w-full gap-10 md:gap-15 justify-center items-center">
        <a href="https://dansksuperrally.dk" target="_blank">
            <img class="w-[250px] md:w-[375px] rounded-lg border border-black hover:drop-shadow-md" src={dsrSnapshot} alt="Dansk Super Rally">
        </a>
        <div>

            <h2 class="text-lg">DSR <a class="text-sm link hover:underline text-[blue]" href="https://dansksuperrally.dk" target="_blank">Dansksuperrally.dk</a></h2>
            <p class="text-sm md:text-lg">DSR-hjemmesiden holder sig opdateret på alt det seneste, <br> med overblik over løb, resultater og nyheder i rally verdenen.</p>
        </div>
    </section>

    <section class="flex flex-col-reverse md:flex-row w-full gap-10 md:gap-5 justify-center items-center">
        <div>
            
            <h2 class="text-lg">Knapsmindefonden <a class="text-sm link hover:underline text-[blue]" href="https://knapsmindefonden.dk/" target="_blank">Knapsmindefonden.dk</a></h2>
            <p class="text-sm md:text-lg">Knapsmindefonden' hjemmesiden er en one page side, dedikeret <br> til at fortælle om Knapsmindefonden' arbejde, og de initiativer de støtter.</p>
        </div>
        <a href="https://knapsmindefonden.dk/" target="_blank">
            <img class="w-[250px] md:w-[375px] rounded-lg border border-black hover:drop-shadow-md" src={kmfSnapshot} alt="Knapsmindefonden">
        </a>
    </section>
</main>



<Footer/>

