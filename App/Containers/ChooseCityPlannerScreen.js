import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import ButtonRectangle from './ButtonRectangle'
import { StackNavigator } from 'react-navigation'
// Screens

// Styles
import styles from './Styles/ChooseCityPlannerStyles'
import DiscoverScreen from './DiscoverScreen'

/* Background: Replace BG.png with a 750x1500 solid color of choice;
               Images.js will store the relative path of the image in the Images dir;
               styles.backgroundImage has offset values set at 0, adjust values if you don't want the
               background to cover the whole screen
    ButtonBox: style - play around with border color and widths
               image - the icon that is displayed in each ButtonBox
    ButtonBoxStyles.container to modify properties of the ButtonBox
               Ex. change width to fit more or less boxes in a row
 */
class ChooseCityPlannerScreen extends React.Component {
  // used to redirect to another stuff
  openComponents = () => {
    this.props.navigation.navigate('DiscoverScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <Text style={styles.sectionText}>
          Discover
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.buttonsContainer}>
            <ButtonRectangle onPress={this.openComponents} style={styles.componentButton} image={Images.food} text={'Mother Russia'} />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonRectangle onPress={this.openUsage} style={styles.usageButton} image={Images.hotels} text='Landmarks' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonRectangle onPress={this.openApi} style={styles.apiButton} image={Images.api} text='Bars' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonRectangle onPress={this.openTheme} style={styles.deviceButton} image={Images.theme} text='Shops' />
          </View>
        </ScrollView>
      </View>
    )
  }
}
// import screens here too
export default StackNavigator({
  ChooseCityPlannerScreen: {screen: ChooseCityPlannerScreen},
  DiscoverScreen: {screen: DiscoverScreen}
}, {
  initialRouteName: 'ChooseCityPlannerScreen',
  headerMode: 'none'
})
