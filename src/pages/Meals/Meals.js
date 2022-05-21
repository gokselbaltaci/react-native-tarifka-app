import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealsCard from '../../components/Card/MealsCard/MealsCard';

const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;

  const {data, error, loading} = useFetch(
    'meals',
    `${Config.API_MEALS}${strCategory}`,
  );

  const handleSelectDetail = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const renderMeal = ({item}) => {
    return (
      <MealsCard
        meals={item}
        onSelect={() => handleSelectDetail(item.idMeal)}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <FlatList data={data} renderItem={renderMeal} />;
};

export default Meals;
