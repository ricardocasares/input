import React, { FC } from "react";

export type Dashboard = {
  color?: string;
  size?: string | number;
};

export const Dashboard: FC<Dashboard> = ({ color = "#FFF", size = "100%" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 126 127"
    width={size}
    fill={color}
  >
    <path d="M70.9 30.15l1.38 1-10.44 15.48a3.44 3.44 0 0 0-2.98 3.4c0 1.69 1.3 3.19 2.98 3.39l9.95 14.57H68.4a2.9 2.9 0 0 0-2.89 2.9v2.4h-3.38c-.5 0-.9.4-.9.9s.4.9.9.9h22.47c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-3.38v-2.4c0-1.6-1.29-2.9-2.88-2.9h-4.57L63.73 53.12c1.2-.5 2-1.8 2-3.2 0-1.4-.8-2.6-2-3.2l9.95-14.67 2.78 2 5.47 13.97c.1.3.4.5.7.5h.1c.3 0 .5-.1.7-.4l3.27-4.69c.7.3 1.5.5 2.29.5 2.19 0 4.47-1.2 6.06-3.4a8.42 8.42 0 0 0 1.6-5.19c-.1-1.5-.6-2.8-1.6-3.69l3.29-4.7c.2-.3.2-.6.1-.9-.1-.3-.4-.49-.7-.49l-14.92-.7-5.56-4a5.42 5.42 0 0 0-7.66 1.3c-1.79 2.8-1.2 6.3 1.3 8zM79.53 71v2.4H67.21v-2.4c0-.6.5-1.2 1.2-1.2h10.04c.6 0 1.1.5 1.1 1.2zm-17.2-19.27c-1 0-1.69-.8-1.69-1.7 0-.9.8-1.7 1.7-1.7.89 0 1.68.8 1.68 1.7 0 .9-.8 1.7-1.69 1.7zm32.61-15.98c.1 1.4-.4 2.8-1.29 4.1-1.59 2.2-4.07 3.2-5.86 2.5l6.36-8.9c.4.5.7 1.3.8 2.3zM71 23.46a3.81 3.81 0 0 1 5.27-.9l5.77 4.2c.1.1.3.2.5.2l13.62.6-13.23 18.47-4.97-12.68c-.1-.2-.2-.3-.3-.4l-5.76-4.2a3.83 3.83 0 0 1-.9-5.29zM6.66 28.56h53.1c.5 0 .9-.4.9-.9v-9.59c0-.5-.4-.9-.9-.9H6.66c-.5 0-.9.4-.9.9v9.59c.1.5.4.9.9.9zm.9-9.59h51.4v7.79H53.1v-4.6a.9.9 0 1 0-1.8 0v4.6h-5.76v-2.7a.9.9 0 1 0-1.8 0v2.7h-5.96v-4.6a.9.9 0 1 0-1.79 0v4.6h-5.76v-2.7a.9.9 0 1 0-1.8 0v2.7h-5.96v-4.6a.9.9 0 1 0-1.79 0v4.6h-5.77v-2.7a.9.9 0 1 0-1.79 0v2.7H7.56v-7.79zM.9 26.16c.5 0 .89-.4.89-.9V11.28a.9.9 0 1 0-1.79 0v14.08c0 .4.4.8.9.8zM.9 35.34c.5 0 .89-.4.89-.9v-4.59a.9.9 0 1 0-1.79 0v4.6c0 .5.4.9.9.9zM123.69 91.56c-.5 0-.9.4-.9.9v14.07a.9.9 0 1 0 1.8 0V92.45c-.1-.5-.5-.9-.9-.9zM123.69 110.23c-.5 0-.9.4-.9.9v4.59a.9.9 0 1 0 1.8 0v-4.6c-.1-.5-.5-.9-.9-.9zM49.22 4.9c.2.2.4.3.6.3.2 0 .4-.1.6-.3.29-.3.29-.9 0-1.2L48.71 2a.9.9 0 0 0-1.2 0c-.3.3-.3.9 0 1.2l1.7 1.7zM54.69 10.38c.2.2.4.3.6.3.2 0 .39-.1.59-.3.3-.3.3-.9 0-1.2l-1.7-1.7a.9.9 0 0 0-1.18 0c-.3.3-.3.9 0 1.2l1.69 1.7zM48.12 10.68c.2 0 .4-.1.6-.3l1.7-1.7c.29-.3.29-.9 0-1.2a.9.9 0 0 0-1.2 0l-1.7 1.7c-.3.3-.3.9 0 1.2.2.2.4.3.6.3zM53.7 5.2c.2 0 .39-.1.59-.3l1.69-1.7c.3-.3.3-.9 0-1.2a.9.9 0 0 0-1.2 0L53.1 3.7c-.3.3-.3.9 0 1.2.1.2.3.3.6.3zM92.37 117.61a.9.9 0 0 0-1.2 0c-.3.3-.3.9 0 1.2l1.7 1.7c.2.2.4.3.6.3.2 0 .4-.1.59-.3.3-.3.3-.9 0-1.2l-1.69-1.7zM97.84 123.1a.9.9 0 0 0-1.2 0c-.3.3-.3.9 0 1.2l1.7 1.7c.2.2.4.3.6.3.2 0 .39-.1.59-.3.3-.3.3-.9 0-1.2l-1.7-1.7zM92.77 123.1l-1.7 1.7c-.3.3-.3.9 0 1.2.2.2.4.3.6.3s.4-.1.6-.3l1.69-1.7c.3-.3.3-.9 0-1.2-.3-.3-.8-.3-1.2 0zM98.34 117.61l-1.7 1.7c-.3.3-.3.9 0 1.2.2.2.4.3.6.3.2 0 .4-.1.6-.3l1.69-1.7c.3-.3.3-.9 0-1.2-.3-.4-.9-.4-1.2 0zM106.29 23.66c0 2.3 1.89 4.2 4.18 4.2s4.17-1.9 4.17-4.2-1.89-4.2-4.17-4.2-4.18 1.9-4.18 4.2zm6.56 0c0 1.3-1.1 2.4-2.38 2.4-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.29-.1 2.38 1 2.38 2.4zM17.6 12.28c2.29 0 4.17-1.9 4.17-4.2S19.9 3.9 17.6 3.9s-4.18 1.9-4.18 4.2 1.9 4.2 4.18 4.2zm0-6.59c1.3 0 2.39 1.1 2.39 2.4s-1.1 2.4-2.4 2.4c-1.28 0-2.38-1.1-2.38-2.4s1.1-2.4 2.39-2.4zM73.28 116.62a4.21 4.21 0 0 0-4.18 4.19c0 2.3 1.9 4.2 4.18 4.2 2.29 0 4.18-1.9 4.18-4.2 0-2.3-1.9-4.2-4.18-4.2zm0 6.59c-1.3 0-2.39-1.1-2.39-2.4 0-1.3 1.1-2.4 2.39-2.4 1.3 0 2.39 1.1 2.39 2.4 0 1.3-1 2.4-2.4 2.4zM85.41 1.8h15.11c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H85.41c-.5 0-.9.4-.9.9s.4.9.9.9zM105.5 1.8h4.87c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4.88c-.5 0-.9.4-.9.9s.4.9.9.9zM111.26 6.19c0-.5-.4-.9-.9-.9H99.84c-.5 0-.9.4-.9.9s.4.9.9.9h10.54c.5 0 .9-.4.9-.9zM91.87 5.3c-.5 0-.9.4-.9.89s.4.9.9.9h3.38c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-3.38zM51.5 125.2H36.4c-.5 0-.9.4-.9.9s.4.9.9.9h15.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zM31.42 125.2h-4.87c-.5 0-.9.4-.9.9s.4.9.9.9h4.87c.5 0 .9-.4.9-.9s-.4-.9-.9-.9zM26.55 121.7h10.54c.5 0 .9-.4.9-.89s-.4-.9-.9-.9H26.55c-.5 0-.9.4-.9.9s.4.9.9.9zM45.04 121.7c.5 0 .9-.4.9-.89s-.4-.9-.9-.9h-3.38c-.5 0-.9.4-.9.9s.4.9.9.9h3.38zM98.73 99.94c0-.3-.2-.7-.5-.8L87.2 94.15c-.2-.1-.4-.1-.5 0H28.64a5.78 5.78 0 0 0 0 11.58H86.8c.1 0 .2 0 .4-.1l11.04-4.99c.3 0 .5-.3.5-.7zm-60.75-4v8.2H35.1v-8.2h2.88zm-13.32 4c0-2.3 1.79-4.1 4.07-4.1h4.68v8.2h-4.68a4.04 4.04 0 0 1-4.07-4.1zm61.05 4.1H39.77v-8.2h45.94v8.2zm1.69-.3v-7.5l8.35 3.8-8.35 3.7z" />
    <path d="M58.66 100.84h4.58c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4.58c-.5 0-.9.4-.9.9s.4.9.9.9zM70.2 100.84h4.57c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H70.2c-.5 0-.9.4-.9.9s.4.9.9.9zM47.13 100.84h4.57c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4.57c-.5 0-.9.4-.9.9s.4.9.9.9z" />
    <path d="M120.8 76.18H35.9l-2.1-4.9h15.82a3 3 0 0 0 2.98-2.99V41.93c0-1.7-1.3-3-2.98-3H8.75a3 3 0 0 0-2.98 3V68.3c0 1.7 1.29 3 2.98 3h15.8l-2.08 4.89H.9c-.5 0-.89.4-.89.9v5.69c0 .5.4.9.9.9h7.45v34.54c0 .5.4.9.9.9h3.38c.5 0 .8-.4.9-.8l1.58-34.54h91.58l1.59 34.54c0 .5.4.8.9.8h3.37c.5 0 .9-.4.9-.9V83.67h7.46c.5 0 .9-.4.9-.9v-5.7c-.1-.5-.5-.89-1-.89zM7.47 68.29V41.93c0-.7.6-1.3 1.29-1.3h40.87c.7 0 1.29.6 1.29 1.3V68.3c0 .7-.6 1.3-1.3 1.3H8.76c-.7-.1-1.3-.6-1.3-1.3zm18.99 3h5.57l2.08 4.89h-9.74l2.09-4.9zm-14.72 46.03h-1.69V83.67h3.28l-1.59 33.65zm99.93 0h-1.8l-1.48-33.65h3.28v33.65zm8.25-35.35H1.7v-4h118.22v4z" />
    <path d="M31.02 60.4h9.94c.5 0 .9-.4.9-.9V44.64c0-.5-.4-.9-.9-.9H26.15c-.5 0-.9.4-.9.9v6.89c-.6-.1-1.19-.2-1.78-.2-4.18 0-7.56 3.4-7.56 7.59s3.38 7.59 7.56 7.59c3.77.1 6.86-2.6 7.55-6.1zm-3.98-6.09a6 6 0 0 1 2.3 4.4h-2.3v-4.4zm0-8.78h13.03V58.6h-8.95a7.4 7.4 0 0 0-4.08-6.4v-6.68zM23.56 64.8c-3.18 0-5.86-2.6-5.86-5.9a5.82 5.82 0 0 1 7.65-5.58v6.19c0 .5.4.9.9.9h2.98a5.88 5.88 0 0 1-5.67 4.39zM102.21 53.82c0-.5-.4-.9-.9-.8-.49 0-.79.4-.79.9.2 3.89 1.8 6.98 3.09 9.38.99 1.9 1.78 3.5 1.59 4.7-.1.5.3.9.7 1h.1c.39 0 .79-.3.89-.7.3-1.8-.7-3.6-1.8-5.8-1.19-2.4-2.68-5.09-2.88-8.68z" />
    <path d="M120.5 52.62h-.59c.2-1.4.3-2.8.3-4.1 0-1.3-1.1-2.4-2.39-2.4H98.14c-1.3 0-2.39 1.1-2.39 2.4 0 4.8 1.1 9.59 3.08 13.88l1.3 2.8c1.09 2.2 1.59 4.69 1.59 7.19 0 1.1.9 1.9 1.89 1.9h8.45c1.09 0 1.89-.9 1.89-1.9 0-2.5.6-5 1.59-7.2l1.09-2.29c1 .8 2.29 1.3 3.58 1.3 3.18 0 5.77-2.6 5.77-5.8.3-3.19-2.29-5.78-5.47-5.78zm-6.26 11.88a18.4 18.4 0 0 0-1.79 7.99c0 .1-.1.2-.2.2h-8.45c-.1 0-.2-.1-.2-.2 0-2.7-.6-5.5-1.78-8l-1.3-2.79a31.89 31.89 0 0 1-2.98-13.18c0-.3.3-.6.6-.6h19.68c.3 0 .6.3.6.6a29.3 29.3 0 0 1-2.68 12.58l-.3.6-1.2 2.8zm6.27-2c-1.1 0-2.09-.4-2.89-1.2.9-2.2 1.6-4.49 2.1-6.89.3-.1.49-.1.79-.1a4.1 4.1 0 0 1 4.07 4.1c0 2.2-1.88 4.1-4.07 4.1z" />
  </svg>
);
