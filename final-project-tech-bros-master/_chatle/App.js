import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Chatbot from './Screens/Chatbot';
import Schedule from './Screens/Schedule';

const MainNavigator = createStackNavigator({
Home : {screen : Home},
},{
defaultNavigationOptions : {
headerTintColor : '#fff',
headerStyle : {
backgroundColor : '#000'
}
}});
const App = createAppContainer(MainNavigator);
export default App;
