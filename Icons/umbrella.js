import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUmbrella = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12.5.9V.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.4C5.2 1.1.1 6.4.1 12.9c0 .2.1.4.3.4.2.1.4 0 .5-.1.3-.3.7-.5 1.1-.7.8-.3 1.7-.3 2.5 0 .4.1.8.4 1.1.7.1.1.2.1.3.1.1 0 .2 0 .3-.1.7-.7 1.5-1.1 2.4-1.1.9 0 1.8.2 2.6.8l.3.2v8.6c0 .3-.1.7-.4.9-.5.5-1.3.5-1.8 0-.2-.2-.4-.6-.4-.9 0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 .6.2 1.1.7 1.6.4.4 1 .7 1.6.7s1.1-.2 1.6-.7c.4-.4.7-1 .7-1.6v-8.6l.3-.2c.7-.6 1.7-.8 2.6-.8.9 0 1.8.5 2.4 1.1.2.2.5.2.7 0 .3-.3.7-.5 1.1-.7.8-.3 1.7-.3 2.5 0 .4.1.8.4 1.1.7.1.1.2.1.3.1h.2c.2-.1.3-.2.3-.4 0-6.5-5.1-11.8-11.5-12zm10 10.7c-1.1-.4-2.2-.4-3.3 0-.4.1-.7.4-1.1.6-.8-.6-1.7-1-2.7-1.1-1.1-.1-2.3.2-3.2 1l-.2.2-.2-.2c-.8-.6-1.9-1-2.9-1h-.3c-1 0-2 .4-2.7 1.1-.3-.2-.7-.5-1.1-.6-1.1-.4-2.2-.4-3.3 0-.2.1-.3.1-.5.2.6-5.6 5.3-10 11-10s10.4 4.4 11 10c-.1 0-.3-.1-.5-.2z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgUmbrella;