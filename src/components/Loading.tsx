export function Loading() {
  return (
    <div className="mt-8">
      <div className="max-w-xs m-auto text-xl text-black dark:text-white flex items-center justify-center gap-1">
        {"CARREGANDO".split("").map((letter, index) => (
          <span
            key={index}
            className="animate-blur"
            style={{ animationDelay: (index + 1) / 10 + "s" }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
