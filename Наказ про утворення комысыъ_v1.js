function onBeforeCardSave() {
  EdocsApi.setAttributeValue({
    code: "Accountant",
    value: "40762332",
    text: null,
  });
  setDepartmentNew();
}

function onTaskExecuteRegistration(routeStage) {
  debugger;
  if (routeStage.executionResult == "executed") {
    EdocsApi.setAttributeValue({
      code: "NumberOrder",
      value: EdocsApi.getAttributeValue("RegNumber").value,
      text: null,
    });
    EdocsApi.setAttributeValue({
      code: "DateOrder",
      value: EdocsApi.getAttributeValue("RegDate").value,
      text: null,
    });
    setDateSTR("RegDate", "RegDateText");
  }
}

function setRegDateText() {
  if (EdocsApi.getAttributeValue("RegDate").value && !EdocsApi.getAttributeValue("RegDateText").value) {
    setDateSTR("RegDate", "RegDateText");
    EdocsApi.setAttributeValue({ code: "NumberOrder", value: EdocsApi.getAttributeValue("RegNumber").value, text: null });
    EdocsApi.setAttributeValue({ code: "DateOrder", value: EdocsApi.getAttributeValue("RegDate").value, text: null });
  }
}

function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function onChangeApproval() {
  debugger;
  var employeeId = EdocsApi.getAttributeValue("Approval")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue("ApprovalNameI", data.nameSurname.trim().split(" ")[0] || "");
      setAttrValue("ApprovalNameF", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1] || "");
      setAttrValue("ApprovalNameF2", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1].toUpperCase() || "");
      setAttrValue("ApprovalPosition", data.positionName.toLowerCase() || "");
      setAttrValue("ApprovalEmail", data.email || "");
    }
  } else {
    setAttrValue("ApprovalNameI", "");
    setAttrValue("ApprovalNameF", "");
    setAttrValue("ApprovalNameF2", "");
    setAttrValue("ApprovalPosition", "");
    setAttrValue("ApprovalEmail", "");
  }
}

function onChangeAddReview() {
  var employeeId = EdocsApi.getAttributeValue("AddReview")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue("AddReviewNameI", data.nameSurname.trim().split(" ")[0] || "");
      setAttrValue("AddReviewNameF", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1] || "");
      setAttrValue("AddReviewNameF2", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1].toUpperCase() || "");
      setAttrValue("AddReviewPosition", data.positionName.toLowerCase() || "");
      setAttrValue("AddReviewEmail", data.email || "");
    }
  } else {
    setAttrValue("AddReviewNameI", "");
    setAttrValue("AddReviewNameF", "");
    setAttrValue("AddReviewNameF2", "");
    setAttrValue("AddReviewPosition", "");
    setAttrValue("AddReviewEmail", "");
  }
}

function onChangeAddApprovers() {
  var employeeId = EdocsApi.getAttributeValue("AddApprovers")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue("AddApproversNameI", data.nameSurname.trim().split(" ")[0] || "");
      setAttrValue("AddApproversNameF", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1] || "");
      setAttrValue("AddApproversF2", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1].toUpperCase() || "");
      setAttrValue("AddApproversPosition", data.positionName.toLowerCase() || "");
      setAttrValue("AddApproversEmail", data.email || "");
    }
  } else {
    setAttrValue("AddApproversNameI", "");
    setAttrValue("AddApproversNameF", "");
    setAttrValue("AddApproversF2", "");
    setAttrValue("AddApproversPosition", "");
    setAttrValue("AddApproversEmail", "");
  }
}

function onChangeCommissioner6NameF() {
  debugger;
  var Commissioner6NameF = EdocsApi.getAttributeValue("Commissioner6NameF").value;
  if (Commissioner6NameF) {
    setAttrValue("Commissioner6NameF2", Commissioner6NameF.toUpperCase());
  } else {
    setAttrValue("Commissioner6NameF2", "");
  }
}

function onChangeCommissioner7NameF() {
  debugger;
  var Commissioner7NameF = EdocsApi.getAttributeValue("Commissioner7NameF").value;
  if (Commissioner7NameF) {
    setAttrValue("Commissioner7NameF2", Commissioner7NameF.toUpperCase());
  } else {
    setAttrValue("Commissioner7NameF2", "");
  }
}

function onChangeCommissioner8NameF() {
  debugger;
  var Commissioner8NameF = EdocsApi.getAttributeValue("Commissioner8NameF").value;
  if (Commissioner8NameF) {
    setAttrValue("Commissioner8NameF2", Commissioner8NameF.toUpperCase());
  } else {
    setAttrValue("Commissioner8NameF2", "");
  }
}

function onChangeSignatoryNameF() {
  debugger;
  var SignatoryNameF = EdocsApi.getAttributeValue("SignatoryNameF").value;
  if (SignatoryNameF) {
    setAttrValue("SignatoryNameF2", SignatoryNameF.toUpperCase());
  } else {
    setAttrValue("SignatoryNameF2", "");
  }
}

function onChangeReview() {
  debugger;
  var employeeId = EdocsApi.getAttributeValue("Review")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue("ReviewNameI", data.nameSurname.trim().split(" ")[0] || "");
      setAttrValue("ReviewNameF", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1] || "");
      setAttrValue("ReviewNameF2", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1].toUpperCase() || "");
      setAttrValue("ReviewPosition", data.positionName.toLowerCase() || "");
      setAttrValue("ReviewEmail", data.email || "");
    }
  } else {
    setAttrValue("ReviewNameI", "");
    setAttrValue("ReviewNameF", "");
    setAttrValue("ReviewNameF2", "");
    setAttrValue("ReviewPosition", "");
    setAttrValue("ReviewEmail", "");
  }
}

function onChangeCommissioner4() {
  debugger;
  var employeeId = EdocsApi.getAttributeValue("Commissioner4")?.value;
  if (employeeId) {
    var data = EdocsApi.getEmployeeDataByEmployeeID(employeeId);
    if (data) {
      setAttrValue("Commissioner4NameI", data.nameSurname.trim().split(" ")[0] || "");
      setAttrValue("Commissioner4NameF", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1] || "");
      setAttrValue("Commissioner4NameF2", data.nameSurname.trim().split(" ")[data.nameSurname.trim().split(" ").length - 1].toUpperCase() || "");
      setAttrValue("Commissioner4Position", data.positionName.toLowerCase() || "");
      setAttrValue("Commissioner4Email", data.email || "");
    }
  } else {
    setAttrValue("Commissioner4NameI", "");
    setAttrValue("Commissioner4NameF", "");
    setAttrValue("Commissioner4NameF2", "");
    setAttrValue("Commissioner4Position", "");
    setAttrValue("Commissioner4Email", "");
  }
}

function onCardInitialize() {
  setRegDateText();
}

function setSTRDates() {
  debugger;
  setDateSTR("RegDate", "RegDateText");
}

function setDateSTR(DateCODE, TXTcode) {
  debugger;
  var Date = EdocsApi.getAttributeValue(DateCODE).value;
  var txt = null;
  if (Date) txt = moment(Date).format("DD.MM.YYYY");
  if (txt != EdocsApi.getAttributeValue(TXTcode).value) EdocsApi.setAttributeValue({ code: TXTcode, value: txt, text: null });
}

function setDepartmentNew() {
  var Department = EdocsApi.getAttributeValue("Department")?.value;
  if (Department) {
    setAttrValue("DepartmentNew", setPositionDeclension(Department));
  } else {
    setAttrValue("DepartmentNew", null);
  }
}

//positionDeclension
function setPositionDeclension(positionName) {
  if (positionName) {
    const arrayPositionName = positionName.split(" ");
    const arrForPositionName = [];
    let firstWord;
    let wordEnding;
    for (let index = 0; index < arrayPositionName.length; index++) {
      if (arrayPositionName[index] != "") {
        arrForPositionName.push(arrayPositionName[index]);
      }
    }
    firstWord = arrForPositionName[0];
    wordEnding = arrForPositionName.slice(1);

    firstWord = firstWord.replace(/(Факультет|факультет)$/, firstWord + "у");
    firstWord = firstWord.replace(/(Бізнес-школа|бізнес-школа)$/, firstWord.slice(0, -1) + "у");
    positionName = `${firstWord} ${wordEnding.join(" ")}`;
  }
  return positionName;
}
