<script lang="ts">
import logo from "$lib/assets/Logo-dansk-sort.png"
import tp from "$lib/assets/Trustpilot_logo.png"
</script>

<!-- ========== FOOTER ========== -->
<footer class="footer py-10 flex justify-center w-full bg-transparent">
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
<!-- 
    <div class="trustpilot-widget" data-locale="da-DK" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="53286038000064000578694c" data-style-height="24px" data-style-width="100%" data-theme="light" data-min-review-count="10" data-style-alignment="center">
      <a href="https://dk.trustpilot.com/review/www.officeboost.dk" target="_blank" rel="noopener">Trustpilot</a>
    </div> -->
    <!-- End Social Brands -->
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