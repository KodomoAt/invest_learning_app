import React, {useState} from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import NewInvestForm from "./components/NewInvest/NewInvestForm.jsx";
import TableResult from "./components/InvestResult/TableResult.jsx";

function App() {
    const [userInvest, setUserInvest] = useState({
        currentSavings: 0,
        yearlySavings: 0, interest: 0, duration: 0
    })
    const [investData, setInvestData] = useState([])
    const addUserInvest = newUserInvest => {

        setUserInvest(newUserInvest)
        setInvestData(calculateYearlyResults(userInvest))
        console.log(userInvest)
        console.log(investData)
    }

    const calculateYearlyResults = (enteredData) => {
        const yearlyData = []
        console.log(enteredData)
        for (let i = 0; i < enteredData.duration; i++) {
            const yearlyInterest = enteredData.currentSavings * enteredData.interest;
            enteredData.currentSavings += yearlyInterest + enteredData.yearlySavings;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: enteredData.currentSavings,
                yearlyContribution: enteredData.yearlySavings,
            });

            return yearlyData;
        }
    }

        return (
            <>
                <Header/>
               <NewInvestForm onAddNewUserInvest={addUserInvest}/>
                <TableResult newInvest={userInvest}/>
            </>

        )
    }


export default App;
