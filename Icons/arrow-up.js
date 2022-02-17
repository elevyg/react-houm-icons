import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowUp = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M22.8 10.8 12.3.3c-.2-.2-.5-.2-.6 0L1.2 10.8c-.2.2-.2.5 0 .7s.5.2.6 0L12 1.3l10.2 10.2c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.7z" style={{
    fill: "#263238"
  }} /><Path d="M12 1.6c-.3 0-.5.2-.5.5v21.2c0 .3.2.5.5.5s.5-.2.5-.5V2.1c0-.2-.2-.5-.5-.5z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgArrowUp;