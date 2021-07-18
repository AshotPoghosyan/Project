import React, {useState} from 'react';
import { Alert } from '@material-ui/lab';
import Snackbar from "@material-ui/core/Snackbar";


export default function DescriptionAlerts(props) {
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const vertical = "top"
  const horizontal = "center"

  return (
    <div >
      <Snackbar
        open={openErrorModal}
        autoHideDuration={1888000}
        onClose={() => setOpenErrorModal(false)} 
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={() => setOpenErrorModal(false)} severity="error">
          The email or password you entered is incorrect.
        </Alert>
      </Snackbar>
    </div>
  );
}


