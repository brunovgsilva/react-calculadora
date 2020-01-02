import React, { Component } from 'react'

import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    render() {
        return (
            <div className='calculator'>
                <Display value={100} />
                <Button texto='AC' triple />
                <Button texto='/' operation />
                <Button texto='7' />
                <Button texto='8' />
                <Button texto='9' />
                <Button texto='*' operation />
                <Button texto='4' />
                <Button texto='5' />
                <Button texto='6' />
                <Button texto='-' operation />
                <Button texto='1' />
                <Button texto='2' />
                <Button texto='3' />
                <Button texto='+' operation />
                <Button texto='0' double />
                <Button texto='.' />
                <Button texto='=' operation />
            </div>
        )
    }
}