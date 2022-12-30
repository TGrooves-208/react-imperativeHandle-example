import { useImperativeHandle, useState, forwardRef, useRef} from 'react';
import './App.css';

export default function App() {
const counterRef = useRef();
const customInputRef = useRef();

// useImperativeHandle will give you what the value is currently set to
// This is the parent component this can be a container and what not
// Every component should be imported correctly if in a components folder
  return (
    <div className="App">
    <Counter ref={counterRef}/>
    <CustomInput ref={customInputRef} placeholder="Type something in here"  />
    <button
      onClick={() => {
        counterRef.current.reset();
        customInputRef.current.reset();
      }}>
        Reset the count
      </button>
    </div>
  );
}

// We can move these to it's own component in a separate folder for "components"
// This is the manner to do this the react way but for example we will keep it here
// If you want to refactor create a new folder called "components" at the root
// Then create a new file called "Counter.jsx or Counter.js" 
// Copy the code below this line and add it to that file but make sure to export the file
// This is done on line 4, also we want to ensure we have the correct hooks from React 
// 1. Wrap the Counter component in a forwardRef (allows control over the ref)
// 2. We create a useImperativeHangle Object to handle the reset of the count
// 3. This is a child component
const Counter = forwardRef(function Counter(props, ref) {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => {
    return {
      reset: () => setCount(0),
    };
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add one to count</button>
      <p>Count: {count}</p>
    </>
  );
});

// 1. Wrap the Counter component in a forwardRef (allows control over the ref)
// 2. We create a useImperativeHangle Object to handle the reset of the count
// 3. This is a child component
const CustomInput = forwardRef(function CustomInput(props,ref) {
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => {
    return {
      reset: () => setValue(''),
    };
  });

  return (
    <>
    <input 
    {...props}
    value={value}
    onChange={event => setValue(event.target.value)}
    style={{color: 'purple'}}
     />
   </>
  );
});
