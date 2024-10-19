import React, { useContext, useState } from "react";
import axios from "axios";
import { storeContext } from "../Context/StoreContext";
const CreateRule = () => {
  const [ruleString, setRuleString] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const ctx = useContext(storeContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/rules/create",
        { ruleString }
      );

      if (response.data.success) {
        setSuccess(true);
        ctx.fetchAllRules();
        setRuleString("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error creating rule");
      setSuccess(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Create Rule</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Rule String:
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            required
          />
        </label>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          type="submit"
        >
          Create Rule
        </button>
      </form>
      {success && (
        <p className="text-green-500 mt-2">Rule created successfully!</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <h3 className="mt-4 font-bold">Examples:</h3>
      <pre className="bg-gray-100 p-2 rounded whitespace-pre-line">
        {`rule1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"`}
      </pre>
    </>
  );
};

export default CreateRule;
