
import ProgressFormCard  from '../cards/ProgressFormCard'

function ProgressFormInfo(props) {

   
    return( 

        <div className ="progress-options">
 
    {
    props.progress_forms.map((progress_form) => { 
    return <ProgressFormCard 
    handleEdit={props.handleEdit} 
    removeProgressForm = {props.removeProgressForm} 
    progress_form={progress_form}
    
    />
    
    
})
    }
    </div>
)
}
    

export default ProgressFormInfo