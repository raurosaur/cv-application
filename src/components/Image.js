import React, { Component } from 'react';

class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: 'https://thumbs.dreamstime.com/z/business-woman-cartoon-character-cheerful-beautiful-office-female-vector-crossed-arms-pretty-assistant-girl-cute-secretary-161730825.jpg'
        }
        this.fileReader = React.createRef();
    }
    openSubmit = () => {
        this.fileReader.current.click();
    }
    displayImage = ({target}) => {
        this.setState({ image: URL.createObjectURL(target.files[0])});
    }
    Image = () => {
        const {image} = this.state;
        if(image === '') return (<></>);
        return (
            <img src = {image} alt = 'profile' />
        );
    }
    render() {
        return (
            <section onClick = {this.openSubmit} className='component image center'>
                <input type = 'file'
                    accept = '.jpeg, .jpg, .png, .svg'
                    ref = {this.fileReader}
                    onInput = {this.displayImage}
                />
            <this.Image />
            </section>
        );
    }
}

export default Image;