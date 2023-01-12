import axios from "axios";
import React, { useState } from "react";
import { DateTime } from "luxon";
import { Button, ButtonState } from "../button";
import { Alert, Container } from "react-bootstrap";
import { useDownloadFile } from "../customHooks/useDownloadFile";

export const DownloadSampleCsvFile: React.FC = () => {
  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonState.Primary
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const preDownloading = () => setButtonState(ButtonState.Loading);
  const postDownloading = () => setButtonState(ButtonState.Primary);

  const onErrorDownloadFile = () => {
    setButtonState(ButtonState.Primary);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const getFileName = () => {
    return DateTime.local().toISODate() + "_source.xlsx";
  };

  const downloadSampleCsvFile = () => {
    // throw new Error("uncomment this line to mock failure of API");
    return axios.get(
      "http://127.0.0.1:8000/api/get-source-file",
      {
        responseType: "blob",
      }
    );
  };

  const { ref, url, download, name } = useDownloadFile({
    apiDefinition: downloadSampleCsvFile,
    preDownloading,
    postDownloading,
    onError: onErrorDownloadFile,
    getFileName,
  });

  return (
    <Container className="mt-5">
      <Alert variant="danger" show={showAlert}>
        Something went wrong. Please try again!
      </Alert>
      <a href={url} download={name} className="hidden" ref={ref} />
      <Button label="Скачать source_file" buttonState={buttonState} onClick={download} />
    </Container>
  );
};
