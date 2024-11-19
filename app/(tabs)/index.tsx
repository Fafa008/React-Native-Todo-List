import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import TodoList from "../../components/TodoList";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 255, 255)", // Corrected property
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
