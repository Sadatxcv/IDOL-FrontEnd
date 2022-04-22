import React, { useState, useEffect } from "react";
import "./Testquestion.css";

//material Ui icon
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ShortTextIcon from "@material-ui/icons/ShortText";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import SubjectIcon from "@material-ui/icons/Subject";
import BackupIcon from "@material-ui/icons/Backup";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

//react icons
import { BsTrash } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";

function Testquestion() {
  const [questions, setQuestions] = useState();

  function QuestionUi() {
    return (
      <div>
        <h2>Question Ui</h2>
      </div>
    );
  }

  return (
    <div className="question_form">
      <br></br>
      <div className="section">
        <div className="question_title_section">
          <div className="question_form_top">
            <input
              type="text"
              className="question_form_top_name"
              style={{ color: "black" }}
              placeholder="Untitled Document"
              // value={documentName}
              // onChange={(e) => {
              //   setDocName(e.target.value);
              // }}
            ></input>
            <input
              type="text"
              className="question_form_top_desc"
              placeholder="Form Description"
              // value={documentDescription}
              // onChange={(e) => {
              //   setDocDesc(e.target.value);
              // }}
            ></input>
          </div>
        </div>
        {QuestionUi()}
      </div>
    </div>
  );
}

export default Testquestion;
