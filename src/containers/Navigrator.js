import { createStackNavigator } from "react-navigation";
import RootContainer from "./RootContainer";
import StyleGuideContainer from "./StyleGuideContainer";
import HomeWork from "./HomeWork";
import CategoriesList from "./CategoriesList";
import CategoryDetail from "./CategoryDetail";
import Filter from "./Filter";
import TabNavigator from "./TabNavigator";

const HomeNavigator = createStackNavigator({
  Home: {
    screen: RootContainer,
  }
})

const StyleGuideNavigator = createStackNavigator({
  StyleGuide: {
    screen: StyleGuideContainer,
  },
})

const HomeWorkNavigator = createStackNavigator({
  HomeWork: {
    screen: HomeWork,
  },
  CategoriesList: {
    screen: CategoriesList
  },
  CategoryDetail: {
    screen: CategoryDetail
  },
  Filter: {
    screen: Filter
  }
})

export default TabNavigator.createAppContainer(
  HomeNavigator,
  HomeWorkNavigator,
  StyleGuideNavigator
)