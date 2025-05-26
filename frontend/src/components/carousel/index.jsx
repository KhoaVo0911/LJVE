import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imagesAboutMe } from "@/hooks/mockData";
import Autoplay from "embla-carousel-autoplay";

export function CarouselPage() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 5000 })]}
      className="
        mt-6
        h-[30vh] sm:h-[40vh] md:h-[70vh]
        w-full
        max-w-[95vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[70vw]
        mx-auto
      "
    >
      <CarouselContent className="h-full">
        {imagesAboutMe.map((imageSrc, index) => (
          <CarouselItem key={index} className="h-full">
            <Card
              className="bg-black border-black h-full w-full overflow-hidden p-0 m-0"
              style={{ borderRadius: "32px" }}
            >
              <CardContent className="h-full w-full p-0 m-0">
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover block"
                  style={{ borderRadius: "32px" }}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white text-black" />
      <CarouselNext className="bg-white text-black" />
    </Carousel>
  );
}
