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
import  {UserContext}  from '../contexts/UserContext';


const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class ProfileArgon extends React.Component {
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
                  <UserContext.Consumer>
                     {
                  (user)=>(
                    <Text bold size={28} color="#32325D">
                    {user[0].username}, 27
                  </Text>
                  )
                         }
              </UserContext.Consumer>
                    
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

export default ProfileArgon;
