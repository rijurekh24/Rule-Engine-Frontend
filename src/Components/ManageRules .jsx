import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { storeContext } from "../Context/StoreContext";

const RulesList = () => {
  const [error, setError] = useState("");
  const [editRuleId, setEditRuleId] = useState(null);
  const [newRuleString, setNewRuleString] = useState("");
  const ctx = useContext(storeContext);

  useEffect(() => {
    ctx.fetchAllRules();
  }, []);

  const handleUpdateClick = (id, ruleString) => {
    setEditRuleId(id);
    setNewRuleString(ruleString);
  };

  const handleUpdateSubmit = async (id) => {
    try {
      await axios.put(
        `https://rule-engine-backend-3883.onrender.com/api/rules/update/${id}`,
        {
          ruleString: newRuleString,
        }
      );
      // await axios.put(`http://localhost:5000/api/rules/update/${id}`, {
      //   ruleString: newRuleString,
      // });
      setEditRuleId(null);
      setNewRuleString("");
      ctx.fetchAllRules();
    } catch (err) {
      setError("Error updating rule");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://rule-engine-backend-3883.onrender.com/api/rules/delete/${id}`
      );
      // await axios.delete(`http://localhost:5000/api/rules/delete/${id}`);
      ctx.fetchAllRules();
    } catch (err) {
      setError("Error deleting rule");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Rules List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc ml-5">
        {ctx.rules.map((rule) => (
          <li key={rule.id} className="mb-2">
            <div>
              <strong>ID:</strong> {rule.id} <br />
              <strong>Rule String:</strong>
              {editRuleId === rule.id ? (
                <div>
                  <input
                    type="text"
                    value={newRuleString}
                    onChange={(e) => setNewRuleString(e.target.value)}
                    className="mt-1 border border-gray-300 rounded p-1 w-3/4"
                  />
                  <button
                    className="bg-green-500 text-white rounded px-2 py-1 ml-2"
                    onClick={() => handleUpdateSubmit(rule.id)}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <span>{rule.ruleString}</span>
              )}
              {!editRuleId && (
                <button
                  className="mt-2 bg-blue-500 text-white rounded px-2 py-1 ml-2"
                  onClick={() => handleUpdateClick(rule.id, rule.ruleString)}
                >
                  Edit
                </button>
              )}
              <button
                className="mt-2 bg-red-500 text-white rounded px-2 py-1 ml-2"
                onClick={() => handleDelete(rule.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RulesList;
