import { React } from "react";
import { FindingsJson } from "./FindingsJson";
import "../FAQ/Faq.css";


const Findings = () => {
    return (
        <div className="my-10 mx-48">
            <div className='grid grid-cols-3 gap-4'>
                {FindingsJson.map((obj, k) => (
                    <div key={k} className='shadow rounded-lg m-4 p-4'>
                        <div className="grid grid-row-3 items-center justify-center">
                            <div className="flex justify-center">
                                {obj.icon}
                            </div>
                            <p className="faq-title font-bold">
                                {obj.label}
                            </p>
                            {obj.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Findings };
