import React from 'react';
import {getUser, getPhoto, getCaption} from './Data'
import './post.css'

export default class Post extends React.Component{
    constructor(props) {
        super(props);
        let getLikes = Math.round((Math.random() * 1000000 + 100000))
        this.state = {name: "", picture: "", likes: getLikes, liked: false}
    }

    componentDidMount() {
        this.loadPost()
    }

    loadPost = async () => {
        let userInfo = await getUser()
        let nameObject = await userInfo.name
        let profilePicture = await userInfo.picture.large
        let postPhoto = getPhoto()
        let postCaption = await getCaption()
        this.setState({name: nameObject, picture: profilePicture, photo: postPhoto, caption: postCaption})
    }

    commafy = (num) => {
        let str = num + ""
        let len = str.length
        for(let j = str.length - 1; j > 0; j--){
            if ((len - j) % 3 == 0 && j != 0){
                str = str.substring(0, j) + "," + str.substring(j)
            }
        }
        return str
    }

    img = {
    }


    themeColor = {
        /*backgroundColor: "#458b8e",
        borderColor: "#458b8e",*/
        display: "flex",
        flexDirection: "row",
    }

    getPhoto = () => {
        console.log("what")
        console.log(this.state.caption)
        if(this.state.photo == null || this.state.name == null || this.state.caption == ""){
            return "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
        }else{
            return this.state.photo
        }
    }

    getName = () => {
        if(this.state.name == null){
            return "Loading..."
        }else{
            return this.state.name.first + " " + this.state.name.last
        }
    }

    like = () => {
        if (this.state.liked) {
            this.setState(prev => ({likes: prev.likes - 1, liked: false}))
        }else{
            this.setState(prev => ({likes: prev.likes + 1, liked: true}))
        }
    }

    render(){
        return(
            <div class="card mb-3 post">
                <div style={this.themeColor}>
                    <img src={this.state.picture} style={{height: "3em", margin: "1em 10px 1em 10px", borderRadius: "50%"}}/>
                    <p style={{margin: "auto auto auto 10px"}}><strong>{this.getName()}</strong></p>
                </div>
                <div style={this.img}>
                    <img style={{width: "90%"}} src={this.getPhoto()} alt="A post by a user"/>
                </div>
                <div class="card-body" style={{margin: "auto", marginBottom: "0px", paddingTop: "2%", textAlign: "left", width: "90%"}}>
                    <h5 class="card-title">{this.commafy(this.state.likes)} likes</h5>
                    <h6 class="card-subtitle text-muted">{this.state.caption}</h6>
                </div>
                <div class="card-body" style={{paddingTop: "0.5%"}}>
                    <a onClick={this.like} class="card-link">❤ Like</a>
                    <a href="#" class="card-link">💬 Comment</a>
                </div>
            </div>
        );
    }
}
