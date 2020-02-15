import React, { useState } from "react";
import { Flex, Button, Slider, Image, Box, Text } from "rimble-ui";
import styled from "styled-components";
import "./App.css";

const BlurText = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(40px);
    height: ${props => props.height}%;
    background-color: white;
  }
`;

function App() {
  const [amount, setAmount] = useState(0.01);
  const [blur, setBlur] = useState(100);
  const [height, setHeight] = useState(90);

  const handleSlider = e => {
    setAmount(e.target.value);
  };

  const submitTip = () => {
    setHeight(100 - amount * 10);
  };

  return (
    <Box className="App">
      <BlurText blur={blur} height={height}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          malesuada eget nisi vitae congue. Ut auctor leo in quam venenatis,
          sollicitudin placerat massa porttitor. Fusce condimentum bibendum
          eros, in aliquam lacus convallis nec. Nam sit amet ultrices lectus.
          Etiam ipsum dui, vehicula id facilisis ut, sodales vel elit. Nullam
          molestie orci vel elit venenatis, et tristique ligula dictum. Donec
          sapien sapien, luctus at vulputate at, finibus vitae lacus. Morbi in
          eros id velit porta varius. Aenean a lacinia urna, vel dignissim
          nulla. Nulla vestibulum imperdiet felis ut tempor. Nam convallis magna
          eget enim malesuada bibendum. Sed lacus orci, gravida et dignissim in,
          gravida vitae ante. Nunc laoreet quis ex at tincidunt.
        </Text>

        <Text>
          Duis tempus rhoncus odio, in varius ante. Nullam porttitor ornare
          malesuada. In ullamcorper consectetur est, eget eleifend turpis
          ultricies non. Nam non imperdiet odio. Sed euismod congue felis, in
          pellentesque felis tincidunt vitae. Donec scelerisque tincidunt
          lacinia. Phasellus quis iaculis arcu, at scelerisque sapien. Proin et
          vulputate tortor. Nullam vehicula risus ex, ut congue nulla interdum
          eget. Aliquam erat volutpat. Ut at placerat nunc. Curabitur
          pellentesque metus arcu, vel fringilla elit hendrerit ac. Pellentesque
          ac mauris libero.
        </Text>

        <Text>
          Etiam odio libero, scelerisque in risus a, interdum dapibus ex. In
          sapien felis, fermentum sed leo in, volutpat tristique libero.
          Pellentesque sed tortor volutpat, vehicula lorem sed, consectetur
          nibh. Nulla quis aliquam ante, id congue nunc. Vestibulum rhoncus,
          nisl vitae sagittis varius, metus mauris scelerisque metus, id
          placerat mi lectus et dolor. Praesent bibendum malesuada malesuada.
          Etiam accumsan ipsum vel enim sollicitudin, nec fringilla sapien
          porttitor. Curabitur urna mauris, mattis at risus eget, maximus mattis
          velit. Sed a orci nec mi dignissim tempus sed quis odio. Fusce ac
          euismod lectus. Vestibulum imperdiet quam sit amet magna commodo,
          venenatis malesuada dui hendrerit. Aliquam sit amet scelerisque magna.
          Quisque venenatis diam purus, quis sollicitudin ante facilisis
          venenatis.
        </Text>

        <Text>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Integer ac fringilla magna. In egestas sed
          metus at molestie. Aliquam erat volutpat. In eget condimentum est.
          Morbi maximus felis sit amet dolor luctus fringilla. Curabitur egestas
          et dui ut efficitur. Nulla nec nisl vestibulum, porttitor enim vel,
          rutrum eros. Mauris laoreet, ex eu volutpat porta, sapien felis
          consectetur leo, et lacinia sem arcu et quam. Quisque ut ullamcorper
          urna. Integer porta tortor vitae quam facilisis rhoncus. Nullam in
          maximus libero. Praesent aliquet nisl ut ipsum tempus molestie. Sed ac
          vehicula nunc. Praesent placerat aliquet vulputate.
        </Text>

        <Text>
          Integer eleifend nibh id diam tincidunt, interdum ullamcorper ante
          feugiat. Curabitur varius purus eget ante fermentum consectetur.
          Aliquam rutrum convallis metus, vitae volutpat mauris aliquet at.
          Praesent lobortis efficitur turpis, at pulvinar magna dignissim nec.
          Aliquam aliquet, lorem eget aliquet finibus, metus enim efficitur est,
          nec dictum orci nunc in felis. Nullam dapibus semper ligula sed
          tristique. Nullam aliquet nisi ac vulputate consectetur. Donec
          volutpat dolor a neque imperdiet, quis congue nisi porta. Cras rutrum
          dolor sed ipsum rutrum, ut placerat urna tincidunt. Nulla tincidunt ut
          libero nec varius. Praesent eu mauris tempus, tempor enim id,
          sollicitudin sapien. Sed lacus dui, elementum fermentum vehicula nec,
          congue ut metus.
        </Text>
      </BlurText>
      <Box>
        <Flex>
          <Text>$.01</Text>
          <Slider
            min={".01"}
            max={"10"}
            step={".01"}
            value={amount}
            onChange={handleSlider}
          />
          <Text>$10</Text>
        </Flex>

        <Button.Outline onClick={submitTip}>tip ${amount}</Button.Outline>
      </Box>
    </Box>
  );
}

export default App;
