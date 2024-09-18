// id="162:795"
import React from "react"
import { Flex } from "antd"
import { Carousel, CarouselProps } from "antd"

export interface QodeCarouselProps extends Omit<CarouselProps, "state"> {
  state?: "default" | "hover" | "active"
}

export const QodeCarousel: React.FC<QodeCarouselProps> = ({
  state = "active",
  ...rest
}) => {
  return <Carousel state={state} {...rest} />
}
