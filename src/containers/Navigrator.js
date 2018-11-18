import {createStackNavigator} from "react-navigation";
import RootContainer from "./RootContainer";
import StyleGuideContainer from "./StyleGuideContainer";

export default createStackNavigator({
    Home: {
        screen: RootContainer,
    },
    StyleGuide: {
        screen: StyleGuideContainer,
    },
});