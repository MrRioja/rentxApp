import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import forceSvg from "../../assets/force.svg";
import peopleSvg from "../../assets/people.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import accelerationSvg from "../../assets/acceleration.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XlZJBBD6cxFxgDOo0T8vJUHRViFXeG_4IA&usqp=CAU",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Porro sit modi magnam. Modi magnam dolorem ut eius sit. Quiquia ipsum
          numquam quisquam. Etincidunt dolorem ipsum adipisci voluptatem labore.
          Voluptatem dolor consectetur ut dolore consectetur velit etincidunt.
          Sed adipisci dolore quiquia. Porro est dolorem aliquam.
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
