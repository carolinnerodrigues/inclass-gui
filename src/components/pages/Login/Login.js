import  React, { Component } from 'react';
import { Button } from '../../atoms/Button/Button'
import './Login.scss'

export class LoginComponent extends Component{

    render(){
        return (
            <div id="Login">
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email"/>
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="Senha"/>
                        <input type="submit" class="fadeIn fourth" value="Entrar"/>
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