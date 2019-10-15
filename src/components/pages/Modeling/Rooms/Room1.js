import React, {Component} from 'react'
import Panel from './../../atoms/Panel/Panel'
import Table from '../../atoms/Table/Table'
import Slider from '../../atoms/Slider/Slider'

export class Room1Component extends Component {
  
  render() {
    return( 
        <div id="Room1">
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
    )
  }
}          