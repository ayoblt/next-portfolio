import { cn } from "@/lib/utils";

const Sun = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("dark:hidden inline", className)}
    >
      <path
        d="M11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11C17 14.3137 14.3137 17 11 17ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15ZM10 1C10 0.447715 10.4477 0 11 0V0C11.5523 0 12 0.447715 12 1V2C12 2.55228 11.5523 3 11 3V3C10.4477 3 10 2.55228 10 2V1ZM10 20C10 19.4477 10.4477 19 11 19V19C11.5523 19 12 19.4477 12 20V21C12 21.5523 11.5523 22 11 22V22C10.4477 22 10 21.5523 10 21V20ZM3.22183 4.63603C2.8313 4.24551 2.8313 3.61235 3.22182 3.22182V3.22182C3.61235 2.8313 4.24551 2.8313 4.63603 3.22183L5.34314 3.92894C5.73367 4.31946 5.73367 4.95262 5.34315 5.34315V5.34315C4.95262 5.73367 4.31946 5.73367 3.92894 5.34314L3.22183 4.63603ZM16.6569 18.0711C16.2663 17.6806 16.2663 17.0474 16.6568 16.6568V16.6568C17.0474 16.2663 17.6806 16.2663 18.0711 16.6569L18.7782 17.364C19.1687 17.7545 19.1687 18.3877 18.7782 18.7782V18.7782C18.3877 19.1687 17.7545 19.1687 17.364 18.7782L16.6569 18.0711ZM17.364 3.22181C17.7545 2.83129 18.3877 2.8313 18.7782 3.22182V3.22182C19.1687 3.61235 19.1687 4.24551 18.7782 4.63604L18.0711 5.34315C17.6806 5.73367 17.0474 5.73368 16.6569 5.34317V5.34317C16.2663 4.95264 16.2663 4.31944 16.6569 3.9289L17.364 3.22181ZM3.9289 16.6569C4.31944 16.2663 4.95264 16.2663 5.34317 16.6569V16.6569C5.73368 17.0474 5.73367 17.6806 5.34315 18.0711L4.63604 18.7782C4.24551 19.1687 3.61235 19.1687 3.22182 18.7782V18.7782C2.8313 18.3877 2.83129 17.7545 3.22181 17.364L3.9289 16.6569ZM21 10C21.5523 10 22 10.4477 22 11V11C22 11.5523 21.5523 12 21 12H20C19.4477 12 19 11.5523 19 11V11C19 10.4477 19.4477 10 20 10H21ZM2 10C2.55228 10 3 10.4477 3 11V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V11C0 10.4477 0.447715 10 1 10H2Z"
        fill="#2C2C2C "
      />
    </svg>
  );
};

export default Sun;
