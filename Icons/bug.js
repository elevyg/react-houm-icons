import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBug = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 13.3h-3.9V9.6c1.7-1.4 1.8-3.4 1.8-5.5 0-.3-.2-.5-.5-.5s-.5.2-.5.5c0 1.7-.1 3.3-1.1 4.4-.4-1.3-1.2-2.3-2.5-3 0-.2.1-.4.1-.6 0-1.3-.5-2.5-1.4-3.4C14.6.6 13.4 0 12 0c-1.3 0-2.5.5-3.4 1.4-.9 1-1.4 2.2-1.4 3.6 0 .2 0 .4.1.6-1.2.6-2.1 1.6-2.5 2.8-.9-1-1.1-2.3-1.1-4.4 0-.3-.2-.5-.5-.5s-.4.3-.4.6c0 2.1.1 4 1.8 5.5v3.8h-4c-.3 0-.5.2-.5.5s.2.5.5.5h3.9v1.3c0 1.1.2 2.2.7 3.1-1.4 1.2-2.4 2.6-2.4 4.9 0 .3.2.5.5.5s.5-.2.5-.5c0-1.9.7-2.9 1.9-4C6.9 21.6 9.3 23 12 23s5.1-1.4 6.4-3.6c1.2 1.1 1.9 2.2 1.9 4 0 .3.2.5.5.5s.5-.2.5-.5c0-2.2-1-3.6-2.4-4.9.4-1 .7-2 .7-3.1v-1.3h3.9c.3 0 .5-.2.5-.5s-.2-.3-.5-.3zM8.1 4.9c0-1.1.4-2 1.1-2.8C10 1.4 11 1 12 1s2 .4 2.8 1.1c.7.8 1.2 1.8 1.2 2.8V5c-1.1-.4-2.4-.6-3.9-.6s-2.8.2-3.9.7c-.1 0-.1-.1-.1-.2zm4.4 17.2V8.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v13.6c-3.4-.2-6.1-3.1-6.1-6.6v-5.3c0-3.5 3.4-4.8 6.6-4.8 1.3 0 2.8.2 4 .7 1.4.7 2.5 1.9 2.5 4.1v5.3c.1 3.5-2.6 6.4-6 6.6z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgBug;