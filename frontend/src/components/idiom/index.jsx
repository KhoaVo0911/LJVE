import { useShuffler } from "../shufferingWords/index2";

export const IdiomPage = ({ animate, reverse }) => {
  const idiom = `“Cinema is not what I see. It’s what I make others feel.\nLet’s turn your vision into frames worth remembering.”`;
  const shuffledText = useShuffler(idiom, animate, reverse);

  return (
    <div className="flex flex-col items-center mt-[50vh] mb-[40vh] md:text-lg text-[10px]">
      <div className="font-[beauSansItalic] whitespace-pre-line text-center max-w-4xl px-6">
        {shuffledText}
      </div>
    </div>
  );
};
