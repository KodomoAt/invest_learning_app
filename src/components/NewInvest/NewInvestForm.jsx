import React, {useState} from "react";
import './NewInvestForm.css'
import ResetButton from "./ResetButton.jsx";
import CalculateButton from "./CalculateButton.jsx";
const NewInvestForm = (props) => {
    const [enteredActualSavings, setEnteredActualSavings] = useState(0)
    const [enteredYearlySavings, setEnteredYearlySavings] = useState(0)
    const [enteredExceptedInterest, setEnteredExceptedInterest] = useState(0)
    const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState(0)
    const inputChangeHandler = ((identifier, value) => {
        if (identifier === 'actual') {
            setEnteredActualSavings(value)
            console.log(+enteredActualSavings)
        } else if (identifier == "yearly") {
            setEnteredYearlySavings(value)
        }else if (identifier == "interest") {
            setEnteredExceptedInterest(value)
        }
        else {
            setEnteredInvestmentDuration(value)
        }
    })

    const submitHandler = (event) => {
        event.preventDefault();
        const investData = {
            currentSavings: +enteredActualSavings,
            yearlySavings: +enteredYearlySavings,
            interest: +enteredExceptedInterest,
            duration: +enteredInvestmentDuration
        }

        props.onAddNewUserInvest(investData)
        setEnteredActualSavings(0)
        setEnteredYearlySavings(0)
        setEnteredExceptedInterest(0)
        setEnteredInvestmentDuration(0)
    }

    return <div className="new-invest">
        <form action="" onSubmit={submitHandler}>
            <div className="new-invest__controls">
                <div className="new-invest__controls__input">
                    <label htmlFor="">
                        ÉCONOMIES ACTUELLES (€)</label>
                    <input value={enteredActualSavings} type="number" min="0" className=""  onChange={(event) => inputChangeHandler('actual', event.target.value)}/>
                </div>
                <div className="new-invest__controls__input">
                    <label htmlFor="">ÉCONOMIES ANNUELLES (€)</label>
                    <input value={enteredYearlySavings} type="number" min="0" className="" onChange={(event) => inputChangeHandler('yearly', event.target.value)}/>
                </div>
            </div>
            <div className="new-invest__controls">
                <div className="new-invest__controls__input">
                    <label htmlFor="">INTÉRÊTS PRÉVUS (%, PAR AN)</label>
                    <input value={enteredExceptedInterest} type="number" min="0" className="" onChange={(event) => inputChangeHandler('interest', event.target.value)}/>
                </div>
                <div className="new-invest__controls__input">
                    <label htmlFor="">
                        DURÉE DE L'INVESTISSEMENT (ANNÉES)</label>
                    <input value={enteredInvestmentDuration} type="number" min="0" className="" onChange={(event) => inputChangeHandler('duration', event.target.value)}/>
                </div>
            </div>
            <div>
                <ResetButton/>
                <CalculateButton/>
            </div>
        </form>

    </div>
};


export default NewInvestForm;