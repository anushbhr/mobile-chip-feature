import { Text, View } from "react-native";
import { Chip } from "react-native-paper";

function DisplayChips({
  style,
  fontWeight,
  list,
  handleSuggestedTags,
  chipBgColor,
  chipMode,
  text,
}) {
  const handleOnPress = (ele, index) => {
    handleSuggestedTags(ele, index);
  };
  return (
    <View style={{ marginTop: 16 }}>
      <Text style={{ fontWeight: fontWeight ? "bold" : "normal" }}>{text}</Text>
      <View style={style}>
        {list?.map((ele, index) => (
          <Chip
            key={index}
            mode={chipMode ? chipMode : "flat"}
            onClose={() => {}}
            onPress={() =>
              handleSuggestedTags ? handleOnPress(ele, index) : {}
            }
            style={{ backgroundColor: chipBgColor, margin: 5 }}
          >
            {ele}
          </Chip>
        ))}
      </View>
    </View>
  );
}
export default DisplayChips;
