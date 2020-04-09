import React from 'react';
import "./EvidenceSectionStyle.css"
import Evidence from "./components/EvidenceItom/EvidenceItom";

export default function EvidenceSection() {
    return (
        <div id="evidence-section">
            <div className="Evidence_Section">
                <Evidence type={1} count={811} title={"Выполненных задач"}/>
                <Evidence type={2} count={422} title={"Чашек кофе выпито"}/>
                <Evidence type={3} count={22} title={"Сделанных проектов"}/>
                <Evidence type={4} count={1110} title={"Звонков завершенно"}/>
                <div className="Evidence_Title">
                    <h3>СОЗДАНИЕ ПРОДАЮЩИХ ЛЕНДИНГОВ</h3>
                </div>
            </div>
        </div>
    );
}


