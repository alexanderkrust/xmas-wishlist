"use client";

import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";

const cards = [
  {
    image: "/images/ecm.jpg",
    brand: "ECM",
    label: "Bodenloser Siebträger",
    /* price: "93,95 EUR", */
    link: "https://www.aromatico.de/ecm/gran-crema-bodenloser-siebtraeger/102039/",
  },
  {
    image: "/images/santoku-knife.jpg",
    brand: "MITSUMOTO SAKARI",
    label: "Santoku Messer",
    /* price: "39,90 EUR", */
    link: "https://www.amazon.de/MITSUMOTO-SAKARI-Hochkohlenstoffstahl-Handgeschmiedetes-Rosenholzgriff/dp/B09W5RKXZS/ref=sr_1_5?crid=JMGNZ37DC9IM&keywords=mitsumoto%2Bsantoku&qid=1701629384&sprefix=mitsumoto%2Bsanto%2Caps%2C113&sr=8-5&th=1",
  },
  {
    image: "/images/hackblock.jpg",
    brand: "Cuisine Romefort",
    label: "Stirnholz Hackblock",
    /* price: "34,95 EUR", */
    link: "https://www.cuisineromefort.eu/Hackblock-Thermobuche-Stirnholz-geoelt-50-x-35-x-5-cm",
  },
  {
    image: "/images/knifeblock.webp",
    brand: "Shinrai Japan",
    label: "Universal-Messerblock – Akazienholz",
    /* price: "51,99 EUR", */
    link: "https://www.megakochwelt.de/products/shinrai-japan-universal-messerblock-akazienholz",
  },
  {
    image: "/images/tongs.jpg",
    brand: "Pentole Agnelli",
    label: "Küchenzange (35cm)",
    /* price: "55,99 EUR", */
    link: "https://www.amazon.de/CHEF-Pentole-Agnelli-Edelstahl-10-Zange/dp/B00DYSQF7W/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=NMoIn&content-id=amzn1.sym.f81e69b0-8d25-4d0a-a0ba-d47e95a31f14%3Aamzn1.symc.ca948091-a64d-450e-86d7-c161ca33337b&pf_rd_p=f81e69b0-8d25-4d0a-a0ba-d47e95a31f14&pf_rd_r=R3NHM12TZ83DXAS06WXX&pd_rd_wg=LgQj7&pd_rd_r=d2ade356-d65f-4583-b991-d92cb693669c&pd_rd_i=B00DYSQF7W&th=1",
  },
  {
    image: "/images/refyll.jpg",
    brand: "REFYLL",
    label: "Trinkflasche (1,3l Army green)",
    /* price: "55,99 EUR", */
    link: "https://www.amazon.de/Sidorenko-Tischunterlage-Oberfl%C3%A4che-Geschwindigkeit-Fransenfreie/dp/B07CBHX4DB/ref=sr_1_3?keywords=gro%C3%9Fes+mauspad&qid=1669368653&sprefix=gro%C3%9Fes+maus%2Caps%2C101&sr=8-3",
  },
  {
    image: "/images/puck.jpg",
    brand: "Notsek",
    label: "Siebträger Puck (58,5mm)",
    /* price: "55,99 EUR", */
    link: "https://www.amazon.de/Siebtr%C3%A4ger-Aufbewahrungsbox-Edelstahl-Wiederverwendbar-Puckfilter/dp/B09Z2GS4W5/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=INNAB5P43X3Q&keywords=siebtr%C3%A4ger%2Bpuck%2B58mm&qid=1701634147&sprefix=siebtr%C3%A4ger%2Bpuck%2B58mm%2Caps%2C119&sr=8-3&th=1",
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
