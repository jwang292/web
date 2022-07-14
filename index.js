import React from 'react'
import ReactDOM from 'react-dom'
// import './css/class.css';

const title = React.createElement('h1', null, 'hello!');
ReactDOM.render(title, document.getElementById('root'));


const title2 = ( <
        h1 className = 'title' >
        jinfeng <
        /h1>)
        ReactDOM.render(title2, document.getElementById('root'))


        //         const name = 'jack'
        //         const dv = ( <
        //             div > 你好吗 我叫 { name } < /div>
        //         )
        //         ReactDOM.render(dv, document.getElementById('root'))

        //         const title3 = ( <
        //             h1 >
        //             hello <
        //             p > { 1 } < /p> <
        //             p > { 'q' } < /p> <
        //             p > { 1 + 7 } < /p> <
        //             p > { 1 + 7 < 1 ? 'true' : 'false' } < /p> <
        //             p > { 1 } < /p> < /
        //             h1 >
        //         )
        //         ReactDOM.render(title3, document.getElementById('root'))

        //         const isLoading = true
        //         const loadData = () => {
        //             if (isLoading) {
        //                 return <div > loading.... < /div>
        //             }
        //         }

        //         const title4 = ( <
        //             h1 >
        //             条件渲染： { loadData() } <
        //             /h1>
        //         )
        //         ReactDOM.render(title4, document.getElementById('root'))

        //         const songs = [{
        //             id: 1,
        //             name: 'aaaa'
        //         }, {
        //             id: 2,
        //             name: 'bbbb'
        //         }, {
        //             id: 3,
        //             name: 'cccc'
        //         }, ]

        //         const list = ( <
        //                 ul > {
        //                     songs.map(item => < li key = { item.id } > { item.name } < /li>)} < /
        //                         ul >
        //                     )
        //                     ReactDOM.render(list, document.getElementById('root'))
        //                     const list2 = ( <
        //                         h1 className = 'title'
        //                         style = {
        //                             { color: 'red', backgroundColor: 'blue' }
        //                         } > abcdefg < /h1>
        //                     )
        //                     ReactDOM.render(list2, document.getElementById('root'))

        // function Hello() {
        //     return ( <
        //         div > THIS IS A FUNCTION COMPONET < /div>
        //     )
        // }

        // ReactDOM.render( < Hello / > , document.getElementById('root'))