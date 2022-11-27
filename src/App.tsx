import type { Component } from 'solid-js';
import { createSignal } from "solid-js";
import Preview from './Preview';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [screenWidth, setScreenWidth] = createSignal(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <main class="grid place-content-center min-h-screen bg-blue-50">
      <Preview width={screenWidth()} />
    </main>
  );
};

export default App;
