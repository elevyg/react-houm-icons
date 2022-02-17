import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRose = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M20.6 5.1c-.1-.2-.3-.2-.5-.2-.6.1-1.2.3-1.9.5-.8-1.8-1.7-3.6-1.7-3.6-.1-.1-.2-.2-.4-.2-.1 0-1.8 0-4 1.2C10.3.7 8.1 0 8 0c-.2 0-.4 0-.5.2-.8 1.1-1.4 2.5-1.7 3.5-1.1-.3-1.9-.4-2-.4-.2 0-.4 0-.5.2-.1.2 0 .4.1.6 1.9 2 1.8 4.1 1.5 6.2 0 0-.2 1.6 0 3-.6 1.2-.9 2.4-.9 3.8 0 4.1 3.2 6.9 7.9 6.9s7.9-2.9 7.9-7.2c0-1.2-.3-2.4-.6-3.4-.6-2.3-1.2-4.4 1.4-7.7.1-.2.1-.4 0-.6zm-3.3.5c-1.5.5-3.1 1.1-4.8 1.8-.9-1.2-1.8-1.8-2.5-2.2 2.6-2.2 5-2.6 5.8-2.6.3.5.9 1.7 1.5 3zM8 1c.6.2 2 .9 3.1 2.3-.6.4-1.3.9-2.1 1.5-.8-.4-1.6-.6-2.4-.9.3-.9.8-2 1.4-2.9zm-2.1 9.4c.2-1.9.4-3.9-.9-5.9 1.2.3 3 .8 4.5 1.6.7.4 1.4.9 2.2 1.8-.8.4-1.2.6-2.3 1.2l-.2.2c-1.4.8-2.5 1.7-3.3 2.7-.1-.9 0-1.6 0-1.6zm12.4 3.2c.3 1.1.6 2.1.6 3.2 0 3.7-2.8 6.2-6.9 6.2-4.3 0-7-2.4-7-6 0-2.9 1.4-5.1 4.6-6.9l.3-.1c1.1-.6 1.5-.9 2.4-1.3 1.9-.9 3.6-1.6 5.3-2.1.5-.1 1-.3 1.5-.4-2 3-1.4 5.3-.8 7.4z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgRose;