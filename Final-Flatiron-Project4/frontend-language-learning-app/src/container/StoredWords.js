import React, { Component } from 'react'
import WordCard from '../cards/WordCard'


 class StoredWords extends Component {
    render() {
        return (
            <div  className="border border-secondary bg-grey container mt-2 p-3  ">
                <h3 className="text-center text-light"> Keep Practicing</h3>
                <div className="row justify-content-center space-around">
                    <div className="card-deck">
                        {this.props.storedWords.map((word) => {
                             return <WordCard clickAction= {this.props.removeStoredWords} word={word}
                             />
                        }
                        )}
    
    
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default StoredWords