import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString()); // Calculate the result
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
      setResult(""); // Clear result
    } else {
      setInput(input + value); // Add value to the input
    }
  };

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttons}>
        {["C", "(", ")", "/"].map((item) => (
          <Button
            key={item}
            mode="contained"
            onPress={() => handlePress(item)}
            style={styles.button}
          >
            {item}
          </Button>
        ))}
        {["7", "8", "9", "*"].map((item) => (
          <Button
            key={item}
            mode="contained"
            onPress={() => handlePress(item)}
            style={styles.button}
          >
            {item}
          </Button>
        ))}
        {["4", "5", "6", "-"].map((item) => (
          <Button
            key={item}
            mode="contained"
            onPress={() => handlePress(item)}
            style={styles.button}
          >
            {item}
          </Button>
        ))}
        {["1", "2", "3", "+"].map((item) => (
          <Button
            key={item}
            mode="contained"
            onPress={() => handlePress(item)}
            style={styles.button}
          >
            {item}
          </Button>
        ))}
        {["0", ".", "="].map((item) => (
          <Button
            key={item}
            mode="contained"
            onPress={() => handlePress(item)}
            style={[
              styles.button,
              item === "=" ? styles.equalsButton : null,
            ]}
          >
            {item}
          </Button>
        ))}
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Calc by Ritesh Kalanke</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
  },
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    fontSize: 30,
    color: "#333",
  },
  result: {
    fontSize: 24,
    color: "#888",
    marginTop: 10,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    width: "22%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  equalsButton: {
    backgroundColor: "green",
  },
  footer: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
  },
});
