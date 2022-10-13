// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNumber } from "./카운터";
// import { minusNumber } from "./카운터";


// const App = () => {
//     const dispatch = useDispatch();
//     const[number, setNumber] = useState(0);

//     const globalNumber = useSelector((state)=> state.counter.number);


//     const onChangeHandler = (event) =>{
//         const {value} = event.target;
//         setNumber(+value);
//     };
//     const onClickAddNumberHandler = () => {
//         dispatch(addNumber(number));
//     };
//     const onClickMinusNumberHandler = () => {
//         dispatch(minusNumber(number));
//     };
   



//     return(
//         <div>
//             <div>{globalNumber}</div>
//             <input type="number" onChange={onChangeHandler}/>
//             <button onClick={onClickAddNumberHandler}>더하기</button>
//             <button onClick={onClickMinusNumberHandler}>뺴기</button>
//         </div>
//     );
// };

// export default App;

//마크업

// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {addNumber} from "./redux/modules/counter"



// const App = () => {
//     const dispatch = useDispatch();
//     const[number,setNumber]=useState(0);

//     const globalNumber = useSelector((state)=> state.counter.number);

//     const onChangeHandler = (event) => {
//         const{value} =event.target;
//         setNumber(+value);

//     };

//     const onClickAddNumberHandler = () =>{
//         dispatch(addNumber(number));
//     };

    
//     return(
//         <div>
//             <input type="number" onChange={onChangeHandler} />
//             <button onClick={onClickAddNumberHandler}>더하기</button>
//             <button>빼기</button>
//         </div>
//     );
// };

// export default App;

// import React from 'react'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { plusNumber } from './src/redux/modules/counter';



// const App = () => {
//     const dispatch = useDispatch();
//     const[number,setNumber] = useState(0);
//     const globalNumber = useSelector((state)=>state.counter.number);

//     const onChangeHandler = (event) =>{
//         const{value} = event.target;
//         setNumber(+value);
//     };
//     const onClickAddNumberHandler = () =>{
//         dispatch(plusNumber(number));
//     };
//   return (
//     <div>
//         <div>{globalNumber}</div>
//         <input type="number" onChange={onChangeHandler}/>
//         <button onClick={onClickAddNumberHandler}>더하기</button>
//         <button>빼기</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { plusNumber } from './src/redux/modules/counter';

// const App = () => {
//     const dispatch = useDispatch();
//     const globalNumber = useSelector((state)=> state.counter.number);
//     const [number,setNumber] = useState(0);

//     const onChangeHandler = (event) => {
//         const{value}=event.target;
//         setNumber(+value);
//     }
//     const onClickAddNumberHandler = () =>{
//         dispatch(plusNumber(number));

//     };
//   return (
//     <div>
//         <div>{globalNumber}</div>
//         <input type="number" onChange={onChangeHandler}/>
//         <div onClick={onClickAddNumberHandler}>더하기</div>
//         <div>빼기</div>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'
// import { useDispatch,useSelector } from 'react-redux';
// import { plusNumber } from './카운터';

// const App = () => {
//     const[number,setNumber] = useState(0);
//     const globalNumber = useSelector((state)=>state.counter.number);
//     const dispatch = useDispatch;
//     const onChangeHandler = (event) =>{
//         const{value} = event.target;
//         setNumber(+value);
//     };
//     const onClickAddNumberHandler = () =>{
//       dispatch(plusNumber(number));
//     }
    
//   return (
//     <div>
//         <div>{globalNumber}</div>
//         <input type="number" onClick={onChangeHandler}/>
//         <div onClick={onClickAddNumberHandler}>더하기</div>
//         <div>빼기</div>
//     </div>
//   )
// }

// export default App



//마크업
//useState handler 
//useSelector
//1.dispatch
//2.더하기버튼 이벤트 핸들러
//3. 이벤트 핸들러 연결
//4. action creator 임포트
//5. action creator dispatch action creator 인자에 넘버 넣어줌

// import React from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { plusNumber } from './카운터';

// export const App = () => {
//     const [number,setNumber] = useState(0);
//     const dispatch = useDispatch();
//     const globalNumber = useSelector((state)=>state.counter.number);
//     const onChangeHandler = (event) =>{
//         const {value} =event.target;
//         setNumber(+value);
//     };
//     const onClickAddNumberHandler = () =>{
//         dispatch(plusNumber(number));
//     }
//   return (
    
//     <div>
//         <div>{globalNumber}</div>
//         <input type="number" onChange={onChangeHandler}/>
//         <div onClick={onClickAddNumberHandler}>더하기</div>
//         <div>빼기</div>
//     </div>
//   )
// }
// export default App;

//마크업
//useState handler 
//useSelector
//1.dispatch
//2.더하기버튼 이벤트 핸들러
//3. 이벤트 핸들러 연결
//4. action creator 임포트
//5. action creator dispatch action creator 인자에 넘버 넣어줌

// import React from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { plusNumber } from './카운터';

// const App = () => {
//     const dispatch = useDispatch();
//     const [number,setNumber] = useState(0);
//     const globalNumber = useSelector((state)=>state.counter.number);

// const onChangeHandler = (event) =>{
//     const{value}=event.target;
//     setNumber(+value);
// };

// const onClickAddNumberHandler= () =>{
//  dispatch(plusNumber(number));
// };


//   return (
//     <div>
//         <div>{globalNumber}</div>
//         <input type="number" onChange={onChangeHandler} />
//         <div onClick={onClickAddNumberHandler}>더하기</div>
//         <div>빼기</div>
//     </div>
//   )
// }

// export default App



//마크업
//useState handler 
//useSelector
//globalnumber
//1.dispatch 사용하기위해 선언
//2.더하기버튼 이벤트 핸들러 만들어주기
//3. 이벤트 핸들러 연결
//4. action creator 임포트
//5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.

// import React from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { plusNumber } from './카운터';

// const App = () => {
//     const[number,setNumber] = useState(0);
//     const dispatch = useDispatch();
// const globalNumber = useSelector((state)=>state.counter.number);
// const onChangeHandler = (event)=>{
//     const{value}=event.target;
//     setNumber(+value);
// };
// const onClickAddNumberHandler =()=>{
//     dispatch(plusNumber(number));
// }
    
//   return (
//     <div>
//         <input type="number" onChange={onChangeHandler}/>
//         <div onClick={onClickAddNumberHandler}>더하기</div>
        
//     </div>
//   )
// }

// export default App

//마크업
//useState handler 
//useSelector
//globalnumber
//1.dispatch 사용하기위해 선언
//2.더하기버튼 이벤트 핸들러 만들어주기
//3. 이벤트 핸들러 연결
//4. action creator 임포트
//5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.

// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { plusNumber } from './카운터';

// const App = () => {
//     const[number,setNumber]=useState(0);
//     const globalNumber = useSelector();
//     const dispatch = useDispatch();

//     const onChangeHandler = (event) =>{
//         const{value} = event.target;
//         setNumber(+value)
//     };
//     const onClickAddNumberHandler = () =>{
//         dispatch(plusNumber(number));
//     }
//   return (
//     <div>
//         <div>{globalNumber}</div>
//         <input onChange={onChangeHandler}/>
//         <div onClick={onClickAddNumberHandler}>더하기</div>
//     </div>
//   )
// }

// export default App;


//마크업
//useState handler 
//useSelector
//globalnumber
//1.dispatch 사용하기위해 선언
//2.더하기버튼 이벤트 핸들러 만들어주기
//3. 이벤트 핸들러 연결
//4. action creator 임포트
//5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.

// import React from 'react'

// const App = () => {
//   return (
//     <div>
        
//      </div>
//   )
// }

// export default App