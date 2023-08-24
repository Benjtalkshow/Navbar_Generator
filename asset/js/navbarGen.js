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


//slider container 
const slideContainer = document.querySelector('.slider-container');
(function(){
  slideContainer.innerHTML = `
  <div class="slide w-[50%] h-5 relative py-10">
  <input type="range" min="1" max="100" value="1" class="slider w-full h-5 bg-indigo-700" id="myRange">
  <div class="output mt-2"><span id="demo">1px</span></div>
</div>
<div class="slide w-[50%] h-5 relative py-10">
  <input type="range" min="1" max="100" value="1" class="slider w-full h-5 bg-indigo-700" id="myRange">
  <div class="output mt-2"><span id="demo">1px</span></div>
</div>
<div class="slide w-[50%] h-5 relative py-10">
  <input type="range" min="1" max="100" value="1" class="slider w-full h-5 bg-indigo-700" id="myRange">
  <div class="output mt-2"><span id="demo">1px</span></div>
</div>`
})()

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
