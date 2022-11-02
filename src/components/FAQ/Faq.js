import { React } from "react";
import { FaqJson } from "./FaqJson";
import { Accordion } from "./Accordion";

const Faq = () => {
    return (
        <div className="my-10 mx-48">
            <div className='grid grid-cols-2 gap-4'>
                {FaqJson.map((obj, k) => (
                    <div key={k}>
                        <Accordion title={obj.label} content={obj.value} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Faq };
