import React, {useState} from 'react';
import { Alert } from '@material-ui/lab';
import Snackbar from "@material-ui/core/Snackbar";


export default function DescriptionAlerts() {
  const [openErrorModal, setOpenErrorModal] = useState(true);

  return (
    <div >
         <Snackbar
          open={openErrorModal}
          autoHideDuration={8000}
          onClose={() => setOpenErrorModal(false)}
        >
          <Alert onClose={() => setOpenErrorModal(false)} severity="error">
            The email or password you entered is incorrect.
          </Alert>
        </Snackbar>
    </div>
  );
}
