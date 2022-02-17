import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHome = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="m23.9 11.6-4-3.8V2.1c0-.3-.2-.5-.5-.5h-2.5c-.3 0-.5.2-.5.5v2.5l-3.6-3.4c-.2-.2-.5-.3-.9-.3s-.7.1-.9.3L0 11.7c-.2.2-.2.5 0 .7.1.1.2.1.3.1s.2 0 .3-.1l1.7-1.6V22c0 .3.1.7.4.9s.6.4.9.4h4.9c.3 0 .5-.2.5-.5v-7c0-.2.1-.4.2-.5s.3-.2.5-.2h4.1c.2 0 .4.1.5.2s.2.3.2.5v7c0 .3.2.5.5.5h4.9c.3 0 .7-.1.9-.4s.4-.6.4-.9V10.7l1.7 1.6c.2.2.5.2.7 0 .4-.2.4-.5.3-.7zm-6.5-9h1.5V7l-1.5-1.5V2.6zm3.2 19.3c0 .1 0 .2-.1.2s-.1.1-.2.1h-4.5v-6.5c0-.5-.2-.9-.5-1.2-.3-.4-.8-.5-1.2-.5H9.9c-.5 0-.9.2-1.2.5-.3.3-.5.8-.5 1.2v6.5H3.8c-.1 0-.2 0-.2-.1 0 0-.1-.1-.1-.2V9.8l8.3-8h.2c.1 0 .2 0 .2.1l8.4 8v12z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgHome;