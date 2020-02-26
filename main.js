

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




// import React, { useState, useEffect } from 'react';
// import { View, Button, Text, FlatList } from 'react-native';
// import * as actions from './actions';
// import { connect } from 'react-redux';
// import fetchData from './getDataApi';


// const Main = ({ counterIncrease, counterDecrease, counter }) => {

//     const [dataFromApi, setFromDataApi] = useState([]);  
    
//     // Gọi hàm call api trực tiếp 

//     // const fetchData = async () => {
//     //     const result = await axios({
//     //         method:'get',
//     //         //url:'https://hn.algolia.com/api/v1/search?query=redux',
//     //         url:'https://jsonplaceholder.typicode.com/users'
//     //     });

//     //   await setData(result.data);

//     // };
    

//     // Gọi hàm call api thông qua import function
//     const functionCallApi = async() =>{
//         const datarequest = await fetchData('https://jsonplaceholder.typicode.com/users');
//         await setFromDataApi(datarequest);
//     }


//     useEffect(() => {
//        functionCallApi();
//        //fetchData('https://jsonplaceholder.typicode.com/users')  ;
//        //console.log(data)
//     }, []);



//     return (
//         <View style={{
//             flex: 1,
//             width: '100%',
//             justifyContent: 'center'
//         }}
//         >
//             <View style={{
                
//                 justifyContent: "center",
//                 alignItems: "center"
//             }}>
//                 <Text>{counter}</Text>

//             </View>
//             <View style={{}}>
//                 <Button
//                     title='increase'
//                     color='red'
//                     onPress={() => counterIncrease(1)}
//                    //onPress={counterIncrease}
//                 />
//                 <Button
//                     title="Decrease"
//                     color='blue'
//                     onPress={counterDecrease}
//                     //onPress={ handleDecrease}
//                 />
//             </View>
//             {/* <View>
//                 {data.hits.map(item => (
                   
//                         <Text>{item.title}</Text>
                    
//                 ))}
//             </View> */}
//             <FlatList
//                 //data={data.hits}
//                 data={dataFromApi}
//                 renderItem={({ item }) =>
//                     <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginVertical: 10 }}>
//                         {/* <Text>{item.title}</Text> */}
//                         <Text>{item.name}</Text>
//                     </View>
//                 }
//                 numColumns={1}
//                 keyExtractor={(item, index) => index.toString()}
//             />

//         </View>
//     )

// }

// const mapStateToProps = state => ({
//     counter: state.counter.value
// });
// const mapDispatchToProps = {
//     counterIncrease: actions.counterIncrease,
//     counterDecrease: actions.counterDecrease
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main);







































//INTRODUCTION TO REDUX + HOOK / WITHOUT CONNECTION / CLEANER CODE 



import React, {useEffect} from 'react';
import { View, Button,Text , FlatList } from 'react-native';
import { counterDecrease, counterIncrease, fetchProductsSuccess } from './actions/index';
import {  useDispatch, useSelector } from 'react-redux';
import request from './getDataApi';

const  Main = () => {
    
    const number = useSelector(state => state.counter.value); // biến counter dc lưu trong reducers
    const users = useSelector(state => state.counter.users)
    const dispatch = useDispatch();
   

    
    const functionCallApi = async() =>{
        // Call api by function and return result. 
        const datarequest = await request.fetchData('https://jsonplaceholder.typicode.com/users');
        
        //Then, we push result into action(fetchProductsSuccess) for setting (state.counter.users)
        await dispatch(fetchProductsSuccess(datarequest)) 
    }


    useEffect(() => {
        functionCallApi();
    }, []);


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
                <Text>{number}</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Button
                    title='Increase'
                    color='red'
                    onPress={() => dispatch(counterIncrease(1))}
                />
                <Button
                    title="Decrease"
                    color='blue'
                    onPress={() => dispatch(counterDecrease())}
                />
            </View>

            <FlatList
                data={users}
                renderItem={({ item }) =>
                    
                    <View style={{ backgroundColor: 'white', marginHorizontal: 10, marginVertical: 10 }}>
                        <Text>{item.name}</Text>
                    </View>
                }
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>
    )

}
export default Main;


