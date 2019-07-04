import React, { FC } from "react";

export type Piggy = {
  color?: string;
  size?: string | number;
};

export const Piggy: FC<Piggy> = ({ color = "#FFF", size = "100%" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 106"
    width={size}
    fill={color}
  >
    <path d="M22.98 30.62c.4 0 .8-.3.8-.8v-13.1c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v13.2c.1.4.4.7.8.7zM22.98 39.16c.4 0 .8-.3.8-.8V34.1c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v4.27c.1.5.4.8.8.8zM119.63 30.32l-1.81-1.79a.8.8 0 0 0-1.1 0c-.31.3-.31.8 0 1.1l1.8 1.78c.1.1.3.2.51.2.2 0 .4-.1.5-.2.4-.3.4-.8.1-1.1zM123.77 34.39a.8.8 0 0 0-1.11 0c-.3.3-.3.8 0 1.1l1.81 1.78c.1.1.3.2.5.2s.41-.1.51-.2c.3-.3.3-.8 0-1.1l-1.71-1.78zM118.53 34.39l-1.82 1.79c-.3.3-.3.8 0 1.09.1.1.3.2.5.2s.4-.1.51-.2l1.81-1.79c.3-.3.3-.8 0-1.09-.2-.3-.7-.3-1 0zM125.58 28.53a.8.8 0 0 0-1.1 0l-1.82 1.79c-.3.3-.3.8 0 1.09.1.1.3.2.5.2s.4-.1.5-.2l1.82-1.79c.4-.3.4-.8.1-1.09zM106.33 94.68a.8.8 0 0 0-1.1 0c-.31.3-.31.8 0 1.09l1.8 1.79c.1.1.3.2.51.2.2 0 .4-.1.5-.2.3-.3.3-.8 0-1.1l-1.7-1.78zM112.28 100.54a.8.8 0 0 0-1.11 0c-.3.3-.3.8 0 1.09l1.81 1.79c.1.1.3.2.5.2s.41-.1.51-.2c.3-.3.3-.8 0-1.1l-1.71-1.78zM107.14 100.54l-1.82 1.79c-.3.3-.3.79 0 1.09.1.1.3.2.5.2s.41-.1.51-.2l1.81-1.79c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM113.08 94.68l-1.81 1.79c-.3.3-.3.79 0 1.09.1.1.3.2.5.2s.4-.1.5-.2l1.82-1.79c.3-.3.3-.8 0-1.1-.2-.3-.7-.3-1 0zM32.76 3.1c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.8 0-1.09L31.95.22a.8.8 0 0 0-1.1 0c-.31.3-.31.8 0 1.1l1.9 1.78zM38.7 8.96c.1.1.3.2.5.2s.4-.1.51-.2c.3-.3.3-.8 0-1.09L37.9 6.08a.8.8 0 0 0-1.11 0c-.3.3-.3.8 0 1.1l1.91 1.78zM31.45 9.16c.2 0 .4-.1.5-.2l1.81-1.78c.3-.3.3-.8 0-1.1a.8.8 0 0 0-1.1 0l-1.82 1.8c-.3.29-.3.79 0 1.08.2.1.4.2.6.2zM37.4 3.3c.2 0 .4-.1.5-.2l1.81-1.78c.3-.3.3-.8 0-1.1a.8.8 0 0 0-1.1 0l-1.82 1.8c-.3.29-.3.79 0 1.08.2.1.4.2.6.2zM100.59 21.28a3.9 3.9 0 0 0 3.93-3.87 3.82 3.82 0 0 0-3.93-3.78 3.89 3.89 0 0 0-3.93 3.78 3.97 3.97 0 0 0 3.93 3.87zm0-6.16c1.3 0 2.31 1.1 2.31 2.29 0 1.29-1.1 2.28-2.31 2.28a2.33 2.33 0 0 1-2.32-2.28 2.4 2.4 0 0 1 2.32-2.29zM35.88 98.25c-2.12 0-3.93 1.7-3.93 3.88s1.71 3.87 3.93 3.87c2.12 0 3.83-1.69 3.83-3.87s-1.71-3.88-3.83-3.88zm0 6.16a2.33 2.33 0 0 1-2.32-2.28c0-1.3 1.11-2.29 2.32-2.29 1.31 0 2.32 1.1 2.32 2.29 0 1.29-1 2.28-2.32 2.28zM124.17 76.1c-2.12 0-3.83 1.7-3.83 3.88a3.83 3.83 0 1 0 7.66 0 3.82 3.82 0 0 0-3.83-3.88zm0 6.16c-1.31 0-2.32-1.09-2.32-2.28s1.11-2.29 2.32-2.29c1.31 0 2.32 1.1 2.32 2.29s-1.11 2.28-2.32 2.28zM102.3 2.9h14.51c.4 0 .8-.3.8-.79s-.3-.8-.8-.8H102.3c-.4 0-.8.3-.8.8s.4.8.8.8zM121.55 2.9h4.64c.4 0 .8-.3.8-.79s-.3-.8-.8-.8h-4.64c-.4 0-.8.3-.8.8s.4.8.8.8zM127 7.08c0-.4-.31-.8-.81-.8H116.1c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h10.08c.4-.1.8-.4.8-.8zM108.55 6.28c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h3.22c.4 0 .81-.3.81-.8 0-.4-.3-.8-.8-.8h-3.23zM24.7 95.97H10.17c-.4 0-.8.3-.8.8 0 .39.3.79.8.79h14.51c.4 0 .8-.3.8-.8-.1-.4-.4-.8-.8-.8zM5.44 95.97H.81c-.4 0-.81.3-.81.8 0 .39.3.79.8.79h4.64c.4 0 .8-.3.8-.8 0-.4-.4-.8-.8-.8zM.8 92.6H10.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H.8c-.4 0-.81.3-.81.8s.3.8.8.8zM18.44 92.6c.4 0 .81-.3.81-.8 0-.4-.3-.8-.8-.8h-3.23c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h3.22zM120.94 65.38V54.95c0-.4-.3-.8-.8-.8h-7.66c-1.41 0-2.82-.79-3.93-2.38a31.56 31.56 0 0 0-9.37-11.52l.7-10.33c0-.3-.1-.5-.3-.7-.2-.1-.5-.2-.8-.1l-12.1 5.97h-.4c-1.72-.3-3.43-.5-5.15-.5h-1.3a17.14 17.14 0 0 0 6.85-13.6c0-9.44-7.76-17.1-17.34-17.1-9.57 0-17.33 7.66-17.33 17.1 0 5.35 2.62 10.42 6.85 13.6h-2.42c-1.3 0-2.52.1-3.83.3l-.7-.3-12.4-5.86c-.2-.1-.5-.1-.8.1-.2.2-.31.4-.31.7l.7 10.22c-1.5 1-2.92 2.19-4.23 3.48-5.44 5.36-8.67 10.73-8.67 22.25v.99a11.94 11.94 0 0 1-15.42 6.36 6.87 6.87 0 0 1-4.03-3.98 6.7 6.7 0 0 1 0-5.56 4.88 4.88 0 0 1 2.42-2.48c1.11-.5 2.32-.5 3.53 0a2.7 2.7 0 0 1 1.51 3.48c-.2.4 0 .79.4.99.4.2.81 0 1.01-.4.4-1 .4-2.18 0-3.18-.4-.99-1.2-1.78-2.32-2.18a6.11 6.11 0 0 0-7.96 3.28c-.8 2.08-.8 4.46.1 6.65a8.7 8.7 0 0 0 4.84 4.77 13.45 13.45 0 0 0 16.23-4.97 29.3 29.3 0 0 0 23.58 24.83v6.85c0 1.1.9 2.09 2.12 2.09h33.96c1.11 0 2.12-.9 2.12-2.09v-6.95a28.77 28.77 0 0 0 14.21-7.84 28.37 28.37 0 0 0 7.36-11.92c.1-.3.1-.5.2-.7 1.51-4.47 4.23-7.15 7.16-7.15h3.02c.4-.2.7-.6.7-1zm-67.42-44.4c0-8.64 7.15-15.6 15.82-15.6a15.61 15.61 0 0 1 15.83 15.6c0 5.66-3.13 10.83-8.07 13.6H61.58a15.46 15.46 0 0 1-8.06-13.6zm65.91 43.7h-2.21c-3.63 0-6.96 3.18-8.57 8.25-.1.2-.2.5-.2.7a27.12 27.12 0 0 1-6.96 11.31 27.78 27.78 0 0 1-19.85 8.15c-.4 0-.8.3-.8.8s.3.79.8.79h5.14v6.25c0 .3-.3.6-.6.6H52.2c-.3 0-.6-.3-.6-.6v-6.25h4.23c.4 0 .8-.3.8-.8s-.3-.8-.8-.8c-15.42 0-28.02-12.4-28.02-27.6 0-11.03 3.02-16.1 8.26-21.26 1.01-1 2.12-1.88 3.23-2.78l.2 2.68c0 .4.4.7.8.7s.71-.4.71-.8l-.9-13.3 11.28 5.36.9.3c.1 0 .21.1.41 0 1.21-.2 2.52-.3 3.83-.3h24.6c1.6 0 3.32.2 4.93.5l.6.1c.1 0 .31 0 .41-.1l11.19-5.37-.9 13.31c0 .4.3.8.7.8h.1c.4 0 .7-.3.8-.7l.2-2.48a28.46 28.46 0 0 1 6.86 7.84c.1.3.3.6.4.9.1.2.1.3.2.5.2.4.5.89.8 1.28 1.42 2 3.23 2.98 5.25 2.98h6.95v9.04z" />
    <path d="M95.45 48.99c-.4-.1-.81.1-.91.5-.1.4.1.8.5.89.1 0 2.93.8 3.93 4.07.1.3.4.5.7.5h.21c.4-.1.6-.5.5-.9A7.23 7.23 0 0 0 95.45 49zM70.05 20.29v-6.46c.8.1 1.5.4 2.11.9.7.59 1.11 1.38 1.11 2.28 0 .4.3.8.8.8.41 0 .82-.3.82-.8 0-1.3-.61-2.48-1.62-3.38-.8-.7-1.91-1.19-3.02-1.29v-2.18c0-.4-.3-.8-.8-.8-.41 0-.81.3-.81.8v2.08c-1.11.1-2.22.6-3.03 1.3-1 .89-1.61 2.08-1.61 3.37 0 1.3.6 2.48 1.61 3.38.8.7 1.92 1.19 3.03 1.29v6.55c-.81-.1-1.52-.4-2.12-.9-.7-.59-1.1-1.38-1.1-2.28 0-.4-.31-.79-.82-.79-.4 0-.8.3-.8.8 0 1.29.6 2.48 1.61 3.37.8.7 1.92 1.2 3.02 1.3v2.18c0 .4.3.8.81.8.4 0 .8-.3.8-.8v-2.19c1.12-.1 2.22-.6 3.03-1.29 1-.9 1.61-2.08 1.61-3.38 0-1.29-.6-2.48-1.6-3.37-.82-.7-1.82-1.2-3.03-1.3zm-3.53-1.1c-.7-.6-1.1-1.39-1.1-2.28 0-.9.4-1.69 1.1-2.29.6-.5 1.31-.79 2.12-.89v6.46c-.81-.2-1.62-.5-2.12-1zm5.64 8.05c-.6.5-1.3.8-2.11.9v-6.36c.8.1 1.5.4 2.11.89.7.6 1.11 1.39 1.11 2.28s-.4 1.7-1.1 2.29z" />
  </svg>
);