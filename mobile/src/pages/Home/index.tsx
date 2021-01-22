import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text,  } from 'react-native';
import { Feather as Icon} from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  function handleNavigationPoints(){
    navigation.navigate('Points')
  }
  return (
    <ImageBackground  
    source={require('../../assets/home-background.png')} 
    style={style.container}
    imageStyle={{width:274, height: 368}}
    >

      <View style={style.main}>
        <Image source={require('../../assets/logo.png')}/>
        <Text style={style.title}>Seu marketplace de colera de residuos</Text>
        <Text style={style.description}>Ajudar pessoas a encontrarem ponto de coleta de forma eficiete.</Text>
      </View>
      <View style={style.footer}>
        <RectButton style={style.button} onPress={handleNavigationPoints}>
          <View style={style.buttonIcon}>
          <Text>
            <Icon name="arrow-right" color='#fff' size={24}/>
          </Text>
          </View>
          <Text style={style.buttonText}>Entra</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;