import React from "react";
import { Text, Box, Heading } from "rimble-ui";
import "./App.css";
import Ethanceit from "./components/Ethanceit";

function App() {
  return (
    <Box className="App">
      <Heading color={"primary"}>ethance.it</Heading>
      <Ethanceit
        address="0x9Faf8f3EE20B71c5b4Da30F69D1aFbfaF4196382"
        tipAmount="100000000000000"
        src="https://source.unsplash.com/random/1280x720"
      />
      <Box bg="#333" maxWidth="500px">
        <Text color="white" textAlign="left">
          npm install ethanceit
        </Text>
        <Text color="white" textAlign="left">{`<Ethanceit`}</Text>
        <Text
          color="white"
          textAlign="left"
        >{`  address="0x0000..." // address to receive the tip`}</Text>
        <Text
          color="white"
          textAlign="left"
        >{`  src="https://source.unsplash.com/random/1280x720" // image source`}</Text>
        <Text
          color="white"
          textAlign="left"
        >{`  tipAmount="100000000000000" // Gwei \n /> `}</Text>
      </Box>
    </Box>
  );
}

export default App;
