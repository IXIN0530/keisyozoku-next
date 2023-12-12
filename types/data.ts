export type SubjectAndScore = {
    isRequired: boolean;
    subject: string;
    score: number;
}

export type Data = SubjectAndScore[];

export type SetData = (data: Data) => void;