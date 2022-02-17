import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDrill = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 6.7h-1V4.6c0-.3-.2-.5-.5-.5h-1.3v-.2c0-.3-.2-.5-.5-.5H.5c-.1 0-.3 0-.4.2-.1.1-.1.3-.1.4l1.5 6.8c0 .2.2.4.5.4h1L.3 20v.4c0 .1.2.2.4.2h7.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6.4l2-6h1.8c.1 0 .2 0 .3-.1.1-.1.1-.2.1-.3v-1.9h9.5c.3 0 .5-.2.5-.5v-.5H22c.3 0 .5-.2.5-.5v-2h1c.3 0 .5-.2.5-.5 0-.4-.2-.6-.5-.6zM1.4 6.1l1.8.8V8L2 8.5l-.6-2.4zm0 13.5L4 11.2h1.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3l-.2-.8 1.7-.8c.2-.1.3-.2.3-.4V6.6c0-.2-.1-.4-.3-.4L1.2 5 1 4.4h16v5.9H7.3c-.3 0-.5.2-.5.5s.2.5.5.5h1L7.7 13v.2H5.5c-.3 0-.5.2-.5.5s.2.5.5.5h1.9l-.7 2.1H4.5c-.3 0-.5.2-.5.5s.2.5.5.5h1.8l-.8 2.5H1.4zm8.4-7h-1l.5-1.4h.5v1.4zm9.9-2.4H18V4.4h1.8v5.8zm1.8-1h-.9V5.1h.9v4.1z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgDrill;