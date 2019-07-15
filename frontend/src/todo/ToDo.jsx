import React from 'react'

import PageHeader from '../template/PageHeader'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'


export default props => (
    <div className='todo-page'>
        <PageHeader name="Tarefas" small="Cadastro" />
        <ToDoForm />
        <ToDoList />
    </div >
)