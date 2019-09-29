import  React, { Component } from 'react';
import { Button } from '../../atoms/Button/Button'
import './Login.scss'
import Api from '../../../services/api';
import AuthService from "../../../services/auth";


export class LoginComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            password: ""
        }
        if(AuthService.isAuthenticated()){
            this.props.history.push('/Home');
        }
                    
    }

    handleChange = (event) => {
        // console.log(event.target)
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        Api.login(this.state).then(
            response => {
                AuthService.setAuthenticated(response.data.data.token);
                this.props.history.push('/Home');
                console.log("ok",response.headers);
            },error => {
                if(error.status===401){
                    alert(error.data.message);
                }
                console.log("erro",error);
            }
        );
    }
     
    componentDidMount(){
        console.log('deu bom ')
        // AuthService.logout()
    }

    render(){
        return (
            <div id="Login">
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email" value={this.state.name} onChange={this.handleChange}/>
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Senha" value={this.state.password} onChange={this.handleChange}/>
                        <input type="submit" class="fadeIn fourth" value="Entrar" onChange={this.handleChange}/>
                        </form>

                        <div id="formFooter">
                            <a class="underlineHover" href="#">Esqueceu a senha?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}