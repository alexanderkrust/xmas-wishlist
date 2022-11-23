"use client";

import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";

const cards = [
  {
    image: "/images/joefrex.jpeg",
    brand: "JoeFrex",
    label: "Sudschublade poliert S",
    price: "93,95 EUR",
    link: "https://baristafusion.de/siebtraeger-tamper/zubehoer/abklopfbehaelter/joefrex-sudschublade-poliert-lf1480758",
  },
  {
    image: "/images/nike-sweater.jpeg",
    brand: "Nike",
    label: "Sweatshirt (L)",
    price: "39,90 EUR",
    link: "https://www.aboutyou.de/p/nike-sportswear/sweatshirt-4316743?vid=37619798&om_channel=PLA&force-language=1",
  },
  {
    image: "/images/football.jpg",
    brand: "Wilson",
    label: "American Football NFL",
    price: "34,95 EUR",
    link: "https://www.amazon.de/Wilson-American-Mischleder-Offizielle-WTF1825XBBRS/dp/B08BZX1BL2/ref=sr_1_5?keywords=wilson%2Bfootball&qid=1669227082&sprefix=wilson%2Bfoot%2Caps%2C112&sr=8-5&th=1&psc=1",
  },
  {
    image: "/images/kaffeewaage.jpeg",
    brand: "Coyooco",
    label: "Kaffeewaage 2.0",
    price: "51,99 EUR",
    link: "https://www.roastmarket.de/coyooco-kaffeewaage-2-0.html",
  },
];

export const ItemGallery = () => {
  return (
    <Container maxW="7xl">
      <Heading size="4xl" fontWeight="black" paddingY="12">
        Alex&apos;s Wishlist 🎅
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacingX="30px">
        {cards.map((card) => (
          <Card key={card.label} {...card} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
