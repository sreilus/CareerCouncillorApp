import React,{useContext} from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    Alert,
    
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import RNPicker from "rn-modal-picker";
import { Formik } from 'formik';
import * as yup from 'yup';
import { ServiceContext } from '../contexts/ServiceContext';
import {UserContext} from '../contexts/UserContext';
import {AuthContext} from '../contexts/AuthContext'
import { requiredText, tcText, phoneRegExp, onlyText, onlyTextError } from '../constants/strings';

const { width, height } = Dimensions.get("screen");

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .min(6, "Email 6 harfden az olamaz")
        .max(100, "Email 100 harfden çok olamaz")
        .email("Lütfen geçerli bir email giriniz")
        .label('email')
        .required(requiredText),
    password: yup
        .string()
        .label('password')
        .min(1, 'En az 2 karakter girmelisiniz!')
        .max(20, 'En fazla 20 karakter girebilirsiniz!')
        .required(requiredText)
});
const Login =(props)=> {

    const baseUrl=useContext(ServiceContext);
    const [user, setUser]=useContext(UserContext);
    const [token, setToken]=useContext(AuthContext);
    const formikFunc = (formikProps) => {
        if ( formikProps.errors.password || formikProps.errors.email) {
            Alert.alert( "Email: " + formikProps.errors.email+ "Şifre: " + formikProps.errors.password + "\n")
        }
        else {
            login(formikProps.values);
        }
    }

    const getUserData = async (token)=>{
        await fetch(baseUrl+"posts",{
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "auth-token":token
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
          let deger=responseJson;
          setUser(deger);
          console.log(user)

        }).finally(() => {
          
        })
        .catch((error) => {
          console.error(error);
        });
    }

   const login = async (values) => {
        console.log( values.email+ values.password   );
        let url = baseUrl+ 'user/login';
        console.log("url: "+url);
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: values.email,
                password: values.password
                }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            if (response.status == 200) {
                //alert("Giriş Başarılı!");
                props.navigation.navigate("BottomNavigator");
            }
            else {
                alert("Email veya Şifre Hatalı!");
            }
            return response.json()
        }).then(json => {
            let veri=json['token'];
            getUserData(veri);
            setToken(veri);
        }).finally(() => {
            console.log("user: "+JSON.stringify(user))
        })
            .catch((error) => {
                console.error(error);
            });
    }

        return (
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    
                    <Block flex middle>

                        <Block style={{marginTop:150}}>
                      
                            <KeyboardAwareScrollView style={{ marginVertical: 40 }} behavior="padding" enabled>
                                <Formik initialValues={{  email: '', password: '', }}
                                    onSubmit={(values, actions) => {
                                        //alert(JSON.stringify(values.firstName));
                                        this.registerTeacher(values)
                                        setTimeout(() => {
                                            actions.setSubmitting(false);
                                        }, 1000);

                                    }}

                                    validationSchema={validationSchema}>

                                    {formikProps => (
                                        <Block flex>
                                            <Block flex={0.17} style={{ marginTop: 0 }} middle>
                                                <Text color="black" size={17}>
                                                    Rehberlik Uygulaması - Giriş Yap
                                        </Text>
                                            </Block>
                                            <Block flex center>
                                                <KeyboardAvoidingView
                                                    style={{ flex: 1 }}
                                                    behavior="padding"
                                                    enabled
                                                >
                                                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                                        <Input
                                                            borderless
                                                            autoCapitalize = 'none'
                                                            placeholder="Email"
                                                            onChangeText={formikProps.handleChange("email")}
                                                            iconContent={
                                                                <Icon
                                                                    size={16}
                                                                    color={argonTheme.COLORS.ICON}
                                                                    name="ic_mail_24px"
                                                                    family="ArgonExtra"
                                                                    style={styles.inputIcons}
                                                                />
                                                            }
                                                        />
                                                    </Block>
                                                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                                        <Input
                                                            password
                                                            borderless
                                                            placeholder="Şifre"
                                                            onChangeText={formikProps.handleChange("password")}
                                                            iconContent={
                                                                <Icon
                                                                    size={16}
                                                                    color={argonTheme.COLORS.ICON}
                                                                    name="padlock-unlocked"
                                                                    family="ArgonExtra"
                                                                    style={styles.inputIcons}
                                                                />
                                                            }
                                                        />
                                                    </Block>
                                                    <Block middle>
                                                        <Button
                                                            color="primary"
                                                            style={styles.createButton}
                                                            onPress={() => formikFunc(formikProps)}>
                                                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                                GİRİŞ YAP
                        </Text>
                                                        </Button>
                                                    </Block>
                                                    <Block middle>
                        <Text
                             paragraph color="black" size={15} style={{marginTop:10}}>
                               Bir hesabın yok mu?   
                          <Text bold size={13}  color="#1737BF"  onPress={() => props.navigation.navigate("Register")}>
                            {"  KAYIT OL"}
                        </Text>
                        </Text>
                      </Block>
                                                </KeyboardAvoidingView>
                                            </Block>
                                        </Block>
                                    )}
                                </Formik>
                            </KeyboardAwareScrollView>
                        </Block>
                    </Block>
                </ImageBackground>
            </Block>
        );
}

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.52,
        backgroundColor: "#F4F5F7",
        borderRadius: 30,
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
        width: width * 0.5,
        marginTop: 0
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    searchBarContainerStyle: {
        marginBottom: 10,
        flexDirection: "row",
        height: 40,
        shadowOpacity: 1.0,
        shadowRadius: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 10,
        elevation: 3,
        marginLeft: 10,
        marginRight: 10
    },

    selectLabelTextStyle: {
        color: "#000",
        textAlign: "left",
        width: "99%",
        padding: 10,
        flexDirection: "row"
    },
    placeHolderTextStyle: {
        color: "#D3D3D3",
        padding: 10,
        textAlign: "left",
        width: "99%",
        flexDirection: "row"
    },
    dropDownImageStyle: {
        marginLeft: 10,
        width: 10,
        height: 10,
        alignSelf: "center"
    },
    listTextViewStyle: {
        color: "#000",
        marginVertical: 10,
        flex: 0.9,
        marginLeft: 20,
        marginHorizontal: 10,
        textAlign: "left"
    },
    pickerStyle: {
        width: "80%",
        elevation: 3,
        paddingRight: 25,
        marginBottom: 2,
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1
        },
        borderWidth: 1,
        shadowRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 5,
        flexDirection: "row",
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    button2: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
    },
    text2: {
        color: '#fff',
        fontSize: 15
    }
});

export default Login;