import React, {Component} from 'react'
import Panel from './../../atoms/Panel/Panel'
import Table from '../../atoms/Table/Table'
import Slider from '../../atoms/Slider/Slider'

export class RoomComponent extends Component {
  
  render() {
    return( 
        <div id="Room">
            <Panel id="Panel">
                <Slider>
                    <Table id="Table1" headers={['Sala',
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