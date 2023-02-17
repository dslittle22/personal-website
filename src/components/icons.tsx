"use client";

import { useEffect, useState } from "react";

export function Moon() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    let bodyStyles = window.getComputedStyle(document.body);
    setColor(bodyStyles.getPropertyValue("--color-text"));
  }, []);

  return (
    <svg
      width="25"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" />
    </svg>
  );
}

export function Sun() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    let bodyStyles = window.getComputedStyle(document.body);
    setColor(bodyStyles.getPropertyValue("--color-text"));
  }, []);

  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.75 5.5C11.1977 5.5 10.75 5.05228 10.75 4.5V2C10.75 1.44772 11.1977 1 11.75 1H12.25C12.8023 1 13.25 1.44772 13.25 2V4.5C13.25 5.05228 12.8023 5.5 12.25 5.5H11.75Z" />
      <path d="M16.4194 7.22698C16.0289 6.83646 16.0289 6.20329 16.4194 5.81277L18.1872 4.045C18.5777 3.65447 19.2109 3.65447 19.6014 4.045L19.9549 4.39855C20.3455 4.78908 20.3455 5.42224 19.9549 5.81277L18.1872 7.58053C17.7967 7.97106 17.1635 7.97106 16.773 7.58053L16.4194 7.22698Z" />
      <path d="M18.5 11.75C18.5 11.1977 18.9477 10.75 19.5 10.75H22C22.5523 10.75 23 11.1977 23 11.75V12.25C23 12.8023 22.5523 13.25 22 13.25H19.5C18.9477 13.25 18.5 12.8023 18.5 12.25V11.75Z" />
      <path d="M16.7728 16.4194C17.1633 16.0289 17.7965 16.0289 18.187 16.4194L19.9548 18.1872C20.3453 18.5777 20.3453 19.2109 19.9548 19.6014L19.6012 19.9549C19.2107 20.3455 18.5775 20.3455 18.187 19.9549L16.4192 18.1872C16.0287 17.7967 16.0287 17.1635 16.4192 16.773L16.7728 16.4194Z" />
      <path d="M12.25 18.5C12.8023 18.5 13.25 18.9477 13.25 19.5V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V19.5C10.75 18.9477 11.1977 18.5 11.75 18.5H12.25Z" />
      <path d="M7.58059 16.773C7.97111 17.1635 7.97111 17.7967 7.58059 18.1872L5.81282 19.955C5.4223 20.3455 4.78913 20.3455 4.39861 19.955L4.04505 19.6014C3.65453 19.2109 3.65453 18.5778 4.04505 18.1872L5.81282 16.4195C6.20334 16.0289 6.83651 16.0289 7.22703 16.4195L7.58059 16.773Z" />
      <path d="M5.5 12.25C5.5 12.8023 5.05228 13.25 4.5 13.25H2C1.44772 13.25 1 12.8023 1 12.25V11.75C1 11.1977 1.44772 10.75 2 10.75H4.5C5.05228 10.75 5.5 11.1977 5.5 11.75V12.25Z" />
      <path d="M7.22722 7.58059C6.8367 7.97111 6.20353 7.97111 5.81301 7.58059L4.04524 5.81282C3.65472 5.4223 3.65472 4.78913 4.04524 4.39861L4.3988 4.04505C4.78932 3.65453 5.42248 3.65453 5.81301 4.04505L7.58078 5.81282C7.9713 6.20334 7.9713 6.83651 7.58078 7.22703L7.22722 7.58059Z" />
      <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" />
    </svg>
  );
}

export function System() {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.78799 2H16.212C17.0305 1.99999 17.7061 1.99998 18.2561 2.04565C18.8274 2.0931 19.3523 2.19496 19.8439 2.45035C20.5745 2.82985 21.1702 3.42553 21.5497 4.1561C21.805 4.64774 21.9069 5.17258 21.9543 5.74393C22 6.29394 22 6.96949 22 7.78802V11.212C22 12.0305 22 12.7061 21.9543 13.2561C21.9069 13.8274 21.805 14.3523 21.5497 14.8439C21.1702 15.5745 20.5745 16.1702 19.8439 16.5497C19.3523 16.805 18.8274 16.9069 18.2561 16.9544C17.7061 17 17.0305 17 16.212 17H13V19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H11V17H7.78798C6.96946 17 6.29393 17 5.74393 16.9544C5.17258 16.9069 4.64774 16.805 4.1561 16.5497C3.42553 16.1702 2.82985 15.5745 2.45035 14.8439C2.19496 14.3523 2.0931 13.8274 2.04565 13.2561C1.99998 12.7061 1.99999 12.0305 2 11.212V7.78799C1.99999 6.96947 1.99998 6.29393 2.04565 5.74393C2.0931 5.17258 2.19496 4.64774 2.45035 4.1561C2.82985 3.42553 3.42553 2.82985 4.1561 2.45035C4.64774 2.19496 5.17258 2.0931 5.74393 2.04565C6.29393 1.99998 6.96947 1.99999 7.78799 2ZM16.17 15C17.041 15 17.6331 14.9992 18.0905 14.9612C18.536 14.9242 18.7634 14.8572 18.9219 14.7748C19.2872 14.5851 19.5851 14.2872 19.7748 13.9219C19.8572 13.7634 19.9242 13.536 19.9612 13.0905C19.9992 12.6331 20 12.041 20 11.17V7.83C20 6.95898 19.9992 6.36686 19.9612 5.90945C19.9242 5.46401 19.8572 5.23663 19.7748 5.07805C19.5851 4.71277 19.2872 4.41493 18.9219 4.22517C18.7634 4.1428 18.536 4.07578 18.0905 4.03879C17.6331 4.0008 17.041 4 16.17 4H7.83C6.95898 4 6.36686 4.0008 5.90945 4.03879C5.46401 4.07578 5.23663 4.1428 5.07805 4.22517C4.71277 4.41493 4.41493 4.71277 4.22517 5.07805C4.1428 5.23663 4.07578 5.46401 4.03879 5.90945C4.0008 6.36686 4 6.95898 4 7.83V11.17C4 12.041 4.0008 12.6331 4.03879 13.0905C4.07578 13.536 4.1428 13.7634 4.22517 13.9219C4.41493 14.2872 4.71277 14.5851 5.07805 14.7748C5.23663 14.8572 5.46401 14.9242 5.90945 14.9612C6.36686 14.9992 6.95898 15 7.83 15H16.17Z"
      ></path>
    </svg>
  );
}