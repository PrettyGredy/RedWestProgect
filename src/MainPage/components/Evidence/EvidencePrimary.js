import React from 'react';
import "./EvidenceStyle.css"
import EvidenceSlave from "./components/EvidenceSlave";

export default function EvidencePrimary() {
    return (
        <div className="Evidence_Primary">
            <EvidenceSlave ClassName={"Evidence_Slave"} ClassNameSpiner={"spinner spinners spinner-1"} count={811} title={"Выполненных задач"}/>
            <EvidenceSlave ClassName={"Evidence_Slave"} ClassNameSpiner={"spinner spinners spinner-2"} count={422} title={"Чашек кофе выпито"}/>
            <EvidenceSlave ClassName={"Evidence_Slave"} ClassNameSpiner={"spinner spinners spinner-3"} count={22} title={"Сделанных проектов"}/>
            <EvidenceSlave ClassName={"Evidence_Slave"} ClassNameSpiner={"spinner spinners spinner-4"} count={1110} title={"Звонков завершенно"}/>
            <div className="Post_Evidence_Slave">
                <h3>СОЗДАНИЕ ПРОДАЮЩИХ ЛЕНДИНГОВ</h3>
            </div>
        </div>
    );
}


