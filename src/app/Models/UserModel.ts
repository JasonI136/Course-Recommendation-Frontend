// User Model is the item recieved from the backend once the authentication is processed.

export class User {
    student_id: number;
    fName: string;
    sName: string;
    password: string;
    age: number;
    fullTimePreferred: number;
    completedSubjects: string; 
    degree_id: string;
}