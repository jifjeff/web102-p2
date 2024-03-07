import React, {useState} from 'react'

const Flashcard = (props) =>{
    const [isQuestion, setIsQuestion] = useState(true);

    return(
    <> 
        <div className='comp-container' onClick={() =>{
            setIsQuestion(!isQuestion) 
        }}>
            <p style={{color: isQuestion ? 'red' : 'green'}}>{isQuestion ? props.question : props.answer}</p>
        </div>
        <div className='buttons'>
        <button onClick={() => {
          if (props.cardNumber >= 1){
            props.setCardNumber(props.cardNumber - 1),
            setIsQuestion(true)
          }
        }}>&larr;</button>

        <button onClick={() =>{
          if (props.cardNumber < props.dataLength - 1){
            props.setCardNumber(props.cardNumber + 1),
            setIsQuestion(true)
          }
        }}>&rarr;</button>

      </div>
    </>   
    )
}

export default Flashcard