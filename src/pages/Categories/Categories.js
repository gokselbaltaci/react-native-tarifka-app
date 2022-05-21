import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './Categories.style';

import CategoryCard from '../../components/Card/CategoriesCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch('categories', Config.API_URL);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };

  const renderCategoryItems = ({item}) => {
    return (
      <CategoryCard
        categories={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderCategoryItems}
    />
  );
};

export default Categories;
