import React,{useEffect,useState}from"react";
import { card , cardcontent} from "@/components/ui/card";
import {Button}from"@/components/ui/button";
import{Input} from"@/component/ui/input";
import axios from "axios";
import{motion}from "framer-motion";
const StockApp=()=>{
    const[stock,setstocks]=useState([]);
const[symbol,setsymbol]=useState("");
const[loading,setloading]=usestate(false);
const fetchStockPrice=async(ticker)=>{
    try{
        setloading(true);
        const response=await axios.get(
            https://api.example.com/stock/${ticker}
        );
        const data= response.data;
        setStocks((prev)=>[
            { symbol:ticker.toUpperCase(),price:data.price},
            prev.filter((item)=>item.symbol!==ticker.toUpperCase()),
        ]);
    } catch (error){
        console.error("Error fetching stock price:",error);
    
    }finally{
         setloading(flase);
    
    }

            };
            const handleAddStock=()=>{
                if(symbol){
                    fetchStockPrice(symbol);
                    setsymbol("");

                }
            };
            return (
                <div className="max-w-3xl mx auto p-4 space-y-4">
                    <motion.h1
                    className="text-3xl font -bold text-center"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    >
                        Stock Price Aggregator
                    </motion.h1>
                    <div className="flex space-x-2">
                        <Input 
                        value={symbol}
                        />
                        <Button onClick={handleAddStock} disabled={loading}>
                            {loading? "loading..":"Add"}
                            </Button>         
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {setstocks.map((stock)=>( 
                        <card key={stock.symbol} className="rounded-2xl shadow p-4">
                        <cardcontent>
                            <h2 className="text-xl font-semibold">{stock.symbol}</h2>
                            <p className="text-lg">price:${stock.price}</p>

                        </cardcontent>
                        </card>
                     ))}
                </div>
                </div>
            );
};
export default StockApp;

