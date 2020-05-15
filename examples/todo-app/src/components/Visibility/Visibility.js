import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { func, oneOf } from 'prop-types';
import { FILTERS } from './visibilityReducer';
import { connect } from 'react-redux';
import * as action from './visibilityActions';

function mapStateToProps(state) {
  return { filter: state.visibility.filter };
}

const Visibility = ({ filter, changeVisibilityFilter }) => {
  return (
    <View style={styles.visibility}>
      <Button
        title="All"
        onPress={() => changeVisibilityFilter(FILTERS.ALL)}
        color={filter === FILTERS.ALL ? 'green' : 'red'}
      />
      <Button
        title="Completed"
        onPress={() => changeVisibilityFilter(FILTERS.COMPLETED)}
        color={filter === FILTERS.COMPLETED ? 'green' : 'red'}
      />
      <Button
        title="Uncompleted"
        onPress={() => changeVisibilityFilter(FILTERS.UNCOMPLETED)}
        color={filter === FILTERS.UNCOMPLETED ? 'green' : 'red'}
      />
    </View>
  );
};

Visibility.propTypes = {
  changeVisibilityFilter: func,
  filter: oneOf([FILTERS.ALL, FILTERS.COMPLETED, FILTERS.UNCOMPLETED])
};

const styles = StyleSheet.create({
  visibility: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'gray',
    justifyContent: 'space-around'
  }
});

export default connect(mapStateToProps, action)(Visibility);
