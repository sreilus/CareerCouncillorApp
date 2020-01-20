import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { UserContext } from '../contexts/UserContext';


const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default class ProfileArgon extends React.Component {
  static contextType = UserContext

  state = ({
    user: {}
  })

  logout = async()=>{
    try {
          await AsyncStorage.setItem('isLoggedIn','0');
          this.props.navigation.navigate('Login');
        }
        catch(exception) {
          alert('Hata oluştu!');
        }
  }

  _logout =async ()=>{
    Alert.alert(
      'Oturumu Kapat',
      'Çıkış Yapmak İstiyor Musunuz?',
      [
        {
          text: 'Çıkış Yap',
          onPress: () => this.logout(),
          style: 'cancel',
        },
        {text: 'İptal', onPress: () => console.log('İptal Pressed')},
      ],
      {cancelable: false},
    );
  }

  componentDidMount() {
    const currentUser = this.context
    this.setState({
      user: currentUser[0]
    })
  }

  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    {/* <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      TAKİP ET
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                    >
                      MESAJ
                    </Button> */}
                  </Block>
                  <Block row space="around">
                    {/* <Block middle>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={12}>Orders</Text>
                    </Block> */
                    }
                    <Block center>
                      <Text
                        bold
                        color="#525F7F"
                        size={16}
                        style={{ marginBottom: 4 }}
                      >
                        {this.state.user.userType == 2 ? 10 : ''}
                      </Text>
                      <Text size={16}>{this.state.user.userType == 2 ? 'Takipçi' : ''}</Text>
                    </Block>

                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={15}
                        style={{ marginBottom: 4 }}
                      >
                        {this.state.user.userType == 2 ? 89 : ''}
                      </Text>
                      <Text size={15}>{this.state.user.userType == 2 ? 'Yorum' : ''}</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      {this.state.user.name}
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      {
                        this.state.user.userType == 2 ? 'Rehber Öğretmen' : 'Öğrenci'
                      }
                    </Text>
                  </Block>


                </Block>
              </Block>
              <TouchableOpacity onPress={()=> this._logout()}>
                <Image
                  source={require('../assets/imgs/logout.png')}
                  style={{height:50,width:50,alignSelf:'center',marginTop:15}}
                />
              </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 140,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 196,
    height: 196,
    borderRadius: 100,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});