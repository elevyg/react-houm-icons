import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBook = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.9 2.5c0-.1-.1-.3-.3-.4s-.3-.2-.4-.3c-.1 0-.3-.1-.5-.1-6 0-9.3 1.3-10.7 4-1.4-2.7-4.8-4-10.7-4-.1 0-.3 0-.5.1-.2 0-.3.1-.4.2-.2.2-.3.3-.3.5-.1.1-.1.3-.1.4v14.7c0 .9.6 1.4 1.3 1.4 6.9 0 9 1.5 10.3 3.1l.1.1h.4s.1 0 .1-.1c1.3-1.6 3.5-3.1 10.3-3.1.3 0 .7-.1.9-.4s.4-.6.4-.9V2.9c.2-.1.2-.3.1-.4zM1.3 18.1c-.3 0-.3-.4-.3-.4V2.8s0-.1.1-.1h.1c6.3 0 9.4 1.4 10.2 4.5v13.6c-1.9-1.9-5-2.7-10.1-2.7zm21.8-.3c0 .1 0 .2-.1.2s-.1.1-.2.1c-5.1 0-8.2.8-10.2 2.6V7.2c.8-3.1 4-4.5 10.2-4.5h.1s.1 0 .1.1l.1.1v14.9z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgBook;