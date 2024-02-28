import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import "./DocPTDetails.css";

const DocPTDetails = () => {

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/doctors/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/doc-login-page");
      })
  }
  else
  {
    navigate("/doc-login-page");
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  const navigate = useNavigate();

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doc-dashboard");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/doc-pt-verification");
  }, [navigate]);

  return (
    <>
      <div className="doc-pt-details">
        <div className="doc-pt-details-child" />
        <img className="vector-icon85" alt="" />
        <img
          className="doc-pt-details-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing18">
          <img className="vector-icon86" alt="" src="/vector.svg" />
          <img className="vector-icon87" alt="" src="/vector.svg" />
          <img className="vector-icon88" alt="" />
          <div className="iconnotification-bing-child16" />
          <div className="div44">03</div>
        </div>
        <img className="need-help-icon18" alt="" src="/need-help.svg" />
        <div className="doc-pt-details-inner" />
        <div className="doc-pt-details-child1" />
        <div className="frame-parent26">
          <div className="group-wrapper58">
            <div className="remarks-for-radiologist-wrapper">
              <div className="remarks-for-radiologist">
                Remarks for Radiologist
              </div>
            </div>
          </div>
          <div className="group-wrapper59" onClick={onFrameContainer1Click}>
            <div className="submit-container">
              <div className="remarks-for-radiologist">Submit</div>
            </div>
          </div>
          <div className="frame-child131" />
          <div className="frame-child132" />
          <div className="group-wrapper60">
            <div className="remarks-for-patient-wrapper">
              <div className="remarks-for-radiologist">Remarks for patient</div>
            </div>
          </div>
          <div className="text-fieldoutlined71">
            <div className="input71">
              <div className="content76">
                <div className="min-height71" />
                <div className="label71">Remarks</div>
              </div>
            </div>
            <div className="helpertext71">
              <div className="helper-text71">Helper text</div>
            </div>
          </div>
        </div>
        <div className="text-fieldoutlined72">
          <div className="input71">
            <div className="content76">
              <div className="min-height71" />
              <div className="label71">Remarks</div>
            </div>
          </div>
          <div className="helpertext71">
            <div className="helper-text71">Helper text</div>
          </div>
        </div>
        <div className="text-fieldoutlined73">
          <div className="input71">
            <div className="content76">
              <div className="min-height71" />
              <div className="label71">X-Ray</div>
            </div>
          </div>
          <div className="helpertext71">
            <div className="helper-text71">Helper text</div>
          </div>
        </div>
        <div
          className="doc-pt-details-inner1"
          onClick={onFrameContainer12Click}
        >
          <div className="back-wrapper21">
            <div className="remarks-for-radiologist">Back</div>
          </div>
        </div>
        <div className="doc-pt-details-inner2">
          <div className="test-type-wrapper">
            <div className="remarks-for-radiologist">Test Type</div>
          </div>
        </div>
      </div>
      {isNPUserOptionsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNPUserOptions}
        >
          <NPUserOptions onClose={closeNPUserOptions} />
        </PortalPopup>
      )}
    </>
  );
};

export default DocPTDetails;
