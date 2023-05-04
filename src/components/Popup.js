
import ReactDOM from 'react-dom'

function Popup(props) {
  console.log(props,"-----");
  return (
    <div>
  {props?.show ?<div  onClick={()=>props?.close()}>
     hello
    </div> :""}   
    </div>
  );
}

export default Popup;
