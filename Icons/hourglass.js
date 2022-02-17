import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHourglass = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M20.4 21.4c-.5-4.1-2.3-5.7-3.7-7-.9-.8-1.6-1.4-1.6-2.4s.7-1.6 1.6-2.4c1.4-1.2 3.2-2.9 3.7-7 0-.6-.1-1.2-.6-1.7-.4-.5-1.1-.8-1.8-.8H6c-.7 0-1.3.3-1.8.8-.4.5-.6 1.1-.6 1.7.4 4.1 2.3 5.8 3.7 7 .9.8 1.6 1.4 1.6 2.4s-.7 1.6-1.6 2.5c-1.3 1.2-3.2 2.9-3.7 6.9 0 .6.1 1.2.5 1.7s1.1.8 1.8.8H18c.7 0 1.3-.3 1.8-.8.4-.5.6-1.1.6-1.7zm-1.3 1.1c-.2.3-.6.5-1 .5H6c-.4 0-.8-.2-1-.5-.2-.2-.3-.6-.3-.9.4-3.7 2.1-5.2 3.3-6.3 1-.9 1.9-1.7 1.9-3.2S9 9.7 8 8.9C6.7 7.7 5 6.2 4.7 2.5c0-.3.1-.7.3-1 .2-.3.6-.4 1-.4h12.1c.4 0 .8.1 1 .5.2.3.3.6.3 1-.4 3.7-2.1 5.2-3.3 6.4-1 .9-1.9 1.7-1.9 3.1s.9 2.2 1.9 3.1c1.3 1.2 3 2.7 3.3 6.4 0 .2-.1.6-.3.9z" style={{
    fill: "#263238"
  }} /><Path d="M12.9 15.8v-5.6c0-1.1 2.1-1.9 3.4-3.7.2-.3.1-.7-.3-.7H8.1c-.5 0-.6.4-.3.7 1.3 1.8 3.3 2.6 3.3 3.7v5.6c0 1.7-2.9 2.7-4.4 4.2-.6.6-.3 1.6.5 1.6h9.5c.9 0 1-1 .5-1.6-1.3-1.6-4.3-2.5-4.3-4.2z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgHourglass;