import React from "react";
import { ArrowUpRight } from 'lucide-react'


const TradingEvaluationModel = () => {
  return (
    <div className="bg-[#010101] text-white p-12 max-w-7xl mx-auto">
      <div className="mb-4">
        <h1 className="flex items-center text-[#ADFF00] text-xl mb-6">
          <ArrowUpRight className="mr-2" />
          How it works
        </h1>
        <h2 className="text-2xl font-bold text-3xl font-bold hero-font text-left text-center">The new revolutionary evaluation model</h2>
      </div>
      <h1 className="text-2xl font-light mb-8 text-center ">to change the trading industry.</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-lg">
          <div className="bg-lime-400 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Data-driven</h3>
          <p className="text-sm text-gray-400">
            The model relies on a data-driven approach to evaluate trader performance, using advanced analytics and real-time trading data to ensure only consistent and profitable traders receive funding.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg">
          <div className="bg-lime-400 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
          <p className="text-sm text-gray-400">
            Leveraging cloud infrastructure and automated evaluation systems to grow the number of traders and transactions without increasing operational complexity.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg">
          <div className="bg-lime-400 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Scalable</h3>
          <p className="text-sm text-gray-400">
            By promoting risk management and consistency in trading, the firm ensures sustainable long-term profitability, reducing the chances of financial instability or collapse due to high-risk traders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradingEvaluationModel;
