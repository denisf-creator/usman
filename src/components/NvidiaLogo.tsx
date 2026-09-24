export function NvidiaLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Official styled NVIDIA iconic spiral emblem */}
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-auto shrink-0"
        aria-label="NVIDIA Logo Icon"
      >
        <path
          d="M48.2 12C31.5 12 18 25.5 18 42.2C18 55.4 26.5 66.6 38.3 70.7V61.8C31.2 58.4 26.2 50.9 26.2 42.2C26.2 30.1 36.1 20.2 48.2 20.2C60.3 20.2 70.2 30.1 70.2 42.2C70.2 47.9 68 53.1 64.4 57L70.4 63C75.8 57.7 79.2 50.4 79.2 42.2C79.2 25.5 65.7 12 48.2 12Z"
          fill="#76B900"
        />
        <path
          d="M48.2 26.8C39.7 26.8 32.8 33.7 32.8 42.2C32.8 48.9 37 54.6 42.9 56.7V49.6C39.6 48 37.4 44.5 37.4 42.2C37.4 36.2 42.2 31.4 48.2 31.4C54.2 31.4 59 36.2 59 42.2C59 45.1 57.9 47.7 56.1 49.6L61.6 55.1C64.9 51.9 67 47.3 67 42.2C67 33.7 60.1 26.8 48.2 26.8Z"
          fill="#76B900"
        />
        <path
          d="M48.2 38.4C46.1 38.4 44.4 40.1 44.4 42.2C44.4 44.3 46.1 46 48.2 46C50.3 46 52 44.3 52 42.2C52 40.1 50.3 38.4 48.2 38.4Z"
          fill="#76B900"
        />
      </svg>
      <span className="font-extrabold tracking-wider text-base uppercase text-[#F5F5F5]">
        NVIDIA
      </span>
    </div>
  );
}
