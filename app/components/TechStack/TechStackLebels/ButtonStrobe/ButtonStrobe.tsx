export const ButtonStrobe = ({ glowClassName }: { glowClassName: string }) => {
  return (
    <div className="relative ml-3 flex h-12 w-12 items-center justify-center rounded-md ">
      <span
        aria-hidden
        className={`pointer-events-none absolute h-2.5 w-2.5 rounded-full ${glowClassName} animate-pulse `}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute h-6 w-6 rounded-full ${glowClassName} opacity-65 blur-[6px] animate-pulse`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute h-10 w-10 rounded-full ${glowClassName} opacity-25 blur-[12px] animate-pulse`}
      />
    </div>
  );
};
