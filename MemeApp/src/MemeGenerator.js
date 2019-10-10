import React, {Component} from "react";
class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomMeme:"https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
            
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    } 

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        // const { allMemeImgs, topText } = this.state;

        event.preventDefault()
        // console.log(allMemeImgs[0])
        const randNum = Math.floor((Math.random() * this.state.allMemeImgs.length))
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({ randomMeme: randMeme })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    {/* <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="botText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> */}
                    <button className="butt">Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomMeme} alt="whoop" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}
export default MemeGenerator;
