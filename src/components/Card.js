import React, { Component } from 'react'

export default class Card extends Component {
    
    state= {
        posts:[]
    }

    async componentDidMount() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = res.json()
        this.setState({
            posts: data
          })
        }
    
    render() {
        return (
        <div  className="grid grid-cols-4 mx-5 my-5">
            { 
                this.state.posts.map(post => {
                return( 
                <div key={post.id} className="bg-grey-500 hover:bg-red-500 hover:text-white px-4 py-10 text-center rounded-lg shadow-lg">
                <h1 className="text-4xl mb-4">{post.title}</h1>
                <p className="text-gray-700 mb-4">{post.body}</p>
                <button className="border border-black rounded-xl px-4 py-1 bg-white text-black shadow-xl hover:bg-green-500 hover:border-green-300 uppercase my-5">Agregar</button>
                </div>
                     )
                 } ) 
                                  
            }
        </div>
        )
    }
}