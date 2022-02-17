import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheckmark = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M7.4 21.2c-.1 0-.2 0-.3-.1L.2 14.6c-.2-.2-.2-.5 0-.6s.5-.2.6 0l6.5 6.2L23.1 3c.2-.2.5-.2.6 0 .2.2.2.5 0 .6L7.8 21c-.1.1-.2.2-.4.2z"  /></Svg>;

export default SvgCheckmark;