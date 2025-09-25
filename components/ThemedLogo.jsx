import { Image, useColorScheme } from "react-native";

// Add file extensions to your imports
import DarkLogo from "../assets/img/dark_logo.png";
import LightLogo from "../assets/img/light_logo.png";

const ThemedLogo = ({ style, ...props }) => {
  // Added style prop destructuring
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return (
    <Image
      source={logo}
      style={[{ width: 150, height: 150 }, style]} // Fixed: heigth → height
      {...props}
    />
  );
};

export default ThemedLogo;
