import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Button from './Button';
import Form from './Forms';

const colors =['red','white','yellow']
const comments=[
  {
    id:1,
    text: "comment-1"
  },
  {
    id:2,
    text: "comment-2"
  },
  {
    id:3,
    text: "comment-3"
  },
]
const nav =[
  'Home',
  'Contact',
  'About Us'
]

function App() {
  return (
    <div className="App">
      <header className="App-header"> 

     

      <Form />


      {/* {
        <nav>
          <ul>
            {
              
              nav.map((list,index)=>{
                return(
                  <div key={index}>
                  <li>{list}</li>
                  </div>

                )
              })
            }
          </ul>
        </nav>
      }
      {
        colors.map((color,index)=>{
          return(
            <span key={index}>{color}</span>
          )
        }) 
      }
      <h2>Hello World</h2>
      {
        comments.filter(item => item.id <3 )
        .map((comment,index)=>{
          return (
            // <p key={comment.id}>{comment.text}</p>
            <Button key={comment.id} customClass ='clk' text={comment.text} />
          )
        })
      } */}
  
      {/* <Button customClass ='clk' text ='Click Me'/>
      <Button customStyle ={{ backgroundColor: 'blue' }}text ='Dont Click Me'/> */}
      {/* <Counter /> */}

       
      </header>
    </div>
  );
}

export default App;
