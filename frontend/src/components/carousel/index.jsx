import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/hooks/mockData";
import Autoplay from "embla-carousel-autoplay";

export function CarouselPage() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="mt-10 h-[60vh] w-[300vh]"
    >
      <CarouselContent>
        {images.map((imageSrc, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img
                    src={imageSrc}
                    alt={`Slide ${index + 1}`}
                    className="object-contain h-[50vh] w-[80vh]"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
