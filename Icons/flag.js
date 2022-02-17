import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlag = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="m22.2 2.1-.2-.2c-.1 0-.2-.1-.3-.1h-.3c-1.2.5-2.6.8-4.1.8-1.1 0-2.7-.6-4.4-1.1C10.9.8 8.6 0 6.6 0c-2.7 0-4 .5-4.4.8-.1 0-.3.2-.3.3-.1.2-.2.4-.2.5v21.8c0 .3.2.5.5.5s.5-.2.5-.5v-8.6c.4-.2 1.5-.7 4-.7 1.9 0 4 .5 6 1 1.8.4 3.4.8 4.7.8 2.3 0 4.1-.7 4.5-.9.1 0 .2-.1.3-.2.1-.1.1-.2.1-.4v-12c0-.1 0-.2-.1-.3zm-.9 12.2c-.6.2-2 .7-4 .7-1.2 0-2.8-.4-4.5-.8-2.1-.5-4.2-1-6.2-1-2.1 0-3.3.3-4 .6V1.6C3 1.5 4.1 1 6.7 1c1.8 0 3.9.7 6 1.4 1.7.6 3.4 1.2 4.7 1.2 1.4 0 2.7-.2 4-.7v11.4z"  /></Svg>;

export default SvgFlag;