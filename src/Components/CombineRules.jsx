import React, { useState } from "react";
import axios from "axios";

const CombineRules = () => {
  const [ruleIds, setRuleIds] = useState("");
  const [combinedAST, setCombinedAST] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/rules/combine",
        { ruleIds: ruleIds.split(",").map((id) => id.trim()) }
      );
      setCombinedAST(response.data.combinedAST);
    } catch (err) {
      setError("Error combining rules");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Combine Rules</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Rule IDs (comma-separated):
          <input
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            type="text"
            value={ruleIds}
            onChange={(e) => setRuleIds(e.target.value)}
            required
          />
        </label>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          type="submit"
        >
          Combine Rules
        </button>
      </form>
      {combinedAST && (
        <div className="mt-4">
          <h3 className="font-bold">Combined AST:</h3>
          <pre className="bg-gray-100 p-2 rounded whitespace-pre-line">
            {JSON.stringify(combinedAST, null, 2)}
          </pre>
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <h3 className="mt-4 font-bold">Examples:</h3>
      <p>Input Rule IDs as comma-separated values, e.g.,</p>
      <pre className="bg-gray-100 p-2 rounded whitespace-pre-line">
        "60d21b4667d0d8992e610c85, 60d21b4667d0d8992e610c86"
      </pre>
    </div>
  );
};

export default CombineRules;
