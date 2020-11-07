import React, { Component } from 'react'

export default class PracticaFlexBox extends Component {
    render() {
        return (
        <div className="flex h-64 bg-green-500 flex-wrap items-start">
            <div className="bg-green-400 p-4 m-2">A</div>
            <div className="flex-1 bg-green-400 p-4 m-2">B</div>
            <div className="bg-green-400 p-4 m-2">A</div>
        </div>
        )
    }
}
