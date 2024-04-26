<script lang="ts">
  import Header from "$lib/Header.svelte";
  import { Button, Label, Input, Textarea, Toast } from "flowbite-svelte";
  import { PaperPlaneOutline  } from 'flowbite-svelte-icons';

  import Footer from "$lib/Footer.svelte";

  let status = ""

</script>
<main class="min-h-screen p-0">
  
  <Header />
  
  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto lg:py-10">
      <div class="flex flex-col justify-center">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl dark:text-white text-center"
        >
          Vær klædt godt på teknologisk, og tag din virksomhed skridtet tættere på
          en bedre fremtid.
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center pt-5"
        >
          Udfyld kontakt formularen her under, og få et godt tilbud.
        </p>
      </div>
    </div>
  </section>
  
  <form
    class="container flex flex-col space-y-6 w-[375px] md:w-[800px] px-5 mx-auto mt-16 mb-[4.7rem]"
    action="#" method="POST" on:submit={()=> {status = "Din E-mail er blevet sendt."}}
  >
  {#if status === "Din E-mail er blevet sendt."}
    <Toast class="w-[75%] mx-auto absolute bottom-10 left-10" dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
      <PaperPlaneOutline class="w-5 h-5 text-primary-600 dark:text-primary-500 rotate-45" />
      <div class="ps-4 text-sm font-normal">{status}</div>
    </Toast>
    {/if}
    <Label class="space-y-2">
      <span class="text-black">E-mail</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span class="text-black">CVR nr.</span>
      <Input type="number" name="number" placeholder="12345678" required />
    </Label>
    <Label class="space-y-2">
      <span class="text-black">Tlf nr.</span>
      <Input type="number" name="tlf" placeholder="Indtast tlf nr" required />
    </Label>
    <Label class="space-y-2">
      <span class="text-black">Hvad er dit ønske?</span>
      <Textarea
        id="textarea-id"
        placeholder="Din besked..."
        rows="9"
        name="message"
        required
      />
    </Label>
    <Button type="submit" class="w-full1">Send</Button>
  </form>
  
  <Footer/>
</main>
<!-- DOM -->