import {createStackNavigator} from 'react-navigation';
import RootContainer from './RootContainer';
import StyleGuideContainer from './StyleGuideContainer';
import HomeWork3 from  './HomeWork3';

export default createStackNavigator({
    Home: {
        screen: RootContainer,
    },
    StyleGuide: {
        screen: StyleGuideContainer,
    },
    HomeWork3: {
        screen: HomeWork3
    }
});