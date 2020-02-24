import React, {  useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import Main from './main';

export default function App() {
 
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
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






// Introduction To Hook

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import * as actions from './actions';
// import { connect } from 'react-redux';

// export default function App() {
//   const [count, setCount] = useState(0);

//   callAction = async () => {
//     await setCount(count + 1);
//     console.log(count)
//   }
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <Text>You clicked {count} times.</Text>
//         <Button
//           onPress={() => this.callAction()}
//           title="Click me"
//           color="red"
//           accessibilityLabel="Click this button to increase count"
//         />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// });
