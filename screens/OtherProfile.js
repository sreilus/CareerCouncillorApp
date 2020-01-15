import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default class OtherProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            otherUserId:"",
            otherUserInfo:{},
            baseUrl: 'http://192.168.1.53:3500/api/'
        };
    }

    componentDidMount() {
        let sayi =this.props.navigation.getParam('userId', 'NO-ID')
        console.log("s: "+sayi)
        this.getUserInfo();
    }

    getUserInfo = async () => {
        await this.setState({
            otherUserId:this.props.navigation.getParam('userId', 'NO-ID')
        })
        let url = this.state.baseUrl + 'user/'+this.state.otherUserId;
        console.log('url: ' + url)
        await fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let deger = responseJson;
                this.setState({
                    otherUserInfo:deger
                });
                console.log("user: "+JSON.stringify(this.state.otherUserInfo))
            }).finally(() => {

            })
            .catch((error) => {
                console.error(error);
            });
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
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      CONNECT
                      
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                      onPress={()=>alert("girdi")}
                    >
                      MESSAGE
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={12}>Orders</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Text size={12}>Photos</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={12}>Comments</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                     {this.state.otherUserInfo.name}
                  </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      San Francisco, USA
                    </Text>
                  </Block>
                 
                  
                </Block>
              </Block>
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