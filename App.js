import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Chip } from "react-native-paper";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [chips, setChips] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [suggestedTags, setSuggestedTags] = useState([
    "Tags1",
    "Tags2",
    "Tags3",
    "Tags4",
    "Tags5",
    "Tags6",
    "Tags7",
    "Tags8",
    "Tags9",
    "Tags10",
    "Tags11",
  ]);

  const handleSearchInput = (text) => {
    setSearchInput(text);
  };

  const handleAdd = () => {
    let updatedChips = [...chips, searchInput];

    setChips(updatedChips);
    setSearchInput("");
    setIsSaved(true);
  };

  const handleSuggestedTags = (ele, index) => {
    let updatedChips = [...chips, ele];
    let updatedSuggestedTags = suggestedTags.filter((e, i) => i !== index);
    setChips(updatedChips);
    setSuggestedTags(updatedSuggestedTags);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Add Skills
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Start typing to search..."
            onChangeText={handleSearchInput}
            value={searchInput}
          />
        </View>

        {searchInput && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Text>{searchInput}</Text>
            <Button
              mode="outlined"
              onPress={handleAdd}
              buttonColor={"#fff"}
              textColor={"black"}
            >
              Add
            </Button>
          </View>
        )}
      </View>

      {isSaved && (
        <View style={{ marginTop: 32 }}>
          <Text>You can drag and drop to rearrange the order of display</Text>
          <View
            style={{ marginTop: 16, flexDirection: "row", flexWrap: "wrap" }}
          >
            {chips.map((ele) => (
              <Chip
                mode="flat"
                style={{ backgroundColor: "#eafafe", margin: 5 }}
              >
                {ele}
              </Chip>
            ))}
          </View>
        </View>
      )}
      <View style={{ marginTop: 32 }}>
        <Text style={{ fontWeight: "bold" }}>Add Suggested Tags</Text>
        <View style={{ marginTop: 16, flexDirection: "row", flexWrap: "wrap" }}>
          {suggestedTags.map((ele, index) => (
            <Chip
              mode="outlined"
              // onClose={() => {}}
              onPress={() => handleSuggestedTags(ele, index)}
              style={{ backgroundColor: "white", margin: 5 }}
            >
              {ele}
            </Chip>
          ))}
        </View>
      </View>

      <Button
        style={{ marginTop: 32 }}
        mode="contained"
        onPress={() => setIsSaved(false)}
        buttonColor={"#4285f4"}
        disabled={!isSaved}
      >
        Save
      </Button>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#ebedf0",
    alignItems: "center",
    padding: 8,
    marginTop: 32,
  },
  input: {
    paddingLeft: 8,
    flex: 1,
  },
});
