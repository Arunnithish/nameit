import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Results from './Results/Results';
import SearchBox from './SearchBox/SearchBox.js';



const name  = require('@rstacruz/startup-name-generator');

class App extends React.Component{

    state = {
                   
        headerText: 'Name It',
        headerClicked: true,
        suggestedNames:[],
    };
   

    handleChange = (inputtext) =>{
        name(inputtext);
       this.setState({
        headerClicked: !inputtext.length ,
        suggestedNames: inputtext ?
        name(inputtext):[],
    })
    }
    render () {

        
        return(
            <div>
                <Header headerClicked={this.state.headerClicked} headTitle ={this.state.headerText} />
                <SearchBox onInputChange={this.handleChange}/>
                <Results suggestedNames={this.state.suggestedNames}/>
            </div>
        )

    }
}

// function App(){
//     return 
// }


export default App;