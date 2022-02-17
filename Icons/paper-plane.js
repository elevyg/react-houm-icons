import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPaperPlane = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M24 .7c0-.2-.1-.3-.2-.5s-.3-.2-.5-.2h-.5L.6 8.4c-.2 0-.3.2-.4.3-.2.2-.2.4-.2.6 0 .2 0 .4.2.5.1.1.3.3.4.3l9.2 3.7s.1 0 .1.1c0 0 .1.1.1.2l3.7 9.2c0 .2.2.3.3.4s.3.2.5.2.3 0 .5-.1c.1-.1.3-.2.3-.4L24 1.2V.7zM1 9.3l21-7.9L10.3 13h-.1L1 9.3zM14.7 23 11 13.9v-.1L22.6 2.1 14.7 23z"  /></Svg>;

export default SvgPaperPlane;