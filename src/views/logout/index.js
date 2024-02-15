import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    localStorage.setItem("key", null);
    navigate("/login");
  }, []);

  useEffect(() => {
    const handleinvalidtoken = (e) => {
      console.log("event", e);
      if (e.key === "key" && e.oldValue !== e.newValue) {
        navigate("/login");
      }
    };

    window.addEventListener("storage", handleinvalidtoken);

    return function cleanup() {
      window.removeEventListener("storage", handleinvalidtoken);
    };
  }, []);

  return (
    <>
      <div>Profile</div>
      <button onClick={handleSubmit}>Logout</button>
    </>
  );
};

export default Logout;
