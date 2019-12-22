import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
    Alert
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import RNPicker from "rn-modal-picker";
import { Formik } from 'formik';
import * as yup from 'yup';
import { requiredText, tcText, phoneRegExp, onlyText, onlyTextError } from '../constants/strings';


const { width, height } = Dimensions.get("screen");

const validationSchema = yup.object().shape({
    name: yup
        .string().matches(onlyText, onlyTextError)
        .label('tcIdentityKey')
        .min(2, "İsim 2 harfden az olamaz")
        .max(30, "İsim 30 harfden çok olamaz")
        .required(requiredText),
    surname: yup
        .string().matches(onlyText, onlyTextError)
        .label('tcIdentityKey')
        .min(2, "Soyisim 2 harfden az olamaz")
        .max(30, "Soyisim 30 harfden çok olamaz")
        .required(requiredText),
    email: yup
        .string()
        .min(6, "Email 6 harfden az olamaz")
        .max(100, "Email 100 harfden çok olamaz")
        .email("Lütfen geçerli bir email giriniz")
        .label('email')
        .required(requiredText),
    university: yup
        .string()
        .label('university')
        .min(2, "Üniversite adı 2 harfden az olamaz")
        .max(30, "Üniversite adı 200 harfden çok olamaz")
        .required(requiredText),
    password: yup
        .string()
        .label('password')
        .min(1, 'En az 2 karakter girmelisiniz!')
        .max(20, 'En fazla 20 karakter girebilirsiniz!')
        .required(requiredText),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor!'),
});

export default class RegisterTeacher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    id: 1,
                    name: "Yükleniyor...",

                },
            ],
            name: "",
            surname: "",
            password: "",
            email: "",
            placeHolderText: "Mezun Olduğunuz Üniversiteyi Seçiniz",
            selectedText: ""
        };
    }

    registerTeacher = async (values) => {
        console.log(values.name + "  " + this.state.selectedText+ " "+values.surname+"  " + values.password + "  " + values.email+" "+values.passwordConfirmation);
        let url = 'http://192.168.1.53:3500/api/user/register';
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: values.name,
                surname: values.surname,
                email: values.email,
                university: this.state.selectedText,
                password: values.password,
                confirmPassword: values.passwordConfirmation,
                userType: 2
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            if (response.status == 200) {
                alert("Başarıyla Kayıt Oluşturuldu");
            }
            else {
                alert("Başarısız oldu");
            }
            return response.json()
        }).then(json => {

        }).finally(() => {



            // console.log("finally " + this.state.accounts[0].accountNo)
        })
            .catch((error) => {
                console.error(error);
            });
    }

    getSchools = async () => {
        console.log("girdii");
        try {
            let response = await fetch(
                'http://192.168.1.53:3500/api/universities',
            );
            let responseJson = await response.json();
            this.setState({
                dataSource: responseJson
            })
            console.log("boyut:" + this.state.dataSource.length);
            return responseJson.movies;
        } catch (error) {
            console.error(error);
        }
    };

    componentDidMount() {
        this.getSchools();
    }

    _selectedValue(index, item) {
        this.setState({ selectedText: item.name });
    }

    formikFunc = (formikProps) => {
        if (formikProps.errors.name || formikProps.errors.surname || formikProps.errors.password || formikProps.errors.email || formikProps.errors.passwordConfirmation) {
            Alert.alert("Hatalar", "İsim: " + formikProps.errors.name + "\n" + "Soyisim: " + formikProps.errors.surname + "\n" + "Şifre: " + formikProps.errors.password + "\n" + "Şifre Doğrulama: " + formikProps.errors.passwordConfirmation + "\n"  + "Email: " + formikProps.errors.email)
        }
        else {
            this.registerTeacher(formikProps.values);
            
        }
    }

    static navigationOptions = {
        title: 'Kayıt Ol',
        header: null
    };

    render() {
        return (
            <Block flex middle>
                <StatusBar hidden />
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width, height, zIndex: 1 }}
                >
                    <Block flex middle>

                        <Block style={styles.registerContainer}>
                            <KeyboardAwareScrollView style={{ marginVertical: 40 }} behavior="padding" enabled>
                                <Formik initialValues={{ name: '', surname: '', email: '',  password: '', passwordConfirmation: ''}}
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
                                                <Text color="#8898AA" size={17}>
                                                    Rehberlik Uygulaması
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
                                                            placeholder="İsim"
                                                            onChangeText={formikProps.handleChange("name")}
                                                            iconContent={
                                                                <Icon
                                                                    size={16}
                                                                    color={argonTheme.COLORS.ICON}
                                                                    name="hat-3"
                                                                    family="ArgonExtra"
                                                                    style={styles.inputIcons}
                                                                />
                                                            }
                                                        />
                                                    </Block>
                                                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                                        <Input
                                                            borderless
                                                            placeholder="Soyİsim"
                                                            onChangeText={formikProps.handleChange("surname")}
                                                            iconContent={
                                                                <Icon
                                                                    size={16}
                                                                    color={argonTheme.COLORS.ICON}
                                                                    name="hat-3"
                                                                    family="ArgonExtra"
                                                                    style={styles.inputIcons}
                                                                />
                                                            }
                                                        />
                                                    </Block>
                                                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                                                        <Input
                                                            borderless
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
                                                            onChangeText={formikProps.handleChange("password")}
                                                            placeholder="Şifre"
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
                                                    <Block width={width * 0.8}>
                                                        <Input
                                                            password
                                                            borderless
                                                            onChangeText={formikProps.handleChange("passwordConfirmation")}
                                                            placeholder="Şifreyi Tekrar Giriniz"
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
                                                    <RNPicker
                                                        dataSource={this.state.dataSource}
                                                        dummyDataSource={this.state.dataSource}
                                                        defaultValue={false}
                                                        pickerTitle={"Mezun Olduğunuz Üniversite"}
                                                        showSearchBar={true}
                                                        disablePicker={false}
                                                        changeAnimation={"none"}
                                                        searchBarPlaceHolder={"Ara....."}
                                                        showPickerTitle={true}
                                                        onChangeText={formikProps.handleChange("university")}
                                                        searchBarContainerStyle={this.props.searchBarContainerStyle}
                                                        pickerStyle={styles.pickerStyle}
                                                        pickerItemTextStyle={styles.listTextViewStyle}
                                                        selectedLabel={this.state.selectedText}
                                                        placeHolderLabel={this.state.placeHolderText}
                                                        selectLabelTextStyle={styles.selectLabelTextStyle}
                                                        placeHolderTextStyle={styles.placeHolderTextStyle}
                                                        dropDownImageStyle={styles.dropDownImageStyle}
                                                        dropDownImage={require("../res/ic_drop_down.png")}
                                                        selectedValue={(index, item) => this._selectedValue(index, item)}
                                                    />


                                                    <Block middle>
                                                        <Button
                                                            color="primary"
                                                            onPress={() => this.formikFunc(formikProps)}
                                                            style={styles.createButton}>
                                                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                                                KAYIT OL
                                                             </Text>
                                                        </Button>
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
}

const styles = StyleSheet.create({
    registerContainer: {
        width: width * 0.9,
        height: height * 0.83,
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
        marginTop: 25
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
        marginTop: 12,
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
        flexDirection: "row"
    }
});