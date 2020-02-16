import React, { useState } from "react";
import { Button, Image, Box } from "rimble-ui";
import styled from "styled-components";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  infuraId: "26c828d9b75641dbabb8177a744280c4" // Required
});

const web3 = new Web3(provider);

const BlurImage = styled(Image)`
  filter: blur(${props => props.blur}px);
`;

function Ethanceit({ address, tipAmount, src }) {
  const [blur, setBlur] = useState(7);
  const [ethanced, setEthanced] = useState(0);

  const submitTip = async () => {
    await provider.enable();

    const accounts = await web3.eth.getAccounts();
    console.log("accounts", accounts);

    const tx = {
      from: accounts[0],
      to: address,
      value: tipAmount
    };

    console.log("tx", tx);

    const txHash = await web3.eth.sendTransaction(tx);
    console.log("txHash", txHash);

    ethanced === 0 ? setBlur(3) : setBlur(0);
    setEthanced(ethanced + 1);
  };

  return (
    <Box position={"relative"}>
      <BlurImage
        alt="random unsplash image"
        height="auto"
        blur={blur}
        src={src}
      />
      <Box position="absolute" bottom="0" right="0">
        {ethanced === 0 && (
          <Button onClick={submitTip} borderRadius={0}>
            Enhance it for $.01
          </Button>
        )}
        {ethanced === 1 && (
          <Button onClick={submitTip} borderRadius={0}>
            Fully enhance it for another $.01
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Ethanceit;
