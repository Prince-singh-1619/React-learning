
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response =[
    {
      itemName:"nirma1",
      itemDay:"28",
      itemMonth:"july",
      itemYear:"1998",
    },
    {
      itemName:"nirma2",
      itemDay:"25",
      itemMonth:"june",
      itemYear:"1997",
    },
    {
      itemName:"nirma3",
      itemDay:"22",
      itemMonth:"aug",
      itemYear:"1996",
    }
  ];
  return (
    <div>
      <Item name={response[0].itemName}>
        This is your first item
      </Item>
      <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name="555"></Item>
      <ItemDate day="24" month="march" year="1997"></ItemDate>
      <div className="App">Hello</div>
    </div>
    
  );
}

function Football(){
  const shoot=()=>{
    alert("Great shot!");
  }

  return (
    <button onClick={shoot}>Take the shot</button>
  );
}


// function App() {
//         const [count, setCount] = useState(0)
//         function updateValue(){
//           setCount(count+1);
//         }

//         return(
//           <div>
//             <h2>You clicked {count} times</h2>
//             <button onClick={updateValue}>Click</button>
//           </div>
//         )
// }


export default App;