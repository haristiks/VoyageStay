"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

function EmptyState({
  title = "No exact matches",
  subtitle = "Try changing or removig some of your filters",
  showReset,
}) {
  const router = useRouter();
  return (
    <div className="h-[60-vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      
      
      <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto animate-pulse">
        <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>
</section>







      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
}

export default EmptyState;
