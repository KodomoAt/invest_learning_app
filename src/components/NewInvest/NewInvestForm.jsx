import React, {useState} from "react";
import './NewInvestForm.css'
import ResetButton from "./ResetButton.jsx";
import CalculateButton from "./CalculateButton.jsx";
const NewInvestForm = (props) => {
    const [enteredActualSavings, setEnteredActualSavings] = useState('')
    const [enteredYearlySavings, setEnteredYearlySavings] = useState('')
    const [enteredExceptedInterest, setEnteredExceptedInterest] = useState('')
    const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState('')
    const inputChangeHandler = ((identifier, value) => {
        if (identifier === 'actual') {
            setEnteredActualSavings(value)

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
            currentSavings: Number(enteredActualSavings),
            yearlySavings: Number(enteredYearlySavings),
            interest: Number(enteredExceptedInterest),
            duration: Number(enteredInvestmentDuration)
        }

        props.onAddNewUserInvest(investData)

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