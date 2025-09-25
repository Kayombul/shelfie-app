import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router"; // Linking pages

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo"; // Fixed typo in path
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The number 1
      </ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1, // Fixed typo: borderBottonWidth → borderBottomWidth
  },
});
