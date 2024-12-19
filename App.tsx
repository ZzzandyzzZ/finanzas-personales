import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface Props {

}
export default function App() {
  const a:string = 'asdasd'
  return (
    <View style={styles.container}>
      <Text>Hello World asdas</Text>
      <Text>{a}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
