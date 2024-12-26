import { useState } from "react";

const useOpenOrClose = () => {
  const [show, isShow] = useState<boolean>(false);

  const showModal = () => {
    isShow(!show);
  };
  return { showModal, isShow, show };
};

export default useOpenOrClose;
