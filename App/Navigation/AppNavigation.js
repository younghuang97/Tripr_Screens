import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import DiscoverScreen from '../Containers/DiscoverScreen'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'
import ChooseCityPlannerScreen from '../Containers/ChooseCityPlannerScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  DiscoverScreen: {screen: DiscoverScreen},
  ChooseCityPlannerScreen: {screen: ChooseCityPlannerScreen},
  PresentationScreen: { screen: PresentationScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ChooseCityPlannerScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
