/*let objectInput1 = document.getElementById("objectInput1");
let objectInput2 = document.getElementById("objectInput2");
/******* APP COMPONENT ***********/
/*let Lista = [{
                input1: 'Hej',
                input2: 'Lalalala',
                id: 0
            },
             {
                       input1: 'Lalalal',
                       input2: 'Hej',
                       id: 1
                   }]
class App extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
           Lista: Lista,
            input1: '',
            input2: '',
            id: Lista.length
        }
        this.updateInputElements = this.updateInputElements.bind(this);
        this.addElementToList = this.addElementToList.bind(this);
        this.clicked = this.clicked.bind(this);
    }
    render(){
        return (<div>
                <h1>Jättebra Namnsida</h1>
            <div id="Form">
                <AdForm updateInputElements={this.updateInputElements}
                    addElementToList={this.addElementToList} input1={this.state.input1} input2={this.state.input2}/>
            </div>
            <div id="Lista">
              <MyList lista={this.state.Lista} clickFunction={this.clicked} />
                
            </div>
            </div>);
    }
    
         clicked(event) {
          
            let span1 = event.target.parentNode.childNodes[0].innerText;
            let span2 = event.target.parentNode.childNodes[1].innerText;
              console.log(span1, span2);
               this.updateInputElements(span1, span2);
        }
    
    updateInputElements(i1, i2){
        console.log(i1, i2);
        this.setState({input1: i1, input2: i2})
    }
    addElementToList(object){
        const newList = this.state.Lista.slice();
        newList.push(object);
        this.setState ({Lista: newList,
                       id: object.id + 1})
        
    
    }
}
class AdForm extends React.Component {
     constructor(props){
        super(props); 
         this.input1Change = this.input1Change.bind(this);
         this.input2Change = this.input2Change.bind(this);
         this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
            input1: '',
            input2: ''
        };
     }
         
    render(){
        return(  <div>
                <input type="text" id="objectInput1" onChange={this.input1Change} value={this.props.input1} placeholder="Förnamn"/><br/>
                <input type="text" id="objectInput2" onChange={this.input2Change} value={this.props.input2} placeholder="Efternamn"/><br/>
                <button onClick={this.buttonClicked}>Lägg till objekt</button>
            </div>);
    }
         
    input1Change(event){
      this.props.updateInputElements(event.target.value, this.state.input2)
      this.setState({input1: event.target.value})
      
    }
     input2Change(event){
       this.props.updateInputElements(this.state.input1, event.target.value)
      this.setState({input2: event.target.value})
    }
     buttonClicked(event){
       this.props.addElementToList({input1: this.state.input1, input2: this.state.input2})
    }
    
}
class MyList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem: null
        }
        this.updateSelectedItem = this.updateSelectedItem.bind(this);
    }
        render(){
           const list = this.props.lista;
            const newList = list.map(
         object => ( <MyItem data={object} clickFunction={this.props.clickFunction} />));
             console.log("listan: " + newList);
        return( 
            <ul id="unorderedList">{newList}</ul>   
        );  
    }  
    
   
}
class MyItem extends React.Component {
    render() {
            return <li key={this.props.data.id} id={this.props.data.id} onClick={this.props.clickFunction}><span>{this.props.data.input1}</span><span>{this.props.data.input2}</span></li>;
            };          
}
ReactDOM.render(
    <App />, 
    document.getElementById("app-component")
)

*/












let objectInput1 = document.getElementById("objectInput1");
let objectInput2 = document.getElementById("objectInput2");

/******* APP COMPONENT ***********/

let Lista = [{
                input1: 'Hej',
                input2: 'lalala',
                id: 0
            },
             {
                       input1: '1',
                       input2: '2',
                       id: 1
                   }]

class App extends React.Component {
    constructor(props){
        super(props); // basklassens konstruktor
        this.state = {
           Lista: Lista,
            input1: '',
            input2: '',
            id: Lista.length
        }
        this.updateInputElements = this.updateInputElements.bind(this);
        this.addElementToList = this.addElementToList.bind(this);
        this.clicked = this.clicked.bind(this);
    }
    render(){
        return (<div>
            <p>Med react</p> 
            <div id="Form">
                <AdForm updateInputElements={this.updateInputElements}
                    addElementToList={this.addElementToList}
                    input1={this.state.input1} input2={this.state.input2}
                    /*state={this.state}*//>
            </div>

            <div id="Lista">
              <MyList lista={this.state.Lista} clickFunction={this.clicked} />
            </div>
            </div>);
    }
    
    
    clicked(event) {
          
            let span1 = event.target.parentNode.childNodes[0].innerText;
            let span2 = event.target.parentNode.childNodes[1].innerText;
              console.log(span1, span2);
               this.updateInputElements(span1, span2);
        }
    
    updateInputElements(i1, i2){
        this.setState({input1: i1, input2: i2})
    }

    addElementToList(object){
        const newList = this.state.Lista.slice();
        newList.push(object);
        this.setState ({Lista: newList,
                       id: object.id + 1})
        
    
    }
}


class AdForm extends React.Component {
     constructor(props){
        super(props); 
         this.input1Change = this.input1Change.bind(this);
         this.input2Change = this.input2Change.bind(this);
         this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
            input1: '',
            input2: ''
        };
     }
         
    render(){
        return(	 <div>
                <input type="text" id="objectInput1" onChange={this.input1Change} value={this.props.input1} placeholder="Värde 1"/>
                <input type="text" id="objectInput2" onChange={this.input2Change}  value={this.props.input2} placeholder="Värde 2"/>
                <button onClick={this.buttonClicked}>Lägg till objekt</button>
            </div>);
    }
         
    input1Change(event){
       this.props.updateInputElements(event.target.value, this.state.input2)
      this.setState({input1: event.target.value})
      
    }
     input2Change(event){
       this.props.updateInputElements(this.state.input1, event.target.value)
      this.setState({input2: event.target.value})
    }
     buttonClicked(event){
       this.props.addElementToList({input1: this.state.input1, input2: this.state.input2})
    }
    
}


class MyList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem: null
        }
     
    }
        render(){
           const list = this.props.lista;
            const newList = list.map(
         object => ( <MyItem data={object} clickFunction={this.props.clickFunction}/>));
        return( 
            <ul id="unorderedList">{newList}</ul>   
        );  
    }  
}


class MyItem extends React.Component {
   
		render() {
			return ( 
            <li 
                   key={this.props.data.id} 
                   id={this.props.data.id} 
                   onClick={this.props.clickFunction}>
                    <span>{this.props.data.input1} </span> 
                     <span> {this.props.data.input2}</span>
            </li>);
			};          
}


ReactDOM.render(
    <App />, 
    document.getElementById("app-component")
)

