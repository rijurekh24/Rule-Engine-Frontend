import React, { useState } from "react";
import axios from "axios";

const EvaluateRule = () => {
  const [ruleId, setRuleId] = useState("");
  const [data, setData] = useState({
    age: "",
    department: "",
    salary: "",
    experience: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/rules/evaluate",
        { ruleId, data }
      );
      setResult(response.data.result);
    } catch (err) {
      setError("Error evaluating rule");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Evaluate Rule</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            Rule ID:
            <input
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              type="text"
              value={ruleId}
              onChange={(e) => setRuleId(e.target.value)}
              required
            />
          </label>
          <label className="block">
            Age:
            <input
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              type="number"
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              required
            />
          </label>
          <label className="block">
            Department:
            <input
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              type="text"
              value={data.department}
              onChange={(e) => setData({ ...data, department: e.target.value })}
              required
            />
          </label>
          <label className="block">
            Salary:
            <input
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              type="number"
              value={data.salary}
              onChange={(e) => setData({ ...data, salary: e.target.value })}
              required
            />
          </label>
          <label className="block">
            Experience:
            <input
              className="mt-1 block w-full border border-gray-300 rounded p-2"
              type="number"
              value={data.experience}
              onChange={(e) => setData({ ...data, experience: e.target.value })}
              required
            />
          </label>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
          type="submit"
        >
          Evaluate Rule
        </button>
      </form>
      {result !== null && (
        <div className="mt-4">
          <h3 className="font-bold">Evaluation Result:</h3>
          <p>{result ? "True" : "False"}</p>
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <h3 className="mt-4 font-bold">Examples:</h3>
      <pre className="bg-gray-100 p-2 rounded whitespace-pre-line">
        {`data = {"age": 35, "department": "Sales", "salary": 60000, "experience": 3}`}
      </pre>
    </div>
  );
};

export default EvaluateRule;
