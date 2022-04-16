import { React} from "react";
import "./LangForm.css"
import validate from "./ValidateInfo";
import useForm from "./useForm";


const LangForm = (props) => {
  
  const { handleChange, handleSubmit, values, setValues } = useForm(
    props,
    validate
  );
  
  return (
    <div className="container" id="Lang-formContiner">
      <div className="Lang-form">
        <form className="Lang-card-form" onSubmit={handleSubmit}>
          <div className="Lang-form-title">
            <h2>Course Pre-questionnaire</h2>
            <p className="Lang-title-description">
            This form is for the participants who wish to develop their 
            "thinking skills" to better manage the challenges of study and life. 
            Please fill up this form to get started with the workshop
            </p>
          </div>
          <div className="Lang-input">
            <input
              id="email"
              type="email"
              name="email"
              className="Lang-input-field"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="Lang-input-label">
              Email<span style={{color:"red"}}>*</span>
            </label>
          </div>
          <div className="Lang-input">
            <input
              id="placeofstudy"
              type="text"
              name="placeofstudy"
              className="Lang-input-field"
              value={values.placeofstudy}
              onChange={handleChange}
              required
            />
            <label htmlFor="placeofstudy" className="Lang-input-label">
            Please write the name of your current place of study<span style={{color:"red"}}>*</span>
            </label>
          </div>
          <div className="Lang-input">
            <input
              id="placeofstudy"
              type="text"
              name="placeofstudy"
              className="Lang-input-field"
              value={values.placeofstudy}
              onChange={handleChange}
              required
            />
            <label htmlFor="placeofstudy" className="Lang-input-label">
            Email (The Google Meet link and e-certificate would be sent at this address)<span style={{color:"red"}}>*</span>
            </label>
          </div>
          <div className="Lang-input">
            <input
              id="placeofstudy"
              type="text"
              name="placeofstudy"
              className="Lang-input-field"
              value={values.placeofstudy}
              onChange={handleChange}
              required
            />
            <label htmlFor="placeofstudy" className="Lang-input-label">
            In your opinion, is asking questions important? If yes, why? Please give an example of a question that you would like to know more about? *<span style={{color:"red"}}>*</span>
            </label>
          </div>
          <div className="Lang-input">
            <input
              id="placeofstudy"
              type="text"
              name="placeofstudy"
              className="Lang-input-field"
              value={values.placeofstudy}
              onChange={handleChange}
              required
            />
            <label htmlFor="placeofstudy" className="Lang-input-label">
            Your full name (as you would like it to appear on your certificate)<span style={{color:"red"}}>*</span>
            </label>
          </div>
          <div className="Lang-card-info">
            <input
              className="Lang-checkbox"
              type="checkbox"
              id="terms"
              onChange={handleChange}
              value="agree"
              required
            />
            <label className="Lang-checkboxinfo" htmlfor="terms">
              I agree to the <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <div className="Lang-action row">
            <button
              className="Lang-action-button"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LangForm;
