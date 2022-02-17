import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgContract = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M16.3 15.6h6.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-7.3c-.3 0-.5.2-.5.5v7.3c0 .3.2.5.5.5s.5-.2.5-.5v-6.2l7.6 7.6c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.7l-7.6-7.5zM8.8 1c-.2 0-.4.2-.4.5v6.2L.8.1C.6 0 .3 0 .1.1S0 .6.1.8l7.6 7.6H1.5c-.3 0-.5.2-.5.4 0 .3.2.5.5.5h7.3c.3 0 .5-.2.5-.5V1.5c0-.2-.2-.5-.5-.5zm6.4 8.3h7.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6.2L23.9.7c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-7.6 7.6V1.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v7.3c.1.3.3.5.6.5zm-6.4 5.4H1.5c-.3 0-.5.2-.5.5s.2.5.5.5h6.2L.1 23.3c-.2.2-.2.5 0 .7h.4c.2 0 .2 0 .3-.1l7.6-7.6v6.2c0 .3.2.5.5.5s.5-.2.5-.5v-7.3c-.1-.3-.3-.5-.6-.5z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgContract;