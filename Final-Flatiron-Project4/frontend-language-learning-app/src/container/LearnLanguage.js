import WordCard  from '../cards/WordCard'

function LearnLanguage(props) {

   
    return( 

<div  >
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



    