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

<main>
    <section>
        <a href="https://dansksuperrally.dk" target="_blank">
            <img src={dsrSnapshot} alt="Dansk Super Rally">
        </a>
        <div>

            <h2 >DSR <a href="https://dansksuperrally.dk" target="_blank">Dansksuperrally.dk</a></h2>
            <p>DSR-hjemmesiden holder sig opdateret på alt det seneste, <br> med overblik over løb, resultater og nyheder i rally verdenen.</p>
        </div>
    </section>
    <section>
        <div>
            <h2>Knapsmindefonden <a href="https://dansksuperrally.dk" target="_blank">Knapsmindefonden.dk</a></h2>
            <p>Knapsmindefonden' hjemmesiden er en one page side, dedikeret <br> til at fortælle om Knapsmindefonden' arbejde, og de initiativer de støtter.</p>

        </div>
        <a href="https://knapsmindefonden.dk/" target="_blank">
            <img src={kmfSnapshot} alt="Knapsmindefonden">
        </a>
    </section>
</main>



<Footer/>

