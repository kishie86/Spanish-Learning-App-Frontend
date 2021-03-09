import WordCard  from '../cards/WordCard'

function LearnLanguage(props) {

   
    return( 

<div className= "word-card" >
    {
    props.words.map((word) => { 
    return <WordCard word={word} clickAction={props.addToStoredWords}
    />

    
    
})

}
</div>
)
}
    

export default LearnLanguage



    