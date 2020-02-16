import React, { useState } from "react";
import { Flex, Box, Text, Button, Slider, Image } from "rimble-ui";
import styled from "styled-components";

const BlurImage = styled(Image)`
  filter: blur(${props => props.blur}px);
`;

function SmartContractControls({ web3, contract, account, transactions }) {
  console.log("web3", web3);
  const [amount, setAmount] = useState(0.01);
  const [blur, setBlur] = useState(100);

  const handleSlider = e => {
    setAmount(e.target.value);
  };

  const sendTransaction = () => {
    web3.eth
      .sendTransaction(
        {
          from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
          gasPrice: "20000000000",
          gas: "21000",
          to: "0x3535353535353535353535353535353535353535",
          value: "1000000000000000000",
          data: ""
        },
        "MyPassword!"
      )
      .then(console.log);
  };

  const submitTip = () => {
    // setBlur(100 - amount * 10);
    // setBlur(1);
    sendTransaction();
  };

  // state = {
  //   value: 0,
  //   needsUpdate: false
  // };

  // // gets the number stored in smart contract storage
  // getNumber = ({ ...props }) => {
  //   try {
  //     this.props.contract.methods
  //       .getCounter()
  //       .call()
  //       .then(value => {
  //         value = Number(value.toString());
  //         this.setState({ value, needsUpdate: false });
  //         console.log("Updated number");
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         this.setState({ error });
  //       });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // // Check for updates to the transactions collection
  // processTransactionUpdates = prevProps => {
  //   Object.keys(this.props.transactions).map(key => {
  //     let tx = this.props.transactions[key];
  //     console.log("Needs updated number: ", tx.status, this.state.needsUpdate);
  //     // Will not work if there is a tx started before a prior tx has success -- first will flip needsUpdate to false
  //     if (tx.status === "success" && this.state.needsUpdate) {
  //       console.log("Getting updated number.");
  //       this.getNumber();
  //       return false;
  //     } else {
  //       console.log("Not updating number.");
  //       return false;
  //     }
  //   });
  // };

  // resetCounter = () => {
  //   this.props.contractMethodSendWrapper("reset");
  // };

  // incrementCounter = () => {
  //   let needsUpdate = true;
  //   this.props.contractMethodSendWrapper(
  //     "incrementCounter",
  //     (txStatus, transaction) => {
  //       console.log("incrementCounter callback: ", txStatus, transaction);
  //       if (
  //         txStatus === "confirmation" &&
  //         transaction.status === "success" &&
  //         needsUpdate
  //       ) {
  //         this.getNumber();
  //         needsUpdate = false;
  //       }
  //     }
  //   );
  // };

  // decrementCounter = () => {
  //   this.props.contractMethodSendWrapper("decrementCounter");
  // };

  return (
    <Box>
      <BlurImage
        alt="random unsplash image"
        borderRadius={8}
        height="auto"
        blur={blur}
        src="https://source.unsplash.com/random/1280x720"
      />
      <Box>
        <Flex alignItems={"center"} p={3} bg={"white"}>
          <Text color={"primary"} mr={2}>
            $.01
          </Text>
          <Slider
            min={".01"}
            max={"10"}
            step={".01"}
            value={amount}
            onChange={handleSlider}
          />
          <Text color={"primary"} ml={2}>
            $10
          </Text>
        </Flex>

        <Button.Outline onClick={submitTip}>tip ${amount}</Button.Outline>
      </Box>
    </Box>
  );
}

export default SmartContractControls;
