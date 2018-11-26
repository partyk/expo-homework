import { createBottomTabNavigator, createAppContainer } from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react"

export default class MainNavigator {
  static createAppContainer = (Home, HomeWork, StyleGuide) => {
    /**
     * https://reactnavigation.org/docs/en/tab-based-navigation.html
     */
    const TabNavigator = createBottomTabNavigator(
      {
        Home,
        HomeWork,
        StyleGuide
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state
            let iconName
            if (routeName === "Home") {
              iconName = `ios-home${focused ? "" : "-outline"}`
            } else if (routeName === "HomeWork") {
              iconName = `ios-albums${focused ? "" : "-outline"}`
            } else if (routeName === "StyleGuide") {
              iconName = `ios-book${focused ? "" : "-outline"}`
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return (
              <Ionicons
                name={iconName}
                size={horizontal ? 20 : 25}
                color={tintColor}
              />
            )
          },
        }),
        tabBarOptions: {
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        },
      },
    )
    return createAppContainer(TabNavigator)
  }
}
