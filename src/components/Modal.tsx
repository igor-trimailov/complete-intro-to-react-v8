import { FC, useEffect, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

const Modal: FC<{ children: ReactElement }> = ({ children }) => {
    const elRef = useRef<HTMLDivElement | null>(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        if (!modalRoot || !elRef.current) {
            return;
        }

        modalRoot.appendChild(elRef.current);
        return () => {
            if (elRef.current) modalRoot.removeChild(elRef.current);
        };
    }, []);

    return createPortal(
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90">
            {children}
        </div>,
        elRef.current,
    );
};

export default Modal;
