import { useState } from "react";
import Button from "../Button/Button";
import CustomerList from "../CustomerList/CustomerList";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SelectList from "../SelectList/SelectList";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";

const TipCalculator = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const [totalTip, setTotalTip] = useState("0");
  const [customer, setCustomer] = useState("0");
  const [option, setOption] = useState("");
  const [text, setText] = useState("");
  const [tip, setTip] = useState([]);

  const numberInputHandler = (e) => {
    setNumber(e.target.value);
  };

  const optionSelect = (e) => {
    setOption(e.target.value);
  };

  const textInputHandler = (e) => {
    setText(e.target.value);
  };

  const btnClick = () => {
    const tips = (number * option) / 100;
    setTip([...tip, tips]);
    const listItem = `${text} offering a tip of ${tips} rupees`;
    setList([...list, listItem]);
    setNumber("");
    setText("");
    setCustomer("0");
    setTotalTip("0");
  };

  const tipButtonClick = () => {
    const tipp = (number * option) / 100;
    setTip([...tip, tipp]);
    let totalTip = 0;
    for (let i = 0; i < tip.length; i++) {
      totalTip += tip[i];
    }
    setTotalTip(totalTip);
    let c = list.length;
    setCustomer(c);
  };

  const selectListStyle = {
    borderColor: "skyblue",
    height: "30px",
    border: "3px solid skyblue",
    marginRight: "20px",
  };
  const listBtnStyle = {
    marginLeft: "10px",
    color: "white",
    backgroundColor: "#22a4f0",
    height: "25px",
  };
  const tipBtnStyle = {
    backgroundColor: "#22dd00",
    color: "white",
    height: "30px",
    marginBottom: "10px",
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h3>Enter Your Bill Amount</h3>
        <Input
          style={{ width: "1300px" }}
          type="number"
          inputHandler={numberInputHandler}
          value={number}
        />
      </div>
      <hr style={{ margin: "30px" }}></hr>
      <div style={{ textAlign: "center" }}>
        <label>How was the service:</label>
        <SelectList optionClick={optionSelect} style={selectListStyle} />
        <Input
          type="text"
          placeholder="Customer Name"
          value={text}
          inputHandler={textInputHandler}
        />
        <Button
          btnText="Add Customer"
          isdisable={!number || !text || !option}
          clickHandler={btnClick}
          style={listBtnStyle}
        />
      </div>
      <h2 style={{ textAlign: "center" }}>Customer List</h2>
      <div style={{ textAlign: "left" }}>
        <CustomerList list={list} />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          btnText="Calculate Tip & Customer"
          clickHandler={tipButtonClick}
          style={tipBtnStyle}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Table total={totalTip} customer={customer} />
      </div>
      <Footer />
    </>
  );
};

export default TipCalculator;
