import TutorCard  from '../cards/TutorCard'

function Tutors(props) {

   
    return( 

<div className= "tutor-card" >
    {
    props.tutors.map((tutor) => { 
    return <TutorCard tutor={tutor} 
    />

    
    
})

}
</div>
)
}
    

export default Tutors