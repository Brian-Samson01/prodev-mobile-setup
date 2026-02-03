import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/_joinstyle";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Create Account</Text>

      <View style={styles.formGroup}>
        <Text>Full Name</Text>
        <TextInput style={styles.formControl} />

        <Text>Email</Text>
        <TextInput style={styles.formControl} />

        <Text>Password</Text>
        <TextInput style={styles.formControl} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
