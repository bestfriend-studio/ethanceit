import React, { useState } from "react";
import { Flex, Button, Slider, Image, Box, Text, Heading } from "rimble-ui";
import styled from "styled-components";
import "./App.css";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  infuraId: "26c828d9b75641dbabb8177a744280c4" // Required
});

const web3 = new Web3(provider);

const BlurImage = styled(Image)`
  filter: blur(${props => props.blur}px);
`;

function App() {
  const [blur, setBlur] = useState(7);
  const [ethanced, setEthanced] = useState(0);

  const submitTip = async () => {
    await provider.enable();

    const accounts = await web3.eth.getAccounts();
    console.log("accounts", accounts);

    const tx = {
      from: accounts[0],
      to: "0x9Faf8f3EE20B71c5b4Da30F69D1aFbfaF4196382",
      value: "100000000000000"
    };

    console.log("tx", tx);

    const txHash = await web3.eth.sendTransaction(tx);
    console.log("txHash", txHash);

    ethanced === 0 ? setBlur(3) : setBlur(0);
    setEthanced(ethanced + 1);
  };

  return (
    <Box className="App">
      <Heading color={"primary"}>ethance.it</Heading>
      <BlurImage
        alt="random unsplash image"
        borderRadius={8}
        height="auto"
        blur={blur}
        src="https://source.unsplash.com/random/1280x720"
      />
      <Box>
        {ethanced === 0 && (
          <Button.Outline onClick={submitTip}>
            Enhance it for $.01
          </Button.Outline>
        )}
        {ethanced === 1 && (
          <Button.Outline onClick={submitTip}>
            Fully enhance it for another $.01
          </Button.Outline>
        )}
      </Box>
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
