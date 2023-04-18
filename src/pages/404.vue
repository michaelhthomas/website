<template>
  <Layout>
    <div class="wrapper-small text-center">
      <h1
        class="border-true-gray-500 border-10 my-10 block rounded-full border-dotted p-10 text-8xl font-black text-red-500"
      >
        404
      </h1>
      <h2 class="mb-2 text-4xl font-bold">Page Not Found</h2>
      <h3 class="mb-10 text-xl">
        The page you think should be here, isn't here.
      </h3>

      <g-link
        to="/"
        class="bg-primary-500 text-md hover:bg-primary-800 mx-auto block max-w-max rounded-md px-4 py-3 font-semibold text-white transition-colors"
      >
        Back to Home
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>
