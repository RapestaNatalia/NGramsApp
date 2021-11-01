import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {BaseHeaderTitle} from '../components/BaseHeaderTitle';
import {useForm} from '../hooks/useForm';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {main_function_n_grams} from '../logic/ngrams';
import {RootStackParams} from '../navigation/Navigator';
import {constants} from '../constants/constants';

interface Props extends NativeStackScreenProps<RootStackParams, any> {}

export const FormScreen = ({navigation}: Props) => {
  const {form, onChange} = useForm({
    n: 0,
    phrase: '',
  });
  const handleLogic = () => {
    const {n, phrase} = form;
    //TODO CHECK VALUES
    const ngrams = main_function_n_grams(n, phrase);
    navigation.navigate('Result', ngrams);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.globalMargin]}>
            <BaseHeaderTitle title={constants.form.title} />
            <Text style={stylesScreen.subtitle}>
              {constants.form.nSubtitle}
            </Text>
            <TextInput
              style={stylesScreen.inputStyle}
              placeholder={constants.form.placeholderN}
              keyboardType="numeric"
              onChangeText={value => onChange(parseInt(value), 'n')}
            />
            <Text style={stylesScreen.subtitle}>
              {constants.form.phraseSubtitle}
            </Text>
            <TextInput
              multiline
              numberOfLines={4}
              style={stylesScreen.inputStyle}
              placeholder={constants.form.placeholderPhrase}
              onChangeText={value => onChange(value, 'phrase')}
            />
            <TouchableOpacity style={stylesScreen.button} onPress={handleLogic}>
              <Text style={stylesScreen.btnText}>{constants.form.button}</Text>
            </TouchableOpacity>
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.6)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  subtitle: {
    color: 'green',
    fontWeight: 'bold',
  },
});
