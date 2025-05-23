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
        mt-0
        w-full
        h-auto
        max-w-full
        sm:max-w-full
        md:max-w-[70vw]
        lg:max-w-[60vw]
        xl:max-w-[50vw]
      "
    >
      <CarouselContent className="h-full">
        {imagesAboutMe.map((imageSrc, index) => (
          <CarouselItem key={index} className="h-full">
            <Card
              className="bg-black border-black h-full w-full overflow-hidden p-0 m-0 "
              style={{ borderRadius: "32px" }}
            >
              <CardContent className="h-full w-full p-0 m-0">
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover block rounded-xl"
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
