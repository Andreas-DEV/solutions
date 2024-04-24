<script lang="ts">
  import "../app.css";
  import logo from "$lib/assets/Logo-dansk-hvid.png";
  import { page } from "$app/stores";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
    Modal,
    Label,
    Input,
    Checkbox,
    Textarea,
  } from "flowbite-svelte";
  let formModal = false;
  $: activeUrl = $page.url.pathname;

</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src={logo} class="w-[125px]" alt="Greenbech Solutions Logo" />
  </NavBrand>
  <div class="flex md:order-2">
    <a href="/kontakt">
      <Button>Søg hjælp</Button>
    </a>

    <!-- <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
      <form class="flex flex-col space-y-6" action="#">
        <h3 class="text-center mx-3 mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Bed os om et tilbud
        </h3>
        <Label class="space-y-2">
          <span>Email</span>
          <Input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
          />
        </Label>
        <Label class="space-y-2">
          <span>CVR nr.</span>
          <Input
            type="number"
            name="number"
            placeholder="12345678"
            required
          />
        </Label>
        <Label class="space-y-2">
          <Label for="textarea-id" class="mb-2">Hvad er dit ønske?</Label>
          <Textarea
            id="textarea-id"
            placeholder="Din besked..."
            rows="4"
            name="message"
            required
          />
        </Label>
        <Button type="submit" class="w-full1">Send</Button>
       
      </form>
    </Modal> -->

    <NavHamburger />
  </div>
  <NavUl {activeUrl} class="order-1">
    <NavLi href="/">Home</NavLi>

    <NavLi href="/cases">Cases</NavLi>
    <NavLi href="/kontakt">Kontakt</NavLi>
  </NavUl>
</Navbar>
