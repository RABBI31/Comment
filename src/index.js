import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Approval from './Approval'

import CommentDetail from './CommentDetail';

const App = ()=> {
    return (
        <div className ="ui container comments"> 
            <Approval>
                <CommentDetail
                author="Rabbi"
                timestand="Today at 4.50PM"
                content="It is a nice blog"
                avatar={faker.image.avatar()}
                />
            </Approval>
            <Approval>
                <CommentDetail
                    author="Ali"
                    timestand="Today at 5.50PM"
                    content="I love the Blog"
                    avatar={faker.image.avatar()}
                />
            </Approval>
            <Approval>
                <CommentDetail
                    author="Mohammad"
                    timestand="Today at 4.50Am"
                    content="It was a great blog"
                    avatar={faker.image.avatar()}
                />
            </Approval>
            
        </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'))