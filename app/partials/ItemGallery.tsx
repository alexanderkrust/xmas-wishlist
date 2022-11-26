"use client";

import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";

const cards = [
  {
    image: "/images/joefrex.jpeg",
    brand: "JoeFrex",
    label: "Sudschublade poliert S",
    /* price: "93,95 EUR", */
    link: "https://baristafusion.de/siebtraeger-tamper/zubehoer/abklopfbehaelter/joefrex-sudschublade-poliert-lf1480758",
  },
  {
    image: "/images/nike-sweater.jpeg",
    brand: "Nike",
    label: "Sweatshirt (L)",
    /* price: "39,90 EUR", */
    link: "https://www.aboutyou.de/p/nike-sportswear/sweatshirt-4316743?vid=37619798&om_channel=PLA&force-language=1",
  },
  {
    image: "/images/football.jpg",
    brand: "Wilson",
    label: "American Football NFL",
    /* price: "34,95 EUR", */
    link: "https://www.amazon.de/Wilson-American-Mischleder-Offizielle-WTF1825XBBRS/dp/B08BZX1BL2/ref=sr_1_5?keywords=wilson%2Bfootball&qid=1669227082&sprefix=wilson%2Bfoot%2Caps%2C112&sr=8-5&th=1&psc=1",
  },
  {
    image: "/images/kaffeewaage.jpeg",
    brand: "Coyooco",
    label: "Kaffeewaage 2.0",
    /* price: "51,99 EUR", */
    link: "https://www.roastmarket.de/coyooco-kaffeewaage-2-0.html",
  },
  {
    image: "/images/birkenstock.jpeg",
    brand: "Birkenstock",
    label: "Arizona black (42)",
    /* price: "55,99 EUR", */
    link: "https://www.snipes.com/p/birkenstock-arizona-black-00013801699500.html",
  },
  {
    image: "/images/mousepad.jpg",
    brand: "Sidorenko",
    label: "Gaming Mauspad (XXL)",
    /* price: "55,99 EUR", */
    link: "https://www.amazon.de/Sidorenko-Tischunterlage-Oberfl%C3%A4che-Geschwindigkeit-Fransenfreie/dp/B07CBHX4DB/ref=sr_1_3?keywords=gro%C3%9Fes+mauspad&qid=1669368653&sprefix=gro%C3%9Fes+maus%2Caps%2C101&sr=8-3",
  },
  {
    image: "/images/bademantel.webp",
    brand: "ellesse",
    label: "Bademantel in Schwarz",
    /* price: "55,99 EUR", */
    link: "https://www.asos.com/de/ellesse/ellesse-bademantel-in-schwarz-mit-kapuze/prd/201109437",
  },
];

export const ItemGallery = () => {
  return (
    <Container maxW="7xl">
      <Heading size="4xl" fontWeight="black" paddingTop="20" paddingBottom="16">
        Alex&apos;s Wishlist ✨🎅🎄
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacingX="30px">
        {cards.map((card) => (
          <Card key={card.label} {...card} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
