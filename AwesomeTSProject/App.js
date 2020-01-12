import React, { Component } from 'react';
import { Text, View, TextInput, Button, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  bigBlue: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 25,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
});

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.red}>{this.props.text}</Text>
    );
  }
}


export default class TanyasApp extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let pic = {
      uri: 'https://images.squarespace-cdn.com/content/v1/58793dd7e58c6250be5550e8/1577276449388-Q2IP5FFA7OX8D03ZA228/ke17ZwdGBToddI8pDm48kPGVkWZ51kxnRyNNT5cHApl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URGiY_EkbABWNgR4BCp7IbPini8tXBiaDWPQ7WDCcb2SzwMy-Jd4qnWKZiGmV5bqqQ/rr.jpg?format=1500w'
    };
    return (
      <View style={{ flex: 1,  flexDirection: 'column', padding: 10, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.bigBlue}>Welcome to Tanya's first app! {"\n"}

        </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>{"\n"}</Text>
        <Blink text='She is super excited to build apps' />
        <Blink text='and she just learned how to make text blink!' />
         <Text>{"\n"}</Text>
      <View style={{width: 300, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 200, height: 150, backgroundColor: 'steelblue'}} />
        <Text>{"\n"}</Text>

      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate english to my special language!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      <Button
        onPress={() => {
          alert('YAY thanks for pressing me!');
        }}
        title="Press Me"
      />
      </View>
    );
  }
}






