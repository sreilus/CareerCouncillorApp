import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {

  static navigationOptions = {
    title: 'Kayıt Ol',
    header: null
  };


  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>

            <Block style={{marginTop:180}}>
              <KeyboardAwareScrollView style={{ marginVertical: 40 }} behavior="padding" enabled>
                <Block flex>
                  <Block flex={0.17} middle>
                    <Text color="BLACK" size={17}>
                      Rehberlik Uygulaması
                  </Text>
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >

                      <Block middle>
                        <Button
                          color="primary"
                          onPress={() => navigation.navigate("RegisterStudent")}
                          style={styles.createButton}>
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            ÖĞRENCİ OLARAK KAYIT OL
                        </Text>
                        </Button>
                      </Block>

                      <Block middle>
                        <Button
                          color="primary"
                          onPress={() => navigation.navigate("RegisterTeacher")}
                          style={styles.createButton}>
                          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            DANIŞMAN OLARAK KAYIT OL
                        </Text>
                        </Button>
                      </Block>
                      <Block middle>
                        <Text
                             paragraph color="black" size={15} style={{marginTop:10}}>
                               Zaten bir hesabın var mı?   
                          <Text bold size={13}  color="#1737BF"  onPress={() => navigation.navigate("Login")}>
                            {"  GİRİŞ YAP"}
                        </Text>
                        </Text>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </KeyboardAwareScrollView>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.8,
    height: height * 0.43,
    backgroundColor: "#F4F5F7",
    borderRadius: 50,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.65,
    marginTop: 25,
    borderRadius: 20
  }
});

export default Register;
