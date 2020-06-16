import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat, Bubble,Day } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { index,TypingAnimation } from 'react-native-typing-animation'
import{
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { dialogflowConfig } from './env';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/LSkLehu.png'
};




class App extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! My name is Chatle! Let's start working on your schedule.\nStart by typing 'add a class' or 'view my schedule'`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }


  
  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }


  renderDay(props) {
    return <Day {...props} textStyle={{color: 'black'}}/>
  }
  renderBubble(props)
  {
      return (
          <Bubble
          {...props}
          textStyle={{
            right: {color: 'black',
          }
        }}
          wrapperStyle={{
              left: {
                  backgroundColor: 'rose',
              },
              right:{
                  backgroundColor: 'white'
              }
            }}
            />
      )
  }
  render() {
    return (
      
     
      <View style={{ flex: 1, backgroundColor: '#89cff0', height: 100 }}>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={0}
        dotY={6}/>
      <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={20}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={40}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={60}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={80}
        dotY={6}/>
      <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={100}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={120}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={140}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={160}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={180}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={200}
        dotY={6}/>
        <TypingAnimation
        dotColor="red"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={220}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={240}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={260}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={280}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={300}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={320}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={340}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={360}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={380}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={400}
        dotY={6}/>
         <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={420}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={440}
        dotY={6}/>
        <TypingAnimation
        dotColor="orange"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={460}
        dotY={6}/>
        <TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={480}
        dotY={6}/>
        <TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={500}
        dotY={6}/>
        <TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={520}
        dotY={6}/>

         <TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={540}
        dotY={6}/>

<TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={560}
        dotY={6}/>

<TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={580}
        dotY={6}/>

<TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={600}
        dotY={6}/>
         <TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={620}
        dotY={6}/>

<TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={640}
        dotY={6}/>

<TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={660}
        dotY={6}/>

<TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={680}
        dotY={6}/>
         <TypingAnimation
        dotColor="yellow"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={700}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={720}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={740}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={760}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={780}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={800}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={820}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={840}
        dotY={6}/>

<TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={860}
        dotY={6}/>

        <TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={880}
        dotY={6}/>
        <TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={900}
        dotY={6}/>
        <TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={920}
        dotY={6}/>
        <TypingAnimation
        dotColor="green"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={940}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={960}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={980}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1000}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1020}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1040}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1060}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1080}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1100}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1120}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1140}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1160}
        dotY={6}/>
        <TypingAnimation
        dotColor="blue"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1180}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1200}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1220}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1240}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1260}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1280}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1300}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1320}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1340}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1360}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1380}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1400}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1420}
        dotY={6}/>
        <TypingAnimation
        dotColor="violet"
        dotMargin={3}
        dotAmplitude={10}
        dotSpeed={0.15}
        dotRadius={5}
        dotX={1440}
        dotY={6}/>

     
        <GiftedChat 
        

        renderDay={this.renderDay}
          listViewProps={{
            contentContainerStyle: {
              flex:1
            }
          }}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          
          renderBubble = {this.renderBubble}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default App;
