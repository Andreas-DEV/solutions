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
  } from "flowbite-svelte";
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

    <NavHamburger />
  </div>
  <NavUl {activeUrl} class="order-1">
    <NavLi href="/">Home</NavLi>

    <NavLi href="/cases">Cases</NavLi>
    <NavLi href="/systemer">Systemer</NavLi>
    <NavLi href="/kontakt">Kontakt</NavLi>
  </NavUl>
</Navbar>
