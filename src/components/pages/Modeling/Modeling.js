import React, {Component} from 'react'
import Panel from './../../atoms/Panel/Panel'
import Table from '../../atoms/Table/Table'
import Slider from '../../atoms/Slider/Slider'

export class ModelingComponent extends Component {
  
  render() {
    return( 
        <div id="Modeling">
            <div className="row">
                <div id="Input">
                    <div className="input-group">
                        <select id="selector" className="custom-select">
                            <option defaultValue>Selecione o Ano</option>
                            <option value="1">2019</option>
                            <option value="2">2020</option>
                        </select>
                        <button type="button" className="btn">Pesquisar</button>
                    </div> 
                </div>        
            </div>
            <div className="row">
                <div className="col-3">
                    <Panel id="Panel">
                        <Slider>
                            <Table id="Table1" headers={['Sala',
                                            'Tipo',
                                            'Capacidade',
                            ]}>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 1</Table.TableItem.Element>
                                    <Table.TableItem.Element>Comum</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 40 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 2</Table.TableItem.Element>
                                    <Table.TableItem.Element>Comum</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 20 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 3</Table.TableItem.Element>
                                    <Table.TableItem.Element>Comum</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 20 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 4</Table.TableItem.Element>
                                    <Table.TableItem.Element>Laboratório de Informátca</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 40 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 5</Table.TableItem.Element>
                                    <Table.TableItem.Element>Laboratório de Informátca</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 20 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 6</Table.TableItem.Element>
                                    <Table.TableItem.Element>Comum</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 20 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>Sala 7</Table.TableItem.Element>
                                    <Table.TableItem.Element>Comum</Table.TableItem.Element>
                                    <Table.TableItem.Element>Até 20 Alunos</Table.TableItem.Element>
                                </Table.TableItem>
                            </Table>
                        </Slider>
                    </Panel>
                </div>
                <div className="col-9">
                    <Panel id="Panel">
                        <Slider>   
                            <Table id="Table1" headers={['Horário',
                                            'Segunda',
                                            'Terça',
                                            'Quarta',
                                            'Quinta',
                                            'Sexta',
                                            'Sábado'
                            ]}>
                                {/* Manhã */}
                                <Table.TableItem>
                                    <Table.TableItem.Element>07:00</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>07:50</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>08:40</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>09:00</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>09:50</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>10:40</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                 {/* Noite */}
                                 <Table.TableItem>
                                    <Table.TableItem.Element>19:00</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>19:50</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>20:40</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>21:00</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>21:50</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                                <Table.TableItem>
                                    <Table.TableItem.Element>22:30</Table.TableItem.Element>
                                    <Table.TableItem.Element>Ética (Turma 1,2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 2)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Algoritmo e Estrutura de dados (Turma 4)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Modelagem de Sistemas (Turma 3)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Sistemas de Informação (Turma 7)</Table.TableItem.Element>
                                    <Table.TableItem.Element>Projeto Interdisciplinar (Turma 6)</Table.TableItem.Element>
                                </Table.TableItem>
                            </Table>
                        </Slider> 
                    </Panel>
                </div>
            </div>
      </div>
    )
  }
}