import React, {Component} from 'react';
import {StyleSheet, View, TextInput,Button, FlatList } from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {addCity} from './actions';


class  ReduxSaveCity extends Component {
    state = {
        cityName: '',
       
    };
    citySubmitHandler = () => {
        if (this.state.cityName.trim() == '') {
            return;
        }
        this.props.add(this.state.cityName);
    };

    cityNameChangeHandler = value => {
        this.setState({
            cityName: value,
        });
    };

    cityOutput = () => {
        return(
            <FlatList
            style={styles.listContainer}
            data={this.props.dataCity}
            keyExtractor={(index) => index.toString()}
            renderItem={info => <ListItem cityName={info.item.value} />} 
            />
        );
    };
    render() {
        console.log('Data Props Reducer');
        console.log(this.props);
        return(
            <View style ={styles.container}>
                <View style = {styles.inputContainer}>
                    <TextInput
                    placeholder='Search City'
                    style ={styles.placeInput}
                    value= {this.state.cityName}
                    onChangeText={this.cityNameChangeHandler} 
                    />
                    <Button
                    title="Add"
                    style ={styles.placeButton}
                    onPress={this.citySubmitHandler}
                    />
                </View>
                <View style={styles.listContainer}>{this.cityOutput()}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    },
});

const mapStateToProps = state => {
    return{
        dataCity: state.listCity.city,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        add: name => {
            dispatch(addCity(name)); //dispatch menghubungkan action menuju reducers
    },
    };
};

// return bindActionCreators ({add: addPlace}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (ReduxSaveCity);