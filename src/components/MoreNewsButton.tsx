import { useState } from "react";

interface MoreNewsButtonProps {
  onRequestMoreNews: (limit: number) => void;
  length: number;
  isLoading: boolean;
  setIsLoading: (setParams: boolean) => void;
}

export function MoreNewsButton({
  onRequestMoreNews,
  length,
  isLoading,
  setIsLoading,
}: MoreNewsButtonProps) {
  return (
    <div className="mt-12">
      <button
        title="Botão responsável por carregar mais notícias"
        type="button"
        className="block w-full max-w-[15rem] m-auto p-2 bg-[#a8001c] text-white font-bold hover:brightness-125 transition-colors"
        onClick={() => {
          onRequestMoreNews(length + 4);
          setIsLoading(true);
        }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-4">
            <span
              className="w-6 h-6 rounded-full bg-gray-50 animate-bounce-circle"
              style={{ animationDelay: "0.5s" }}
            ></span>
            <span
              className="w-6 h-6 rounded-full bg-gray-50 animate-bounce-circle"
              style={{ animationDelay: "0.75s" }}
            ></span>
            <span
              className="w-6 h-6 rounded-full bg-gray-50 animate-bounce-circle"
              style={{ animationDelay: "1s" }}
            ></span>
          </div>
        ) : (
          "Mostrar mais notícias"
        )}
      </button>
    </div>
  );
}
