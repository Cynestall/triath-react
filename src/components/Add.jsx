import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";
import styled from "styled-components";
import { Button } from "../shared/Button";

import * as colours from "../utils/colors";
import * as spacings from "../utils/spacings";
import * as fonts from "../utils/fonts";

export const Add = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [flavours, setFlavours] = useState("");
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState("");

  const [descTitle, setDescTitle] = useState("");
  const [pump, setPump] = useState(0.0);
  const [energy, setEnergy] = useState(0.0);
  const [strength, setStrength] = useState(0.0);
  const [servings, setServings] = useState(0.0);
  const [description, setDescription] = useState("");
  const [suggestedUse, setSuggestedUse] = useState("");
  const [supplementFacts, setSupplementFacts] = useState("");

  const usersCollectionRef = collection(db, "tubs");
  const createTubInDb = async () => {
    const arrayOfFlavours = flavours.split(",");

    await addDoc(usersCollectionRef, {
      title: title,
      subtitle: subtitle,
      price: Number(price),
      image: image,
      flavours: arrayOfFlavours,
    });
  };

  const tubDescriptionRef = collection(db, "descriptions");
  const createTubDescriptionInDb = async () => {
    await addDoc(tubDescriptionRef, {
      title: descTitle,
      pump: Number(pump),
      energy: Number(energy),
      strength: Number(strength),
      servings: Number(servings),
      description: description,
      suggestedUse: suggestedUse,
      supplementFacts: supplementFacts,
    });
  };

  return (
    <Wrapper>
      <TubAdd>
        <Label>Tub title</Label>
        <Input
          placeholder="Title"
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <Label>Tub subtitle</Label>
        <Input
          placeholder="Subtitle"
          type="text"
          onChange={(event) => {
            setSubtitle(event.target.value);
          }}
          value={subtitle}
        />
        <Label>Tub price</Label>
        <Input
          placeholder="Price"
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          value={price}
        />
        <Label>
          Flavours (separate with commas: "spartans-blood,watermelon")
        </Label>
        <Input
          placeholder="Flavours"
          type="text"
          onChange={(event) => {
            setFlavours(event.target.value);
          }}
          value={flavours}
        />
        <Label>Image</Label>
        <Input
          placeholder="Image"
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
          value={image}
        />
        <Button onClick={createTubInDb}>Submit</Button>
      </TubAdd>
      <TubDescription>
        <Label>Tub Title</Label>
        <Input
          placeholder="Tub Title"
          type="text"
          onChange={(event) => {
            setDescTitle(event.target.value);
          }}
          value={descTitle}
        />
        <Label>Pump</Label>
        <Input
          placeholder="Pump"
          type="number"
          onChange={(event) => {
            setPump(event.target.value);
          }}
          value={pump}
        />
        <Label>Energy</Label>
        <Input
          placeholder="Energy"
          type="number"
          onChange={(event) => {
            setEnergy(event.target.value);
          }}
          value={energy}
        />
        <Label>Strength</Label>
        <Input
          placeholder="Strength"
          type="number"
          onChange={(event) => {
            setStrength(event.target.value);
          }}
          value={strength}
        />
        <Label>Serving Size</Label>
        <Input
          placeholder="Servings"
          type="number"
          onChange={(event) => {
            setServings(event.target.value);
          }}
          value={servings}
        />
        <Label>Product description</Label>
        <Textarea
          placeholder="Product description"
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
        />
        <Label>Suggested use</Label>
        <Textarea
          placeholder="Suggested use"
          type="text"
          onChange={(event) => {
            setSuggestedUse(event.target.value);
          }}
          value={suggestedUse}
        />
        <Label>Supplement Facts</Label>
        <Input
          placeholder="Supplement Facts"
          type="text"
          onChange={(event) => {
            setSupplementFacts(event.target.value);
          }}
          value={supplementFacts}
        />
        <Button onClick={createTubDescriptionInDb}>Submit</Button>
      </TubDescription>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
`;
const TubAdd = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  button {
    margin-top: 16px;
    max-width: 300px;
  }
`;
const Label = styled.label`
  font-size: ${fonts.fontSize14};
  font-family: ${fonts.montserrat};
  margin-top: 16px;
`;
const Input = styled.input`
  width: 20rem;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  padding: 12px;
  font-family: ${fonts.montserrat};
`;
const Textarea = styled.textarea`
  width: 20rem;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  padding: 12px;
  font-family: ${fonts.montserrat};
`;

const TubDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  button {
    margin-top: 16px;
    max-width: 300px;
  }
`;
