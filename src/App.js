import React, { useState } from "react";
import { Flex, Button, Card, Image, Box, Text, Heading } from "rimble-ui";
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
      <Heading textAlign="left" ml={4} mr={3} as={"h1"} fontSize={7} fontWeight={4} color={"black"} my={4}>ethance.it</Heading>
      <Flex flexDirection="row" alignItems="center">
      <Box
              border={1}
              borderColor="black"
              width="auto"
              borderWidth={3}
              mr={4}
              ml={4}
              boxShadow="inset 0px -8px 0px rgba(236, 246, 161, 1)"
            >
                <Heading textAlign="left" m={4} as={"h2"}>Charge to reveal your content</Heading>
                <Text m={4} textAlign="left">Install the package to add this component to your site. Then you can charge users to reveal your content.</Text>
                <Card borderRadius={2} bg="#041414" py={3} pl={3} mx={4} mt={4}>
                <Text lineHeight={1} textAlign="left" fontFamily="monospace" color="#FAE2EA">
                  npm install ethanceit
                </Text>
                </Card>
                <Card borderRadius={2} bg="#041414" py={3} pl={3} mx={4} mt={2} mb={4}>
                  <Text lineHeight={1} textAlign="left" fontFamily="monospace" color="#ECF6A1">
                    {`  <Ethanceit`}
                  </Text>
                  <Text lineHeight={1} textAlign="left" fontFamily="monospace" color="#ECF6A1">
                    {`  address="0x0000..." // address to receive the tip`}
                  </Text>
                  <Text lineHeight={1} textAlign="left" fontFamily="monospace" color="#ECF6A1">
                    {`  src="https://source.unsplash.com/random/1280x720" // image source`}
                  </Text>
                  <Text lineHeight={1} textAlign="left" fontFamily="monospace" color="#ECF6A1">
                    {`  tipAmount="100000000000000" // Gwei \n /> `}
                  </Text>
              </Card>
                <Box mb={4}>
                  {ethanced === 0 && (
                    <Button borderRadius={0} onClick={submitTip}>
                      Enhance it for $.01
                    </Button>
                  )}
                  {ethanced === 1 && (
                    <Button borderRadius={0}  onClick={submitTip}>
                      Fully enhance it for another $.01
                    </Button>
                  )}
                </Box>
            </Box>
      <Box>
      <BlurImage
        mr={4}
        alt="random unsplash image"
        height="auto"
        width={2/3}
        blur={blur}
        src="https://source.unsplash.com/random/1280x720"
      />
      </Box>
      </Flex>
    </Box>
  );
}

export default App;
