import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgElevator = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.1 0H.9C.6 0 .4.2.4.5v3.4c0 .3.2.5.5.5s.5-.2.5-.5V1h21.2v14.5c0 .3.2.5.5.5s.5-.2.5-.5V.5c0-.3-.2-.5-.5-.5z"  /><Path d="M23.1 17c-.3 0-.5.2-.5.5v5.6h-3.7V6.9c0-.3-.2-.5-.5-.5H5.5c-.3 0-.5.2-.5.5V23H1.4V6.3c0-.3-.2-.5-.5-.5s-.5.2-.5.5v17.2c0 .3.2.5.5.5h22.2c.3 0 .5-.2.5-.5v-6c0-.3-.2-.5-.5-.5zm-11.6 6.1H6V7.4h5.5v15.7zm6.5 0h-5.5V7.4H18v15.7z"  /><Path d="m2.8 12.1-.7 1c-.1.2-.1.5.1.7.2.1.5.1.7-.1l.3-.4.3.4c.1.1.2.2.4.2.1 0 .2 0 .3-.1.2-.1.2-.4.1-.7l-.7-1c-.2-.2-.6-.2-.8 0zm-.7 3.5.7 1c.1.1.2.2.4.2s.3-.1.4-.2l.7-1c.1-.2.1-.5-.1-.7-.2-.1-.5-.1-.6.1l-.3.4-.4-.4c-.1-.2-.4-.2-.7-.1s-.3.4-.1.7zM17.4 2H3.9c-.3 0-.5.2-.5.5v2.4c0 .3.2.5.5.5h16.2c.3 0 .5-.2.5-.5V2.5c0-.3-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h.5v1.5H4.4V3h13.1c.3 0 .5-.2.5-.5s-.3-.5-.6-.5z"  /><Path d="M5.6 3.7s0 .1.1.1.1 0 .1-.1 0-.1-.1-.1-.1.1-.1.1z"  /><Path d="M5.1 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.2-.6-.6-.6c-.3 0-.6.3-.6.6zm1 0c0 .2-.1.3-.3.3s-.4-.1-.4-.3.1-.3.3-.3.4.1.4.3zm1 0s0 .1.1.1.1 0 .1-.1 0-.1-.1-.1-.1.1-.1.1z"  /><Path d="M6.7 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.3-.6-.6-.6c-.4 0-.6.3-.6.6zm.9 0c0 .2-.1.3-.3.3s-.4-.1-.4-.3.1-.3.3-.3.4.1.4.3zm1.1 0s0 .1.1.1c0 0 .1 0 .1-.1s0-.1-.1-.1l-.1.1z"  /><Path d="M8.2 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.2-.6-.5-.6c-.4 0-.7.3-.7.6zm1 0c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3s.1-.3.3-.3c.1 0 .3.1.3.3zm1.1 0s0 .1.1.1.1 0 .1-.1 0-.1-.1-.1-.1.1-.1.1z"  /><Path d="M9.8 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.3-.6-.6-.6-.6.3-.6.6zm1 0c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3s.1-.3.3-.3.3.1.3.3zm1.1 0s0 .1.1.1.1 0 .1-.1 0-.1-.1-.1-.1.1-.1.1z"  /><Path d="M11.4 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.2-.6-.6-.6c-.3 0-.6.3-.6.6zm1 0c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3s.1-.3.3-.3c.1 0 .3.1.3.3zm1 0s0 .1.1.1.1 0 .1-.1 0-.1-.1-.1l-.1.1z"  /><Path d="M12.9 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.3-.6-.6-.6-.6.3-.6.6zm1 0c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3s.1-.3.3-.3.3.1.3.3zm1.1 0s0 .1.1.1.1 0 .1-.1 0-.1-.1-.1l-.1.1z"  /><Path d="M14.5 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.3-.6-.6-.6-.6.3-.6.6zm1 0c0 .2-.1.3-.3.3s-.3-.1-.3-.3.1-.3.3-.3.3.1.3.3zm1.1 0s0 .1.1.1c0 0 .1 0 .1-.1s0-.1-.1-.1l-.1.1z"  /><Path d="M16.1 3.7c0 .3.3.6.6.6s.6-.3.6-.6-.3-.6-.6-.6-.6.3-.6.6zm1 0c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3 0-.2.1-.3.3-.3.1 0 .3.1.3.3zm1.2.2s.1 0 .1-.1 0-.1-.1-.1c0 0-.1 0-.1.1s0 .1.1.1z"  /><Path d="M18.3 4.4c.3 0 .6-.3.6-.6s-.3-.6-.6-.6-.6.3-.6.6.3.6.6.6zm0-1c.2 0 .3.1.3.3s-.1.3-.3.3c-.2 0-.3-.1-.3-.3-.1-.2.1-.3.3-.3z"  /></Svg>;

export default SvgElevator;