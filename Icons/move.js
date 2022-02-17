import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMove = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M24 12v-.2s0-.1-.1-.1l-4.1-4.1c-.2-.2-.5-.2-.6 0-.2.2-.2.5 0 .6l3.3 3.3h-10v-10l3.3 3.3c.1.2.2.2.3.2s.2 0 .3-.1c.2-.2.2-.5 0-.6L12.3.2h-.4s-.1 0-.1.1L7.6 4.2c-.2.2-.2.5 0 .6s.5.2.6 0l3.3-3.3v10h-10l3.3-3.3c.2-.2.2-.5 0-.6-.2-.2-.5-.2-.6 0L.1 11.7s0 .1-.1.1v.4s0 .1.1.1l4.1 4.1c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.6l-3.3-3.3h10v10l-3.3-3.3c-.2-.2-.5-.2-.6 0-.2.2-.2.5 0 .6l4.1 4.1.1.1h.4s.1 0 .1-.1l4.1-4.1c.2-.2.2-.5 0-.6s-.5-.2-.6 0l-3.3 3.3v-10h10l-3.3 3.3c-.2.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1l4.1-4.1.1-.1V12z"  /></Svg>;

export default SvgMove;