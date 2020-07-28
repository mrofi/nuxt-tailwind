<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">UI Elements</h3>

    <div class="mt-4">
      <h4 class="text-gray-600">Alerts</h4>

      <div class="mt-4">
        <div
          class="rounded-md bg-white py-4 px-4 overflow-x-auto whitespace-no-wrap"
        >
          <Alert class="ml-3">This is an alert.</Alert>
          <AlertSuccess class="ml-3">This is a success alert.</AlertSuccess>
          <AlertInfo class="ml-3">This is a info alert.</AlertInfo>
          <AlertWarning class="ml-3">This is a warning alert.</AlertWarning>
          <AlertError class="ml-3">This is a error alert.</AlertError>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">Radio Buttons</h4>

      <div class="mt-4">
        <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-gray-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-red-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-orange-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-yellow-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-green-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-teal-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-blue-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-indigo-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-purple-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="radio"
              class="form-radio h-5 w-5 text-pink-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">Checkboxes</h4>

      <div class="mt-4">
        <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-gray-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-red-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-orange-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-yellow-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-green-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-teal-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-indigo-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-purple-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>

          <label class="inline-flex items-center ml-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-pink-600"
              checked
            /><span class="ml-2 text-gray-700">label</span>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">Buttons</h4>

      <div class="mt-4">
        <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
          <button
            class="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-red-600 rounded-md text-white font-medium tracking-wide hover:bg-red-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-orange-600 rounded-md text-white font-medium tracking-wide hover:bg-orange-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-yellow-600 rounded-md text-white font-medium tracking-wide hover:bg-yellow-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-green-600 rounded-md text-white font-medium tracking-wide hover:bg-green-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-teal-600 rounded-md text-white font-medium tracking-wide hover:bg-teal-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-blue-600 rounded-md text-white font-medium tracking-wide hover:bg-blue-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-purple-600 rounded-md text-white font-medium tracking-wide hover:bg-purple-500 ml-3"
          >
            Button
          </button>
          <button
            class="px-6 py-3 bg-pink-600 rounded-md text-white font-medium tracking-wide hover:bg-pink-500 ml-3"
          >
            Button
          </button>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-gray-600">Pagnations</h4>

      <div class="mt-4">
        <div class="flex rounded-md bg-white py-4 px-4 overflow-x-auto">
          <div class="flex rounded mr-4">
            <a
              href="#"
              class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-indigo-500 hover:text-white"
              ><span>Previous</span></a
            >
            <a
              href="#"
              class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-indigo-500 hover:text-white"
              ><span>1</span></a
            >
            <a
              href="#"
              class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-indigo-500 hover:text-white"
              ><span>2</span></a
            >
            <a
              href="#"
              class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-indigo-500 hover:text-white"
              ><span>3</span></a
            >
            <a
              href="#"
              class="py-2 px-3 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-indigo-500 hover:text-white"
              ><span>Next</span></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <h4 class="text-gray-600">Tabs</h4>

      <div class="mt-4">
        <div class="bg-white">
          <nav class="flex flex-col sm:flex-row">
            <button
              class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
            >
              Tab 1</button
            ><button
              class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            >
              Tab 2</button
            ><button
              class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            >
              Tab 3</button
            ><button
              class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
            >
              Tab 4
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
