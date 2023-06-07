import React from "react";
import ChessGame from "../components/ChessGame";

const ChessPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
      <ChessGame />
    </div>
  );
};

export default ChessPage;
