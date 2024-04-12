import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function onPressHanging(value) {
  Alert.alert(value);
}

function Slider_Icon({data}) {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => onPressHanging(item.value)}>
        <FontAwesomeIcon name={item.icon} size={30} color="#2C7865" />
        <Text className="pt-1">{item.value}</Text>
      </TouchableOpacity>
    );
  };

  const numColumns = Math.min(4, data.length);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').width / numColumns}
        decelerationRate="fast"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iconContainer: {
    width: Dimensions.get('window').width / 4,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default Slider_Icon;
