import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHeart = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12 22.7c-.3 0-.6-.1-.8-.2C5.6 18.8 0 14.1.1 7.4.1 4 2.9 1.3 6.3 1.3c3.1 0 5 2.1 5.8 3.3.8-1.1 2.7-3.3 5.8-3.3 3.3 0 6.1 2.7 6.2 6.1 0 6.8-5.6 11.5-11.1 15.1-.4.1-.7.2-1 .2zM6.2 2.2C3.4 2.2 1.1 4.6 1 7.4c0 6.3 5.4 10.8 10.7 14.3.1.1.4.1.5 0 5.3-3.5 10.8-8 10.7-14.3 0-2.8-2.3-5.2-5.2-5.2-3.5 0-5.3 3.4-5.3 3.5-.1.3-.7.3-.9 0 .1-.1-1.7-3.5-5.3-3.5z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgHeart;