import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../store/auth.context';

function WelcomeScreen() {
  const [message, setMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios.get(
      `https://react-native-course-7c95c-default-rtdb.firebaseio.com/message.json?auth=${token}`
    ).then(response => {
      setMessage(response.data);
    });
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
