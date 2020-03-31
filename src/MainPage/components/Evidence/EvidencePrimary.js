import React from 'react';
import "./EvidenceStyle.css"
import EvidenceSlave from "./EvidenceSlave";

export default function EvidencePrimary() {
    return (
        <div className="Evidence_Primary">
            <EvidenceSlave ClassName={"Evidence_Slave"} count={811} title={"Выполненных задач"}/>
            <EvidenceSlave ClassName={"Evidence_Slave"} count={422} title={"Чашек кофе выпито"}/>
            <EvidenceSlave ClassName={"Evidence_Slave"} count={22} title={"Сделанных проектов"}/>
            <EvidenceSlave ClassName={"Evidence_Slave"} count={1110} title={"Звонков завершенно"}/>
            <div className="Post_Evidence_Slave">
                <h3>СОЗДАНИЕ ПРОДАЮЩИХ ЛЕНДИНГОВ</h3>
            </div>
        </div>
    );
}


