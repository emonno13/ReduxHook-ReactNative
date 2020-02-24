

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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Button, Text, FlatList } from 'react-native';
import * as actions from './actions';
import { connect } from 'react-redux';

const Main = ({ counterIncrease, counterDecrease, counter }) => {
    // handleIncrease = () => {
    //     counterIncrease();
    //     console.log('+')
    // };

    // handleDecrease = () => {
    //     counterDecrease();
    //     console.log('-')
    // };
    const [data, setData] = useState([]);
    
    // useEffect(
    //     () => console.log('start')
    //     , [])

    //https://www.robinwieruch.de/react-hooks-fetch-data
    const fetchData = async () => {
        const result = await axios({
            method:'get',

            //Lấy object hits[] trong link url dưới
            //url:'https://hn.algolia.com/api/v1/search?query=redux',
            url:'https://jsonplaceholder.typicode.com/users'
        });

      await setData(result.data);

    };

    useEffect(() => {
        fetchData();
    }, []);


    //console.log(data)

    return (
        <View style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center'
        }}
        >
            <View style={{
                
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>{counter}</Text>

            </View>
            <View style={{}}>
                <Button
                    title='increase'
                    color='red'
                    onPress={() => counterIncrease(1)}
                   //onPress={counterIncrease}
                />
                <Button
                    title="Decrease"
                    color='blue'
                    onPress={counterDecrease}
                    //onPress={ handleDecrease}
                />
            </View>
            {/* <View>
                {data.hits.map(item => (
                   
                        <Text>{item.title}</Text>
                    
                ))}
            </View> */}
            <FlatList
                //data={data.hits}
                data={data}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginVertical: 10 }}>
                        {/* <Text>{item.title}</Text> */}
                        <Text>{item.name}</Text>
                    </View>
                }
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )

}

const mapStateToProps = state => ({
    counter: state.counter.value
});
const mapDispatchToProps = {
    counterIncrease: actions.counterIncrease,
    counterDecrease: actions.counterDecrease
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);




















// INTRODUCTION TO REDUX + HOOK / WITHOUT CONNECTION

// import React from 'react';
// import { View, Button,Text } from 'react-native';
// import {counterDecrease,counterIncrease} from './actions';
// import {  useDispatch, useSelector } from 'react-redux';

// const  Main = () => {

//     const counter = useSelector(state => state.counter); // biến counter dc lưu trong reducers
//     const dispatch = useDispatch();

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
//                 <Text>{counter}</Text>
//             </View>
//             <View style={{ flex: 1 }}>
//                 <Button
//                     title='increase'
//                     color='red'
//                     onPress={() => dispatch(counterIncrease())}
//                 />
//                 <Button
//                     title="Decrease"
//                     color='blue'
//                     onPress={() => dispatch(counterDecrease())}
//                 />
//             </View>

//         </View>
//     )

// }
// export default Main;


