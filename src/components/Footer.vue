<template>
  <footer class="bg-gray-50 dark:bg-true-gray-800 border-b-8 border-primary-600 dark:border-true-gray-700">
    <div class="wrapper mx-auto mt-24 px-5">
      <div class="md:py-5">
        <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
          <div class="logo flex items-center">
            <div class="text-sm text-gray-700 dark:text-gray-200 mx-1 mt-5 text-center sm:text-left sm:mt-0">
              <p class="font-bold">© 2021 Michael Thomas</p>
              <p>
                Built with <Icon inline icon="noto:red-heart" /> and
                <Link
                  aria-label="michaelt.xyz"
                  blank
                  class="text-sm underline text-gray-700 dark:text-gray-200"
                  href="https://github.com/michaelhthomas/michaelhthomas.github.io"
                >
                  available on Github
                </Link>
              </p>
            </div>
          </div>


          <div>
            <Social/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>