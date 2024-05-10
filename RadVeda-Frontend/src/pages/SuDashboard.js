import { useState, useCallback } from "react";
import NPUserOptions from "../components/NPUserOptions";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { request, getAuthToken} from "../axios_helper";
import { useEffect } from "react";
import "./SuDashboard.css";
import StatsPieChart from "../StatsPieChart";

const SuDashboard = () => {
  const navigate = useNavigate();

  if(getAuthToken() !== null && getAuthToken() !== "null")
  {
    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(response => {
        
      }).catch(error => {
        navigate("/su-login-page");
      })
  }
  else
  {
    useEffect(() => {navigate("/su-login-page");}) 
  }

  const [isNPUserOptionsOpen, setNPUserOptionsOpen] = useState(false);
  

  const onFrameContainerClick = useCallback(() => {
    navigate("/su-review-modification");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/su-review-deletion");
  }, [navigate]);

  const openNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(true);
  }, []);

  const closeNPUserOptions = useCallback(() => {
    setNPUserOptionsOpen(false);
  }, []);

  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const [allChatNotifs, setAllChatNotifs] = useState([]);
  const [allChatNotifsID, setAllChatNotifsID] = useState([]);

  const [allConsentRequestNotifications, setAllConsentRequestNotifications] = useState([]);
  const [allConsentRequestNotificationsID, setAllConsentRequestNotificationsID] = useState([]);

  const [allOneWayNotifications, setAllOneWayNotifications] = useState([]);
  const [allOneWayNotificationsID, setAllOneWayNotificationsID] = useState([]);

  const [requestsPieData, setRequestsPieData] = useState([]);
  const [accountPieData, setAccountPieData] = useState([]);
  

  useEffect(() => {

    request(
      "GET",
      "/superadmins/profile",
      {},
      true
      ).then(profileResponse => {

        var superadminId = profileResponse.data.id
 

        // Requests statistics

        let requestsPieData = [];

        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "DOCTOR",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor signup requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "DOCTOR",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor signup requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "ADMIN",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin signup requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "ADMIN",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin signup requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "ADMIN",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account modification requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "ADMIN",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account modification requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "ADMIN",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account deletion requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "ADMIN",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account deletion requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "RADIOLOGIST",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist signup requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "RADIOLOGIST",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist signup requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "LABSTAFF",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff signup requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "LABSTAFF",
            "requestType": "SIGNUP",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff signup requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "DOCTOR",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account modification requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "DOCTOR",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account modification requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "RADIOLOGIST",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account modification requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "RADIOLOGIST",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account modification requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "LABSTAFF",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account modification requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "LABSTAFF",
            "requestType": "ACCOUNT_MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account modification requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "DOCTOR",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account deletion requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "DOCTOR",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account deletion requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "RADIOLOGIST",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account deletion requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "RADIOLOGIST",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account deletion requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/TODAY",
          {
            "requesterType": "LABSTAFF",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account deletion requests today", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getRequestsStatistics/SO_FAR",
          {
            "requesterType": "LABSTAFF",
            "requestType": "ACCOUNT_DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account deletion requests so far", value: response.data}
              requestsPieData.push(stat)

              setRequestsPieData(requestsPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );



        // Account Statistics

        let accountPieData = [];

        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor registrations today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor registrations so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist registrations today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist registrations so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff registrations today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff registrations so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Patient registrations today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Patient registrations so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account modifications today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account modifications so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account modifications today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account modifications so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account modifications today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account modifications so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Patient account modifications today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Patient account modifications so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account deletions today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Doctor account deletions so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account deletions today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Radiologist account deletions so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account deletions today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "LabStaff account deletions so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Patient account deletions today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Patient account deletions so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "DOCTOR",
            "accountOperationType": "LOGIN",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {

            request(
              "POST",
              "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
              {
                "accountHolderType": "DOCTOR",
                "accountOperationType": "LOGOUT",
                "clientType": "SUPERADMIN",
                "clientId": superadminId
              },
              true
            ).then(
              (response1) => {

                var num_online = response.data - response1.data
    
                if(num_online != 0)
                {
                  const stat = {name: "Currently online doctors", value: num_online}
                  accountPieData.push(stat)
    
                  setAccountPieData(accountPieData)
                }
                
              }
            ).catch(
              (error) => {
                console.log(error)
              }
            );

          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "RADIOLOGIST",
            "accountOperationType": "LOGIN",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {

            request(
              "POST",
              "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
              {
                "accountHolderType": "RADIOLOGIST",
                "accountOperationType": "LOGOUT",
                "clientType": "SUPERADMIN",
                "clientId": superadminId
              },
              true
            ).then(
              (response1) => {

                var num_online = response.data - response1.data
    
                if(num_online != 0)
                {
                  const stat = {name: "Currently online radiologists", value: num_online}
                  accountPieData.push(stat)
    
                  setAccountPieData(accountPieData)
                }
                
              }
            ).catch(
              (error) => {
                console.log(error)
              }
            );

          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "LABSTAFF",
            "accountOperationType": "LOGIN",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {

            request(
              "POST",
              "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
              {
                "accountHolderType": "LABSTAFF",
                "accountOperationType": "LOGOUT",
                "clientType": "SUPERADMIN",
                "clientId": superadminId
              },
              true
            ).then(
              (response1) => {

                var num_online = response.data - response1.data
    
                if(num_online != 0)
                {
                  const stat = {name: "Currently online labstaffs", value: num_online}
                  accountPieData.push(stat)
    
                  setAccountPieData(accountPieData)
                }
                
              }
            ).catch(
              (error) => {
                console.log(error)
              }
            );

          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "PATIENT",
            "accountOperationType": "LOGIN",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {

            request(
              "POST",
              "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
              {
                "accountHolderType": "PATIENT",
                "accountOperationType": "LOGOUT",
                "clientType": "SUPERADMIN",
                "clientId": superadminId
              },
              true
            ).then(
              (response1) => {

                var num_online = response.data - response1.data
    
                if(num_online != 0)
                {
                  const stat = {name: "Currently online patients", value: num_online}
                  accountPieData.push(stat)
    
                  setAccountPieData(accountPieData)
                }
                
              }
            ).catch(
              (error) => {
                console.log(error)
              }
            );

          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin registrations today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "REGISTRATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin registrations so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );

        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account modifications today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "MODIFICATION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account modifications so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/TODAY",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account deletions today", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );


        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "DELETION",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {
            if(response.data != 0)
            {
              const stat = {name: "Admin account deletions so far", value: response.data}
              accountPieData.push(stat)

              setAccountPieData(accountPieData)
            }
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        );

        request(
          "POST",
          "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
          {
            "accountHolderType": "ADMIN",
            "accountOperationType": "LOGIN",
            "clientType": "SUPERADMIN",
            "clientId": superadminId
          },
          true
        ).then(
          (response) => {

            request(
              "POST",
              "http://localhost:9203/analytics/getAccountStatistics/SO_FAR",
              {
                "accountHolderType": "ADMIN",
                "accountOperationType": "LOGOUT",
                "clientType": "SUPERADMIN",
                "clientId": superadminId
              },
              true
            ).then(
              (response1) => {

                var num_online = response.data - response1.data
    
                if(num_online != 0)
                {
                  const stat = {name: "Currently online admins", value: num_online}
                  accountPieData.push(stat)
    
                  setAccountPieData(accountPieData)
                }
                
              }
            ).catch(
              (error) => {
                console.log(error)
              }
            );

          }
        ).catch(
          (error) => {
            console.log(error)
          }
        )


      }).catch(error => {
        console.log(error)
      })

    
  }, []);


  const deleteChatID = (index) => {
    // console.log(res);
    console.log("index is", index);
    console.log("Chat ID is", allChatNotifsID[index]);
    let idToDelete = allChatNotifsID[index];
    request(
      "DELETE",
      "http://localhost:9193/notifications/deleteChatNotification/" + String(idToDelete), 
      {
        
      },
      true
      ).then(
        () => {
          
          console.log("SUCCESS");
          alert("Chat Notification deleted successfully");
        }
      ).catch(
        (error) => {
          // alert(error.response.data.error);
          console.log("ERROR in deleting")
        }
      )
  }

  const deleteAllChatNotifs = () => {
    request(
      "DELETE",
      "http://localhost:9193/notifications/deleteAllChatNotifications", 
      {

      },
      true
      ).then(
        () => {
          
          console.log("SUCCESS");
          alert("Chat Notifications deleted successfully");
        }
      ).catch(
        (error) => {
          // alert(error.response.data.error);
          console.log("ERROR in deleting")
        }
      )
  }

  const openNotifications = useCallback(() => {
    console.log("CLICKED NOTIFICATIONS")
    request(
      "GET",
      "http://localhost:9193/notifications/getAllChatNotifications", 
      {

      },
      true
      ).then(
        (response) => {
          
          console.log(response.data);
          
          setAllChatNotifs([]);
          let arr = []
          let arrID = []
          for (let i = 0; i < response.data.length; i++) {

            arr.push(response.data[i].message);
            arrID.push(response.data[i].id);
          }

          setAllChatNotifs(arr);
          setAllChatNotifsID(arrID);
        }
      ).catch(
        (error) => {
          // alert(error.response.data.error);
          console.log("ERROR1")
        }
      )

      request(
        "GET",
        "http://localhost:9193/notifications/getAllConsentRequestNotifications", 
        {
  
        },
        true
        ).then(
          (response) => {
            
            console.log(response.data[0].message);
            
            setAllConsentRequestNotifications([]);
            let arr = []
            let arrID = []
            for (let i = 0; i < response.data.length; i++) {
  
              arr.push(response.data[i].message);
              arrID.push(response.data[i].id);
            }
  
            setAllConsentRequestNotifications(arr);
            setAllConsentRequestNotificationsID(arrID);
            
          }
        ).catch(
          (error) => {
            // alert(error.response.data.error);
            console.log("ERROR2")
          }
        )

        request(
          "GET",
          "http://localhost:9193/notifications/getAllOneWayNotifications", 
          {
    
          },
          true
          ).then(
            (response) => {
              
              console.log(response.data[0].message);
              
              setAllOneWayNotifications([]);
              let arr = []
              let arrID = []
              for (let i = 0; i < response.data.length; i++) {
    
                arr.push(response.data[i].message);
                arrID.push(response.data[i].id);
              }
    
              setAllOneWayNotifications(arr);
              setAllOneWayNotificationsID(arrID);
              
            }
          ).catch(
            (error) => {
              // alert(error.response.data.error);
              console.log("ERROR3")
            }
          )


    setNotificationsOpen(true);
  }, []);

  const closeNotifications = useCallback(() => {
    setNotificationsOpen(false);
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/su-view-admins");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/su-review-signup");
  }, [navigate]);

  return (
    <>
      <div className="su-dashboard">
        <div className="su-dashboard-inner" onClick={onFrameContainerClick}>
          <div className="review-account-modification-re-wrapper">
            <div className="review-account-modification">{`review Account Modification Requests `}</div>
          </div>
        </div>
        <div className="su-dashboard-child" onClick={onFrameContainer1Click}>
          <div className="review-account-deletion-reques-wrapper">
            <div className="review-account-modification">
              Review Account Deletion Requests
            </div>
          </div>
        </div>
        {/*<div className="group-parent2">*/}
        {/*  <div className="rectangle-wrapper">*/}
        {/*    <div className="group-child" />*/}
        {/*  </div>*/}
        {/*  <div className="frame-child5" />*/}
        {/*  <div className="clear-all">clear all</div>*/}
        {/*</div>*/}
        <img className="vector-icon13" alt="" />
        <img
          className="su-dashboard-item"
          alt=""
          src="/frame-53.svg"
          onClick={openNPUserOptions}
        />
        <div className="iconnotification-bing2">
          <img className="vector-icon14" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon15" alt="" src="/vector.svg" onClick={openNotifications}/>
          <img className="vector-icon16" alt="" onClick={openNotifications}/>
          <div className="iconnotification-bing-inner" onClick={openNotifications}/>
          <div className="div5">03</div>
        </div>
        <img className="need-help-icon2" alt="" src="/need-help.svg" />
        <div className="su-dashboard-child1" />
        <div className="good-morning-super-admin1-parent">
          <div className="good-morning-super-container">
            <span>Good Morning</span>
            <b className="super-admin1"> Super Admin1</b>
          </div>

          <div className="group-wrapper1" onClick={onFrameContainer12Click}>
            <div className="notifications-wrapper">
              <div className="review-account-modification">View Admins</div>
            </div>
          </div>
          <div className="group-wrapper2" onClick={onFrameContainer2Click}>
            <div className="review-signup-requests-wrapper">
              <div className="review-account-modification">{`review signup requests `}</div>
            </div>
          </div>
        </div>
        {/*<div className="su-dashboard-child2" />*/}
        
        {/*<div className="su-dashboard-child3" />*/}
        {/*<div className="su-dashboard-child4" />*/}
        {/*<img className="line-icon" alt="" />*/}
        {/*<img className="su-dashboard-child5" alt="" />*/}
        {/*<img className="su-dashboard-child6" alt="" />*/}
        {/*<img className="su-dashboard-child7" alt="" />*/}
        {/*<div className="su-dashboard-child8" />*/}
        
      
      
        <div className="requests-piechart-container">
          <h2 className="requests-piechart">Requests Statistics</h2>
          <StatsPieChart data={requestsPieData} />
        </div>

        <div className="account-piechart-container">
          <h2 className="account-piechart">Account Statistics</h2>
          <StatsPieChart data={accountPieData} />
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
      {isNotificationsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeNotifications}
        >
          <div className="notification-container">
            <h2 className="notification-heading">Notifications</h2>
            <div className="message-container">
                {allChatNotifs.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="reply-button">Reply</button>
                            <button className="ignore-button">Ignore</button>
                            <button className="clear-button" onClick={() => deleteChatID(index)}>Clear</button>
                        </div>
                    </div>
                
                ))}
                {allConsentRequestNotifications.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="reply-button">Fill Consent Form</button>
                            <button className="clear-button">Clear</button>
                        </div>
                    </div>
                ))}
                {allOneWayNotifications.map((message, index) => (
                    <div className="message" key={index}>
                        <div className="message-content">{message}</div>
                        <div className="buttons-container">
                            <button className="clear-button">Clear</button>
                        </div>
                    </div>
                ))}
                <button className="clear-button"onClick={deleteAllChatNotifs}>Clear All Chat Notifications</button>

            </div>
        </div>
          
        </PortalPopup>
      )}
    </>
  );
};

export default SuDashboard;
