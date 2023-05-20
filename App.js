import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Divider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";
import DisplayChips from "./components/DisplayChips";

const tags = [
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
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [chips, setChips] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [suggestedTags, setSuggestedTags] = useState(tags);

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

  const handleSave = () => {
    setIsSaved(false);
    setChips([]);
    setSuggestedTags(tags);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", marginTop: 40 }}
            >
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
              <>
                <Divider bold style={{ marginTop: 16 }} />
                <View style={styles.displayInputValContainer}>
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
              </>
            )}
          </View>

          <Divider
            bold
            style={{ marginTop: 16, height: 10, backgroundColor: "#ebedf0" }}
          />

          <View style={styles.container}>
            {(isSaved || chips.length > 0) && (
              <>
                <DisplayChips
                  chipBgColor={"#eafafe"}
                  list={chips}
                  style={styles.displayChips}
                  text={
                    "You can drag and drop to rearrange the order of display"
                  }
                />

                <Divider bold style={{ marginTop: 16 }} />
              </>
            )}

            <DisplayChips
              chipBgColor={"#fff"}
              chipMode="outlined"
              list={suggestedTags}
              style={styles.displayChips}
              text={"Add Suggested Tags"}
              handleSuggestedTags={handleSuggestedTags}
              fontWeight={"bold"}
            />

            <Button
              style={{ marginTop: 32 }}
              mode="contained"
              onPress={handleSave}
              buttonColor={"#4285f4"}
              disabled={!isSaved}
            >
              Save
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    paddingHorizontal: 8,
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
  displayInputValContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  displayChips: { marginTop: 16, flexDirection: "row", flexWrap: "wrap" },
});
