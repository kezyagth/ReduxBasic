import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment, decrement} from './actions/index';


class Counter extends Component{
    addIncrement = () =>{
        this.props.incrementAction();

    };
    minIncrement = () => {
        this.props.decrementAction();
    };
    render() {
        return(
            <View>
                <Text>Contoh Redux</Text>
                <Text>Counter :  {this.props.count}   </Text>
                <Button title="Tambah" onPress={this.addIncrement} />
                <Button title="Kurang" onPress={this.minIncrement} />
            </View>
        );
    }
}
function mapStateToProps(state) {
    console.log(state);
    return{
        count: state.count,
    };  
}
function matchDispatchToProps(dispatch) { //convert dr action menjadi props
    //fungsi bindActionCreators kombinasikan semua action ke single object
    return bindActionCreators(
        {incrementAction: increment, decrementAction: decrement}, 
        dispatch
    );
}
export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(Counter);
