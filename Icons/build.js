import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBuild = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M3.2 23.9c-.4 0-.8-.1-1.1-.2s-.8-.4-1-.7c-.3-.3-.5-.7-.7-1-.1-.4-.2-.8-.2-1.2 0-.4.1-.9.3-1.2s.4-.7.8-1l9.1-8.3c.2-.1.3-.4.4-.6V9c-.9-2.9-.4-5.4 1.2-7C13.8.1 16.8-.4 19.1.6h.1l.1.1s.1.1.1.2v.2c0 .1-.1.1-.1.2L16 4.6c-.2.2-.4.6-.4.9 0 .3.1.7.4.9L17.4 8c.5.5 1.3.5 1.8 0l3.4-3.4h.4l.1.1s.1.1.1.2c1 1.9.6 5.2-1.4 7.2-1.6 1.5-4 2-6.8 1.3h-.7c-.2 0-.4.2-.6.4L5.3 23c-.3.3-.6.6-1 .8-.4.2-.8.3-1.2.3.2-.2.2-.2.1-.2zM16.6 1.1c-1.5 0-2.9.6-4 1.6-1.9 1.9-1.4 4.8-1 5.9.1.4.1.8 0 1.2-.1.4-.3.8-.6 1l-9.2 8.3c-.2.2-.4.4-.5.7-.1.3-.2.6-.2.9 0 .3 0 .6.1.9.1.3.3.5.5.7.2.2.5.4.7.5.3.1.6.2.9.2.3 0 .6-.1.9-.2.3-.1.5-.3.7-.5l8.5-9.2c.3-.3.6-.5 1-.6s.8-.1 1.2 0c1.1.3 3.9.8 5.8-1 1.5-1.5 1.9-3.9 1.4-5.5L20 8.7c-.4.4-1 .7-1.6.7-.6 0-1.1-.2-1.6-.7l-1.5-1.5c-.4-.4-.7-1-.7-1.6s.2-1.1.7-1.6l2.9-2.9h-1.6zm3 7.3zm-.9-6.9z"  /><Path d="M3.3 21.7c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9z"  /></Svg>;

export default SvgBuild;