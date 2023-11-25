import { useState } from "react";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import { moneyFormat} from "./helpers";

function App() {
    let [amount, setAmount] = useState(5000);

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
    </div>
    )
}

export default App
