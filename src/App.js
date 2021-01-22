import React, {Component} from 'react';
import Academic from './components/Academic';
import Details from './components/Details';
import Image from './components/Image';
import Work from './components/Work';
import Name from './components/Name';
import Skills from './components/Skills';
import Lang from './components/Languages';

class App extends Component{
  constructor(){
    super();
    this.download = React.createRef();
  }
  downloadCV(e){
    e.preventDefault();
  }
  render(){  
    return (
      <div className="CV" ref = {this.download}>
        <h1 className = 'center'>Curriculum Vitae</h1>
        <Name />
        <Academic/>
        <Details/>
        <Image />
        <Work />
        <Skills />
        <Lang />
        <button id = 'download' onClick = {this.downloadCV}>Download</button>
      </div>
    );
  }
}

export default App;
