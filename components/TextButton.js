import { Text, View } from "react-native";

function TextButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default TextButton;
