import { React, useState } from "react";
import "./Faq.css";
import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="box p-4">
            <div className="flex flex-row justify-between items-center">
                <p className="faq-title">{title}</p>
                <div onClick={() => { setIsActive(!isActive) }}>
                    {!isActive ?
                        <BsPlusCircleFill color="#666" />
                        :
                        <BsDashCircleFill color="#666" />
                    }
                </div>
            </div>
            {isActive ?
                <p className="text-left mt-6 transition">
                    {content}
                </p>
                : null}

        </div>
    );
};

export { Accordion };
