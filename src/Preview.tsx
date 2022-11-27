import { createSignal, createEffect } from "solid-js";
import { Show } from "solid-js";

import couchImage from "./assets/couch-unsplash-phillip-goldsberry.jpg";
import michelleImg from "./assets/michelle-appleton.jpg";

const shareIcon = (
  <svg
    class="fill-slate-700"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z" />
  </svg>
);

const facebookIcon = (
  <svg
    class="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
  </svg>
);

const twitterIcon = (
  <svg
    class="fill-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="24"
    height="24"
  >
    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
  </svg>
);

const Preview = (props: { width: number }) => {
  const [showElement, toggleShowElement] = createSignal(false);
  const [desktop, setDesktop] = createSignal(props.width >= 768);

  function showShareElement() {
    toggleShowElement(!showElement());
  }

  createEffect(() => {
    setDesktop(props.width >= 768);
  });

  return (
    <>
      <section class="flex md:flex-row flex-col bg-white max-w-screen-md md:m-0 m-3 md:rounded rounded-lg shadow-lg md:overflow-visible overflow-hidden">
        <img
          src={couchImage}
          alt="furniture picture"
          class="w-100 md:w-5/12 object-cover"
        />
        <div class="md:w-7/12 flex flex-col justify-center gap-4 p-6 px-8">
          <h2 class="text-2xl font-semibold p-0 m-0">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p class="text-sm text-slate-600">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <Show when={desktop()}>
            <div class="flex items-center h-12 relative gap-4">
              <img
                src={michelleImg}
                alt="Michelle Appleton Picture"
                class="w-auto rounded-full object-cover h-full"
              />
              <div class="flex flex-col flex-grow">
                <h4 class="font-semibold">Michelle Appleton</h4>
                <p class="text-slate-400">28 Jun 2022</p>
              </div>
              <button
                class="bg-blue-100 p-1 rounded-full"
                onClick={showShareElement}
              >
                {shareIcon}
              </button>
              <Show when={showElement()}>
                <div
                  class="absolute origin-bottom bottom-14 -right-[74px] animate-[fade-in_ease-in_75ms_1_forwards] flex gap-2
                  bg-gray-600 py-2 px-8 rounded after:content-[''] after:absolute after:inset-0 after:w-6 after:h-6 
                  after:top-6 after:left-1/2 after:-translate-x-1/2 after:bg-inherit after:rotate-45 after:-z-10"
                >
                  <p class="text-white font-bold tracking-widest uppercase">
                    Share
                  </p>
                  <a href="#">{facebookIcon}</a>
                  <a href="#">{twitterIcon}</a>
                </div>
              </Show>
            </div>
          </Show>
        </div>
        <Show when={!desktop()}>
          <Show
            when={showElement()}
            fallback={
              <div class="flex items-center h-20 relative gap-4 px-8 py-4">
                <img
                  src={michelleImg}
                  alt="Michelle Appleton Picture"
                  class="w-auto rounded-full object-cover h-full"
                />
                <div class="flex flex-col flex-grow">
                  <h4 class="font-semibold">Michelle Appleton</h4>
                  <p class="text-slate-400">28 Jun 2022</p>
                </div>
                <button
                  class="bg-blue-100 p-1 rounded-full"
                  onClick={showShareElement}
                >
                  {shareIcon}
                </button>
              </div>
            }
          >
            <div class="flex items-center justify-end h-20 relative gap-12 bg-slate-800 px-8 py-4">
              <a href="#">{facebookIcon}</a>
              <a href="#">{twitterIcon}</a>
              <button
                class="bg-blue-100 p-1 rounded-full"
                onClick={showShareElement}
              >
                {shareIcon}
              </button>
            </div>
          </Show>
        </Show>
      </section>
    </>
  );
};

export default Preview;
