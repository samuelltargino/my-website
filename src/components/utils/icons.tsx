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
        fill="#02022B"
      />
    </svg>
  )
}

export function ArrowRight({ hoverColor }: { hoverColor?: string }) {
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
          fill="#02022B"
          className={`group-hover:fill-${hoverColor}`}
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
