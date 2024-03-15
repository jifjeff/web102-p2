import React, {useState, useRef} from 'react'

const Flashcard = (props) =>{
    const [isQuestion, setIsQuestion] = useState(true);
    const [inputText, setInputText] = useState({input: ''});
    const [inputColor, setInputColor] = useState({border:''});
    const [notifText, setNotifText] = useState('');
    const hasSubmittedAnswer = useRef(false);

    const guessSubmit = (e) => { 
      e.preventDefault(),
      setInputColor({border: inputText['input'].toLowerCase() == props.answer.toLowerCase() ? '3px solid green': '3px solid red'}),
      hasSubmittedAnswer.current = true
    };

    const resetToDefault = () => {
      setIsQuestion(true),
      setNotifText(''),
      setInputText({input: ''}),
      setInputColor({border:''}),
      hasSubmittedAnswer.current = false
    };

    return(
    <> 
        <div className='comp-container' onClick={() =>{
          hasSubmittedAnswer.current ? (setIsQuestion(!isQuestion), setNotifText('')) : setNotifText('Submit a guess first before revealing the answer!')     
        }}>
            <p style={{color: isQuestion ? 'red' : 'green'}}>{isQuestion ? props.question : props.answer}</p>
            <h5>{notifText}</h5>
            
        </div>
        <form onSubmit={guessSubmit} className="user-input">
          <p>Guess your answer:</p>
          <input type="text" value={inputText.input} name="input" onChange={(e) => setInputText({[e.target.name]: e.target.value})} style={inputColor}/>
          <input type="submit" value="Submit Guess"/>
        </form>
        <div className='buttons'>
        <button onClick={() => {
          if (props.cardNumber >= 1){
            props.setCardNumber(props.cardNumber - 1),
            resetToDefault()
          }
        }}>&larr;</button>

        <button onClick={() =>{
          if (props.cardNumber < props.dataLength - 1){
            props.setCardNumber(props.cardNumber + 1),
            resetToDefault()
          }
        }}>&rarr;</button>

        <button>Shuffle Cards</button>
      </div>
    </>   
    )
}

export default Flashcard