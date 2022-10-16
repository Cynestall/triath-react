import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";
import styled from "styled-components";

export const Add = () => {
  const [tubType, setTubType] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState("");

  const usersCollectionRef = collection(db, "tubs");
  const createTubInDb = async () => {
    await addDoc(usersCollectionRef, {
      title: tubType,
      subtitle: subtitle,
      price: Number(price),
      image: image,
      flavours: ["spartans-blood", "blueberry-raspberry", "watermelon"],
    });
  };

  return (
    <Wrapper>
      <ButtonSelection>
        <button
          onClick={() => {
            setTubType("Essentials");
            console.log(tubType);
          }}
        >
          Essentials
        </button>
        <button
          onClick={() => {
            setTubType("Tartarus");
            console.log(tubType);
          }}
        >
          Tartarus
        </button>
        <button
          onClick={() => {
            setTubType("Elysium");
            console.log(tubType);
          }}
        >
          Elysium
        </button>
        <button
          onClick={() => {
            setTubType("Olympus");
            console.log(tubType);
          }}
        >
          Olympus
        </button>
        <button
          onClick={() => {
            setTubType("Asphodel");
            console.log(tubType);
          }}
        >
          Asphodel
        </button>
      </ButtonSelection>
      <label>Subtitle</label>
      <Input
        type="text"
        placeholder="subtitle"
        onChange={(event) => {
          console.log(event.target.value);
          setSubtitle(event.target.value);
        }}
        value={subtitle}
      />
      <Input
        type="number"
        placeholder="price"
        onChange={(event) => {
          console.log(event.target.value);
          setPrice(event.target.value);
        }}
        value={price}
      />
      <ButtonSelection>
        <button
          onClick={() => {
            setImage("essentialsBlueberryImage");
            console.log(image);
          }}
        >
          essentialsBlueberryImage
        </button>
        <button
          onClick={() => {
            setImage("tartarusSpartansImage");
            console.log(image);
          }}
        >
          tartarusSpartansImage
        </button>
        <button
          onClick={() => {
            setImage("olympusElixirImage");
            console.log(image);
          }}
        >
          olympusElixirImage
        </button>
      </ButtonSelection>
      <button onClick={createTubInDb}>Create tub</button>
    </Wrapper>
  );
};

const ButtonSelection = styled.div`
  display: flex;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 4px 16px;
  margin: 0 0 16px 0;
`;
