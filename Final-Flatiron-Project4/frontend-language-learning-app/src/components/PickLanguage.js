import SpanishLanguageCard  from '../cards/SpanishLanguageCard'
import SearchBar from '../cards/SearchBar'

function PickLanguage(props) {
    return( 

        
        <div  >


        <SearchBar searchBar={props.searchBar} />  
        <br/>

          <h1 className="row justify-content-center"><strong>Let's Start Learning.  </strong></h1> 
          <br/>
          <h1 className="row justify-content-center"> Which language would you like to learn? </h1> 

        <div className = "spanish-lang-container"> 

      

    {
    props.spanish_languages.map((spanish_language) => { 
    return <SpanishLanguageCard spanish_language={spanish_language}
    />
    
})

}
</div>

</div>

)

}

    

export default PickLanguage