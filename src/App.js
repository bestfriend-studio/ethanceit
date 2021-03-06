import React from "react";
import { Text, Box, Heading, Flex, Card } from "rimble-ui";
import "./App.css";
import Ethanceit from "./components/Ethanceit";

function App() {
  return (
    <Box p="2">
      <Heading
        textAlign="left"
        ml={4}
        mr={3}
        as={"h1"}
        fontSize={7}
        fontWeight={4}
        color={"black"}
        my={4}
      >
        ethance.it
      </Heading>
      <Flex
        flexDirection={["column", "row"]}
        alignItems="center"
        flexWrap={["wrap", "wrap", "nowrap"]}
        width={1}
        mb={[4, 2]}
      >
        <Box
          border={1}
          borderColor="black"
          width={[1, 1, 1 / 2]}
          borderWidth={3}
          mr={[0, 4]}
          ml={[0, 4]}
          mt={[6, 0]}
          order={[1, 0]}
          boxShadow="inset 0px -8px 0px rgba(236, 246, 161, 1)"
        >
          <Heading textAlign="left" m={4} as={"h2"}>
            Charge to reveal your content
          </Heading>
          <Text m={4} textAlign="left">
            Install the package to add this component to your site. Then you can
            charge users to reveal your content.
          </Text>
          <Card borderRadius={2} bg="#041414" py={3} pl={3} mx={4} mt={4}>
            <Text
              lineHeight={1}
              textAlign="left"
              fontFamily="monospace"
              color="#FAE2EA"
            >
              npm i @bit/mikelockz.onedairection.ethanceit
            </Text>
          </Card>
          <Card
            borderRadius={2}
            bg="#041414"
            py={3}
            pl={3}
            mx={4}
            mt={2}
            mb={4}
            overflow={["hidden", "visible"]}
          >
            <Text
              lineHeight={1}
              textAlign="left"
              fontFamily="monospace"
              color="#ECF6A1"
            >
              {`  <Ethanceit`}
            </Text>
            <Text
              lineHeight={1}
              textAlign="left"
              fontFamily="monospace"
              color="#ECF6A1"
              pl={3}
            >
              {`  address="0x0000..." // address to receive the tip`}
            </Text>
            <Text
              lineHeight={1}
              textAlign="left"
              fontFamily="monospace"
              color="#ECF6A1"
              pl={3}
              maxWidth={"100%"}
            >
              {`  src="https://source.unsplash.com/random/1280x720" // image source`}
            </Text>
            <Text
              lineHeight={1}
              textAlign="left"
              fontFamily="monospace"
              color="#ECF6A1"
              pl={3}
            >
              {`  tipAmount="100000000000000" // Gwei \n /> `}
            </Text>

            <Text
              lineHeight={1}
              textAlign="left"
              fontFamily="monospace"
              color="#ECF6A1"
            >
              {`/> `}
            </Text>
          </Card>
        </Box>
        <Box padding={[0, 4]} mt={[4, 0]} width={[1, 1, 1 / 2]} mb={[4, 0]}>
          <Ethanceit
            address="0x9Faf8f3EE20B71c5b4Da30F69D1aFbfaF4196382"
            src="https://source.unsplash.com/random/1280x720"
            tip="100000000000000"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
