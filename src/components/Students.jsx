import { useState } from "react";
import Student from "./Student";

function Students({ students }){
    return (
        <div>
            <ol>
                {
                    students.map(student => ( 
                        <Student key={student.id} student={student} />
                    ))
                }
            </ol>
        </div>
    );
}

export default Students;