//importing css modules
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

//importing custom css
import '../template/custom.css'

//importing react dependencies
import React from 'react'
import Routes from './Routes'
import Menu from '../template/Menu'
//rendering all App
export default props => (
    <div>
        <Menu/>
        <Routes/>
    </div>
)