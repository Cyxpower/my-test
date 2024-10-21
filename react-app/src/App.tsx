import { useState } from "react";

function App() {
  const [style, setStyle] = useState("solid");
  const [page,setPage] = useState("a")
  return (
    <div
      
      style={{
        textAlign: "center",
        padding: "10px",
        margin: "30px",
      }}
    >
      <h1
        style={{
          backgroundColor: "skyblue",
          borderRadius: "10px",
          padding: "20px",
          fontFamily: "Monaco",
          marginBottom: "30px",
        }}
      >
        League of Legends
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            border: `3px ${style} blue`,
            display: "flex",
            height: "900px",
            width: "200px",
            marginRight: "30px",
            flexDirection: "column",
          }}
        >
          <button onClick={() => setPage("a")}>变成a</button>
          <button onClick={() => setPage("b")}>变成b</button>
          <button onClick={() => setPage("c")}>变成c</button>
          <button onClick={() => setPage("d")}>变成d</button>
          <button onClick={() => setPage("e")}>变成e</button>
        </div>
        {page === "a" && (
          <div
            className="container"
            style={{
              border: `3px ${style} blue`,
              display: "inline-block",
            }}
          >
            属性值是：{style}
            <select name="a" onChange={(e) => setStyle(e.target.value)}>
              <option value="solid">实线</option>
              <option value="dashed">虚线</option>
              <option value="dotted">点线</option>
              <option value="double">镂空</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
