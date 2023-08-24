// Banner
const banner = document.querySelector('.banner');
(function(){
    banner.innerHTML = `
    <div class="learn-more relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
    <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This project is still ongoing. You can contribute if your a developer | <a href="https://www.linkedin.com/in/nnaji-benjamin-542773182/" target="_blank">Nnaji Benjamin</a>.</div>

    <a href="https://github.com/Benjtalkshow/Navbar_Generator" target="_blank" class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-main px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring bg-indigo-800 sm:order-none sm:w-auto md:text-sm">Learn More</a>

    <!-- close button - start -->
    <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
      <button type="button" class="learn-more-btn text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div> `
})();

//print section
const printSection = document.querySelector('.printsection');
(function(){
  printSection.innerHTML = `
  <button class="printButton bg-indigo-500 text-white text-md py-3 px-8 border-none outline-none hover:bg-indigo-600">PRINT CODE</button>
<section class="view flex-col md:flex-row gap-10 mt-10">
  <div class="code-list flex flex-col gap-5">
    <button class="code-list-btn bg-gray-100 text-black text-md py-3 px-3 border-none outline-none hover:bg-gray-600 hover:text-white">HTML</button>
    <button class="code-list-btn bg-gray-100 text-black text-md py-3 px-3 border-none outline-none hover:bg-gray-600 hover:text-white">CSS</button>
    <button class="code-list-btn bg-gray-100 text-black text-md py-3 px-3 border-none outline-none hover:bg-gray-600 hover:text-white">JAVASCRIPT</button> 
  </div>
  <section class="showcode flex flex-col bg-indigo-500 w-[100%] md:w-[70%] h-auto py-5 px-5 box-border overflow-hidden">
   <div class="editor bg-black w-[100%] h-[100%] py-3 px-3 shadow-md box-border  relative shadow-md">
   <p class="editor-text html text-white">
   </p>
        <button class="copy-btn py-1 absolute top-0 right-0 px-1 bg-white text-black text-md border-none outline-none hover:bg-indigo-600 hover:text-white">Copy</button>
   </div>
   <div class="editor bg-black w-[100%] h-[100%] py-3 px-3 shadow-md box-border  relative shadow-md hidden">
   <p class="editor-text css text-white">
   </p>
    <button class="copy-btn py-1 absolute top-0 right-0 px-1 bg-white text-black text-md border-none outline-none hover:bg-indigo-600 hover:text-white">Copy</button>
</div>
<div class="editor bg-black w-[100%] h-[100%] py-3 px-3 shadow-md box-border  relative shadow-md hidden">
<p class="editor-text js text-white">
</p>
  <button class="copy-btn py-1 absolute top-0 right-0 px-1 bg-white text-black text-md border-none outline-none hover:bg-indigo-600 hover:text-white">Copy</button>
</div>
  </section>
</section>`
})()

// Site navbar
const siteNav = document.querySelector('.sitenav');
(function(){
  siteNav.innerHTML = `
  <a href="#" class="flex flex-col items-center text-indigo-500 hover:text-indigo-600">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
  Nav
</a>
<a href="#" class="flex flex-col items-center text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 20H3a2 2 0 01-2-2V6a2 2 0 012-2h18a2 2 0 012 2v12a2 2 0 01-2 2z"/>
  </svg>
  Landing
</a>
<a href="#" class="flex flex-col items-center text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
  </svg>
  Product
</a>
<a href="#" class="flex flex-col items-center text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
  </svg>
  Footer
</a>`
})();

// Footer
const footer =  document.querySelector('.footer');
(function(){
  footer.innerHTML = `
  <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
  <div class="flex flex-col items-center border-t pt-6">
    <nav class="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
      <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
    </nav>              
    <!-- social - start -->
    <div class="flex gap-4">
      <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>

      <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
    <!-- social - end -->
  </div>

  <div class="py-8 text-center text-sm text-gray-400">© 2021 - Present Flowrift. All rights reserved.</div>
</footer>`
})();