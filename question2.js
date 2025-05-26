import React, { useState } from 'react';
const AverageCalculator = ( => {
    const [input, setInput] = useState('');
    const [average, setAverage] = userState(null);
    const [error, setError] = userState(null);
    const handleCalculate = () => {
        setError(null);
        setAverage(null);
        try {
            const numbers = input.split(',').map(num => parseFlaot(num.trim()));
            if (numbers.some(isNaN)) {
                setError('Enter valid comma-separated numbers.');
                return;
            }
            const response = await fetch('https://localhost:5000/average', {
                method: 'POST',
                headers: { 'Content-Type': 'appplication/json' },
                body: JSON.stringify({ numbers}),
            });
            const data = await response.json();
            if (response.ok) {
            } else {
                setError(data.error);
            }
        } catch {
            setError('Server error. Please try again.');
        }
    };
    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Average Calculator</h1>
            <input
              className="border p-2 w-full mb-2"
              placeholder="Enter numbers separated by commas"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-4 py-2" onClick={handleCalculate}>
                Calculate
              </button> 
              {average !== null && <p className="mt-4 text-green-600">Average: {average}</p>}
              {error && <p className="mt-4 text-red-600">{error}</p>}

              
            
            
        </div>
    
    );
    };
    export default AverageCalculator;