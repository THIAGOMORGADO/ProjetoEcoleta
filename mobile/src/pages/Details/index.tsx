import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView } from 'react-native';
import {Feather as Icon, FontAwesome} from '@expo/vector-icons';
import Constants from 'expo-constants';
import  {RectButton} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const Details = () => {
  const navigation = useNavigation();
  function handleBackPoints (){
    navigation.goBack();
  }
  return(
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPoints}>
        <Icon name="arrow-left" size={20} color="#34cb79"/>
      </TouchableOpacity>
        <Image style={styles.pointImage} source={{uri: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWFya2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'}}/>
        <Text style={styles.pointName}>Ponto Ecologio</Text>
        <Text style={styles.pointItems}>Coletamos Items Como residuos organico lampadas papel e papelao entre outros tambem</Text>
      <View style={styles.address}>
        <Text style={styles.addressTitle}>Endereços</Text>
        <Text style={styles.addressContent}>Rua Afonso vidal - 513</Text>
      </View>
    </View>
    <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={() => {}}>
          <Icon name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },
  
  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
});

export default Details;