import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDocument = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M20.7 8.5 12.9.7c-.4-.4-1-.7-1.6-.7H5.9c-.8 0-1.7.4-2.2 1s-1 1.4-1 2.2v17.7c0 .8.3 1.6.9 2.2s1.4.9 2.2.9h12.3c.8 0 1.6-.3 2.2-.9.6-.6.9-1.4.9-2.2V10.1c.2-.6-.1-1.2-.5-1.6zm-1 .4h-5.9c-.3 0-.7-.1-.9-.4-.2-.2-.4-.6-.4-.9V1.7l7.2 7.2zm.7 11.9c0 .6-.2 1.1-.6 1.5-.4.4-1 .6-1.5.6H5.9c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-1-.6-1.5V3.2c-.1-.6.2-1.2.5-1.6.5-.4 1-.6 1.6-.6h5.7v6.6c0 .6.2 1.1.7 1.6s1 .7 1.6.7h6.6v.2c-.1 0-.1 10.7-.1 10.7z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgDocument;