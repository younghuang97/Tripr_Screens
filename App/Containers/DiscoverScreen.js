import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import ButtonSquare from './ButtonSquare'
import { StackNavigator } from 'react-navigation'
// Screens

// Styles
import styles from './Styles/DiscoverScreenStyles'

/* Background: Replace BG.png with a 750x1500 solid color of choice;
               Images.js will store the relative path of the image in the Images dir;
               styles.backgroundImage has offset values set at 0, adjust values if you don't want the
               background to cover the whole screen
    ButtonBox: style - play around with border color and widths
               image - the icon that is displayed in each ButtonBox
    ButtonBoxStyles.container to modify properties of the ButtonBox
               Ex. change width to fit more or less boxes in a row
 */
class DiscoverScreen extends React.Component {
  // used to redirect to another stuff
  /* openComponents = () => {
    this.props.navigation.navigate('ComponentExamplesScreen')
  } */

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <Text style={styles.sectionText}>
          Discover
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.buttonsContainer}>
            <ButtonSquare onPress={this.openComponents} style={styles.componentButton} image={Images.food} text={'Restaurants'} />
            <ButtonSquare onPress={this.openUsage} style={styles.usageButton} image={Images.hotels} text='Landmarks' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonSquare onPress={this.openApi} style={styles.apiButton} image={Images.api} text='Bars' />
            <ButtonSquare onPress={this.openTheme} style={styles.deviceButton} image={Images.theme} text='Shops' />
          </View>
        </ScrollView>
      </View>
    )
  }
}
// import screens here too
export default StackNavigator({
  DiscoverScreen: {screen: DiscoverScreen}
}, {
  initialRouteName: 'DiscoverScreen',
  headerMode: 'none'
})
