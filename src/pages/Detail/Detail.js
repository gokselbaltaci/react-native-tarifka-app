import React, {useCallback} from 'react';
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Details = ({route}) => {
  const {idMeal} = route.params;
  const {data, error, loading} = useFetch(
    'meals',
    `${Config.API_DETAIL}${idMeal}`,
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: data[0].strMealThumb}} />
      <View style={styles.inner_container}>
        <Text style={styles.text}>{data[0].strMeal}</Text>
        <Text style={styles.country}>{data[0].strArea}</Text>
        <Text style={styles.description}>{data[0].strInstructions}</Text>
        <OpenURLButton url={data[0].strYoutube}>Watch on Youtube</OpenURLButton>
      </View>
    </ScrollView>
  );
};

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Something went wrong: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.button_text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Details;
