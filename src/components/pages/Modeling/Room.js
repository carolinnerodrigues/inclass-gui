import React, {Component} from 'react'
import Panel from './../../atoms/Panel/Panel'
import Table from '../../atoms/Table/Table'
import Slider from '../../atoms/Slider/Slider'
import APIS from '../../../services/api'

export class RoomComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            getDatas:[],
            option: ''
        }
    }

    loadDatas = (option) => {
        try{ 
            APIS.getDatas(option).then( 
                response => {                     
                    // console.log('response', response.data.data) 
                    this.setState({getDatas: response.data.data.findAllByYear, loading:false}) 
                },error=>{ 
                    console.log('Deu ruim') 
                } 
            ) 
        }catch(err){
            console.log('error', err)
        }
    }

    componentWillReceiveProps(newProps){ 
        if(newProps.fetch){ 
            this.loadDatas(newProps.optionValue) 
            this.setState({loading: false}) 
        } 
    } 
 
    componentDidMount(){ 
        this.loadDatas(this.props.inputValue) 
    } 

    buildData(){
        let datas = this.state.getDatas;
        return datas.map(data => (
            <Table.TableItem key={data.id}>
                <Table.TableItem.Element>{data.sala}</Table.TableItem.Element> 
                <Table.TableItem.Element>{data.tipo}</Table.TableItem.Element> 
                <Table.TableItem.Element>{data.capacidade}</Table.TableItem.Element> 
            </Table.TableItem>
        ))
    }

    /*
    render(){
        return(
            <div = id="Modeling">
                <Table headers={[
                    'Sala',
                    'Tipo',
                    'Capacidade'
                ]}
                {this.buildData()}
                </Table>
            </div>
        )
    }
    */
  
  render() {
    return( 
        <div id="Room">
            <Panel id="Panel">
                <Slider>
                    <Table id="Table1" 
                        headers={['Sala',
                                  'Tipo',
                                  'Capacidade',
                    ]}>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 1</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>40 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 2</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>20 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 3</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>20 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 4</Table.TableItem.Element>
                            <Table.TableItem.Element>Laboratório de Informátca</Table.TableItem.Element>
                            <Table.TableItem.Element>40 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 5</Table.TableItem.Element>
                            <Table.TableItem.Element>Laboratório de Informátca</Table.TableItem.Element>
                            <Table.TableItem.Element>20 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 6</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>20 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 7</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>30 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 8</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>20 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 9</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>30 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                        <Table.TableItem>
                            <Table.TableItem.Element>Sala 10</Table.TableItem.Element>
                            <Table.TableItem.Element>Comum</Table.TableItem.Element>
                            <Table.TableItem.Element>30 Alunos</Table.TableItem.Element>
                        </Table.TableItem>
                    </Table>
                </Slider>
            </Panel>
        </div>
    )
  }
}          