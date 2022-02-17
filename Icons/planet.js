import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlanet = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M20.1 13.2c0-.4.1-.8.1-1.2 0-4.5-3.7-8.2-8.2-8.2-1.9 0-3.7.7-5 1.8-2.6-1-6-1.9-6.8-.4-.2.3-.3.7-.1 1.1.3 1.2 1.7 2.7 3.8 4.5 0 .4-.1.8-.1 1.2 0 4.5 3.7 8.2 8.2 8.2 1.9 0 3.7-.7 5-1.8 1.9.7 3.7 1.2 4.9 1.2.9 0 1.6-.2 1.9-.8.9-1.4-1.5-3.8-3.7-5.6zm-.9-1.2c0 2.1-.9 4-2.4 5.3-1.8-.7-3.9-1.7-6.2-3-2.3-1.3-4.2-2.6-5.7-3.8.7-3.2 3.6-5.7 7-5.7 4.1 0 7.3 3.2 7.3 7.2zM1 6.1v-.4c.2-.4 1.8-.5 5.1.7-.9 1-1.6 2.1-2 3.5-1.8-1.7-2.9-3-3.1-3.8zm11 13.1c-4 0-7.2-3.2-7.2-7.2v-.4c1.5 1.2 3.4 2.4 5.4 3.6 1.9 1.1 3.9 2.1 5.8 2.9-1.1.7-2.5 1.1-4 1.1zm11-.9c-.3.5-2.3.4-5.1-.7.9-1 1.6-2.1 2-3.5 2.7 2.4 3.3 3.8 3.1 4.2z"  /></Svg>;

export default SvgPlanet;