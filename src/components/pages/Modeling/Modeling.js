import React, {Component} from 'react'
import {SchedulesComponent} from './Schedules'
import {RoomComponent} from './Room'
import './Modeling.scss'

export class ModelingComponent extends Component {

// O QUE TEM QUE FAZER?    
// DEIXAR RESPONSIVO, UTILIZANDO O BOOTSTRAP
// QUADRO 1: TORNAR CLICAVEL AS OPÇÕES DE SALAS, ENTÃO TEM QUE FAZER METODO GENERICO PARA ALTERAR OS DADOS DO QUADRO 2
// EX: CLIQUEI NA SALA 1, EXIBE SEU QUADRO DE HORARIOS, SE CLICO NO 2, EXIBE SEUS HORARIOS...
// TORNAR O QUADRO 2 MODIFICAVEL, A IDEIA É EM CADA OPÇÃO DA SEMANA TER UM "SELECT" TORNANDO POSSIVEL A MODIFICAÇÃO
// CRIAR METODOS PARA RECEBER DADOS DO BACK
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

   

    render() {
        let datas = this.state.getDatas;
        return( 
            <div id="Modeling">
                <div className="row">
                    <div className="col-3">
                        <div className="input-group input-half">
                            <select className="custom-select">
                                <option defaultChecked>Selecione o Semestre</option>
                                <option value="1">1/2019</option>
                                <option value="1">2/2019</option>
                                <option value="2">1/2020</option>
                                <option value="2">2/2020</option>
                            </select>
                            <button type="button" className="btn btn-search">Pesquisar</button>
                        </div> 
                    </div>  
                    <div className="col-9 align-items-left">
                        <button type="button" className="btn btn-modify">Modificar</button>
                    </div>      
                </div>
                <div className="row">
                    <div className="col-3">
                        <RoomComponent/>
                    </div>
                    <div className="col-9">
                        <SchedulesComponent/>
                    </div>
                </div>
            </div>
        )
    }
}