import { React, useState } from "react";
import "./Faq.css";
import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";

const Accordion = ({ title, content, img, otherImg }) => {
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
                <div>
                    <p className="text-left mt-6 transition">
                        {content}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-4">
                        {img ? <img
                            src={img}
                            alt="House Rules"
                        /> : null}
                        {otherImg ? <img
                            src={otherImg}
                            alt="House Rules"
                        /> : null}
                    </div>
                </div>
                : null}

        </div>
    );
};

export { Accordion };
