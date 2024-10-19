import React from "react";
import CreateRule from "./Components/CreateRule";
import EvaluateRule from "./Components/EvaluateRule";
import CombineRules from "./Components/CombineRules";
import ManageRules from "./Components/ManageRules ";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-2">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Rule Engine
      </h1>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
        <ManageRules />
      </div>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 mt-6">
        <CreateRule />
      </div>

      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 mt-6">
        <EvaluateRule />
      </div>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 mt-6">
        <CombineRules />
      </div>
    </div>
  );
};

export default App;
