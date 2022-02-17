import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLeaf = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.6 19.4c-1.1-.2-2.2-.4-3.2-.7 1.8-4.1 0-8.9-4.5-11.9-2.2-1.4-4.4-1.7-6.5-2.1-2.8-.5-5.5-.9-8-3.6C1 .9.8 1 .7 1c-.4.1-.5.5-.6.6C-.4 3.9.7 15.3 6 20.2c2 1.8 4.7 2.9 7.2 2.9.5 0 1 0 1.5-.1 2.3-.3 4.1-1.5 5.1-3.2 1.1.3 2.3.5 3.5.7h.1c.2 0 .4-.2.5-.4.1-.4-.1-.6-.3-.7zm-9 2.6c-2.8.4-5.8-.5-8-2.5C1.9 15.1.8 4.8 1 2.3c2.6 2.6 5.4 3 8.2 3.5 2.1.3 4.1.7 6.1 2 4.1 2.7 5.8 7.1 4.1 10.8-4.3-1.3-8-3.6-11.7-7.1-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7 3.8 3.6 7.6 5.9 11.9 7.2-.8 1.4-2.4 2.3-4.3 2.6z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgLeaf;