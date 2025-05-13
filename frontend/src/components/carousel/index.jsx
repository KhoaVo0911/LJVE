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
export function CarouselPage() {
  return (
    <Carousel className="mt-10 h-[60vh] w-[300vh]">
      <CarouselContent>
        {images.map((imageSrc, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img
                    src={imageSrc}
                    alt={`Slide ${index + 1}`}
                    className="object-contain h-[50vh] w-[50vh]"
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
