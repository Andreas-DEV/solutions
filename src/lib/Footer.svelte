<script lang="ts">
import logo from "$lib/assets/Logo-dansk-sort.png"
import tp from "$lib/assets/Trustpilot_logo.png"
</script>

<!-- ========== FOOTER ========== -->
<footer class="py-10 flex justify-center w-full bg-transparent">
  <!-- Grid -->
  <div class="text-center">
    <div>
      <a class="flex-none text-xl font-semibold text-black" href="/" aria-label="Brand"><img id="logo" src={logo} alt=""></a>
    </div>
    <!-- End Col -->

    <div class="">
      <p class="text-gray-500">We're part of the <a class="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">OfficeBoost</a> family.</p>
      <p class="text-gray-500">© 2024 Grønbech Solutions. All rights reserved.</p>
    </div>

  </div>
  <!-- End Grid -->
</footer>
<!-- ========== END FOOTER ========== -->

<style>

#footer {
  background-color: #333;
}

#logo {
  width: 250px;
  padding-left: 5.1rem;
}

#tp {
  width: 100px;
  margin-left: 7rem;
}

</style>