export function Logo() {
  return (
    <svg
      className="z-50"
      width={48}
      height={49}
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.43.5C1.088.5 0 1.602 0 2.962v43.076c0 1.36 1.088 2.462 2.43 2.462h43.14c1.342 0 2.43-1.102 2.43-2.462V2.962C48 1.602 46.912.5 45.57.5H2.43zm4.254 34.462v-8.038c0-.68.544-1.23 1.215-1.23h6.228c.67 0 1.215-.551 1.215-1.231V14.039c0-.68.544-1.23 1.215-1.23h23.544c.671 0 1.215.55 1.215 1.23v10.424c0 .68-.544 1.23-1.215 1.23h-6.227c-.672 0-1.216.552-1.216 1.231v8.038c0 .68-.544 1.23-1.215 1.23H7.9a1.223 1.223 0 01-1.215-1.23z"
        fill="#02022b"
      />
    </svg>
  )
}

export function ArrowRight() {
  return (
    <svg
      width={26}
      height={13}
      viewBox="0 0 26 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1236_1224)">
        <path
          d="M19.318 4.925H.394v3.151h18.924v4.727L25.606 6.5 19.318.197v4.728z"
          fill="#02022b"
        />
      </g>
      <defs>
        <clipPath id="clip0_1236_1224">
          <path fill="#fff" d="M0 0H26V13H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function Menu() {
  return (
    <button className="flex  w-10 flex-col gap-2 md:hidden">
      <span className="bg-lm-primary-color h-1.5 w-full rounded-sm"></span>
      <span className="bg-lm-primary-color h-1.5 w-full rounded-sm"></span>
      <span className="bg-lm-primary-color h-1.5 w-full rounded-sm"></span>
    </button>
  )
}
export function Devices() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_1236_1123)" opacity="0.6">
        <path
          fill="#02022b"
          d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1236_1123">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
export function Moon() {
  return (
    <svg
      className=""
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill=""
        className="transition-all group-hover:fill-lm-cta-color group-hover:transition-all"
        stroke="#02022b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 20.5a8 8 0 100-16 8 8 0 000 16z"
      ></path>
    </svg>
  )
}
export function Select() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#02022b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 9l6 6 6-6"
      ></path>
    </svg>
  )
}
export function Asterisk() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#F5F9FF"
        d="M0 9.182V6.855h2.982l2.545.4.182-.436L3.636 5.29 1.527 3.182l1.637-1.636 2.109 2.073L6.8 5.728l.436-.182-.4-2.582V.019h2.328v2.945l-.4 2.582.436.182 1.527-2.11 2.11-2.072 1.636 1.636-2.073 2.11-2.11 1.527.183.436 2.545-.4H16v2.327h-2.982l-2.545-.4-.182.437 2.109 1.527 2.073 2.109-1.637 1.636-2.109-2.109L9.2 10.273l-.436.182.4 2.582v2.945H6.836v-2.945l.4-2.582-.436-.182-1.527 2.11-2.11 2.108-1.636-1.636 2.11-2.11L5.708 9.22l-.182-.437-2.545.4H0z"
      ></path>
    </svg>
  )
}
