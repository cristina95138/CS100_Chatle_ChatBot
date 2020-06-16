import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Text } from 'react-native';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQL1KHOzLR5Yx6RBI9yWyZT88gxuYBbHE",
    authDomain: "chatle-feee5.firebaseapp.com",
    databaseURL: "https://chatle-feee5.firebaseio.com",
    projectId: "chatle-feee5",
    storageBucket: "chatle-feee5.appspot.com",
    messagingSenderId: "907342248421",
    appId: "1:907342248421:web:4a805cea9f1a46ac63170c",
    measurementId: "G-2QEBKV01FD"
};

if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
}

export default class Login extends Component {
constructor(props){
super(props);
this.state = {
email : '',
password : '',
}}

static navigationOptions = {
title : 'Login',
}

loginUser = () => {
try{
firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {this.props.navigation.navigate('Home');})
}
catch(err){
console.log(err.toString());
}}

signUpUser = () => {
try{
if(this.state.password < 6){
Alert.alert('The password length is less than 6');
}

else{
firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
this.props.navigation.navigate('Home');
}}
catch(err){
console.log(err.toString());
}}

render() {
return (
<Container>
<Content>

<Form>
<Item floatingLabel><Label>Username</Label>
<Input
onChangeText = {email => this.setState({email : email})}
placeholder = 'Username'
value = {this.state.email}/>
</Item>

<Item floatingLabel last><Label>Password</Label>
<Input
secureTextEntry
onChangeText = {password => this.setState({password : password})}
placeholder = 'Password'
value = {this.state.password}
/>
</Item>

<Button
onPress = {() => this.loginUser()}
style={{marginTop : 40}}
full dark block><Text style={{color:'#fff'}}>Login</Text>
</Button>

<Button
onPress = {() => this.signUpUser()}
style={{marginTop : 15}}full dark block><Text style={{color:'#fff'}}>Register</Text></Button>

</Form></Content>
</Container>
);}}
