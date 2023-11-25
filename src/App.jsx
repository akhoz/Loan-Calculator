import { useState } from "react";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import { moneyFormat} from "./helpers";

function App() {
    const [amount, setAmount] = useState(5000);
    const [term, setTerm] = useState(6);
    const [total, setTotal] = useState(0);

    function handleChange(event) {
        setAmount(+event.target.value); // + converts string to number
        console.log(amount);
    }

    function handleClickDecrease() {
        if (+amount === 100) {
            alert("You can't go lower than 100")
            return
        }

        setAmount(amount - 100);
    }

    function handleClickIncrease() {
        if (+amount === 10000) {
            alert("You can't go higher than 10000")
            return
        }

        setAmount(amount + 100);
    }


    return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

        <Header />

        <div className="flex justify-between my-6">

            <Button
                handleClick={handleClickDecrease}
                text="-"
            />

            <Button
                handleClick={handleClickIncrease}
                text="+"
            />


        </div>

        <input type="range"
               className="w-full h-6 bg-gray-200 accent-black"
               onChange={handleChange}
               min="100"
               max="10000"
               step="100"
               value={amount}
        />
        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{moneyFormat(amount)}</p>

        <h2 className="text-center text-xl font-bold text-gray-500">
            Select a repayment term
        </h2>

        <select className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg
        text-center text-xl font-bold text-indigo-600"
        value={term}
        onChange={event => setTerm(+event.target.value)}>

            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>

        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5">

            <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                <span className="text-indigo-600">Payment</span> summary
            </h2>

            <p className="text-xl font-bold text-gray-500 text-center font-bold">{term} Months</p>
            <p className="text-xl font-bold text-gray-500 text-center font-bold">Total amount</p>
            <p className="text-xl font-bold text-gray-500 text-center font-bold">Monthly</p>

        </div>

    </div>
    )
}

export default App
