

//                  REDUX COMPONENT WRITED BY ARROW FUNCTION ( 3 WAYS )                //


// INTRODUCTION REDUX / WITH CHILD COMPONENT

// import React from 'react';
// import { View, Button} from 'react-native';
// import Child from './child';
// import * as actions from './actions';
// import { connect } from 'react-redux';

// const Main = ({ counterIncrease, counterDecrease}) => {
//     handleIncrease = () => {
//         counterIncrease();
//         console.log('+')
//     };

//     handleDecrease = () => {
//         counterDecrease();
//         console.log('-')
//     };

//     return (
//         <View style={{
//             flex: 1,
//             width: '100%',
//             justifyContent: 'center'
//         }}
//         >
//             <View style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}>
//                <Child />       
//             </View>
//             <View style={{ flex: 1 }}>
//                 <Button
//                     title='increase'
//                     color='red'
//                     onPress={this.handleDecrease}
//                     // onPress={counterIncrease}
//                 />
//                 <Button
//                     title="Decrease"
//                     color='blue'
//                     onPress={this.handleDecrease}
//                 />
//             </View>
//         </View>
//     )
// }

// export default connect(null, actions)(Main);























//INTRODUCTION TO REDUX / WITHOUT CHILD COMPONENT

// import React from 'react';
// import { View, Button ,Text} from 'react-native';
// import * as actions from './actions';
// import { connect } from 'react-redux';

// const Main = ({ counterIncrease, counterDecrease,counter }) => {
//     handleIncrease = () => {
//         counterIncrease();
//         console.log('+')
//     };

//     handleDecrease = () => {
//         counterDecrease();
//         console.log('-')
//     };

//     return (
//         <View style={{
//             flex: 1,
//             width: '100%',
//             justifyContent: 'center'
//         }}
//         >
//             <View style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}>
//                <Text>{counter}</Text>
               
//             </View>
//             <View style={{ flex: 1 }}>
//                 <Button
//                     title='increase'
//                     color='red'
//                     onPress={()=> counterIncrease()}
//                     // onPress={counterIncrease}
//                 />
//                 <Button
//                     title="Decrease"
//                     color='blue'
//                     onPress={this.handleDecrease}
//                 />
//             </View>

//         </View>
//     )

// }

// const mapStateToProps = state => ({
//     counter: state.counter
// });

// export default connect(mapStateToProps, actions)(Main);




















// INTRODUCTION TO REDUX + HOOK / WITHOUT CONNECTION

import React from 'react';
import { View, Button,Text } from 'react-native';
import {counterDecrease,counterIncrease} from './actions';
import {  useDispatch, useSelector } from 'react-redux';

const  Main = () => {

    const counter = useSelector(state => state.counter); // biến counter dc lưu trong reducers
    const dispatch = useDispatch();
   
    return (
        <View style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center'
        }}
        >
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>{counter}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    title='increase'
                    color='red'
                    onPress={() => dispatch(counterIncrease())}
                />
                <Button
                    title="Decrease"
                    color='blue'
                    onPress={() => dispatch(counterDecrease())}
                />
            </View>

        </View>
    )

}
export default Main;


