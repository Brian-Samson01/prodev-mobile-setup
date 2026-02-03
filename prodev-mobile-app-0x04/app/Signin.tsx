import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/_joinstyle";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In</Text>

      <View style={styles.formGroup}>
        <Text>Email</Text>
        <TextInput style={styles.formControl} />

        <Text>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
