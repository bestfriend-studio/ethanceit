import React, { useState } from "react";
import { Box } from "rimble-ui";
import SmartContractControls from "./SmartContractControls";

import RimbleWeb3 from "../utilities/RimbleWeb3";
import TransactionToastUtil from "../utilities/TransactionToastUtil";

function TipButton() {
  const [amount, setAmount] = useState(0.01);
  const [blur, setBlur] = useState(100);

  const handleSlider = e => {
    setAmount(e.target.value);
  };

  const submitTip = () => {
    setBlur(100 - amount * 10);
    // setBlur(1);
  };

  return (
    <RimbleWeb3.Consumer>
      {({
        contract,
        account,
        transactions,
        gasStationInfo,
        initContract,
        initAccount,
        contractMethodSendWrapper,
        web3
      }) => (
        <div>
          <Box maxWidth={"640px"} px={4} mx={"auto"}>
            <SmartContractControls
              contract={contract}
              account={account}
              transactions={transactions}
              initContract={initContract}
              contractMethodSendWrapper={contractMethodSendWrapper}
              web3={web3}
            />
          </Box>

          <TransactionToastUtil transactions={transactions} />
        </div>
      )}
    </RimbleWeb3.Consumer>
  );
}

export default TipButton;
