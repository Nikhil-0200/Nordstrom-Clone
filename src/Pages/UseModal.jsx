import { useDisclosure, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";


export const useModal = () => {
    const [overlayType, setOverlayType] = useState(null);
    
    const OverlayOne = () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(5px) hue-rotate(90deg)"
      />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<OverlayOne />);

    return {isOpen, onOpen, onClose, overlay, setOverlay, OverlayOne}
  };