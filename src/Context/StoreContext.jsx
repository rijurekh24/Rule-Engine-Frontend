import { createContext, useEffect, useState } from "react";
import axios from "axios";
const storeContext = createContext();

const StoreContext = ({ children }) => {
  const [rules, setRules] = useState([]);
  const fetchAllRules = () => {
    axios.get("http://localhost:5000/api/rules/getallrules").then((res) => {
      setRules(res.data);
    });
  };

  const value = {
    rules,
    setRules,
    fetchAllRules,
  };
  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
};

export default StoreContext;

export { storeContext };
