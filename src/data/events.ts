export type EventDetails = {
    title: string;
    campus: string;
    location: string;
    startTime?: string;
    description?: string;
    priceLabel?: string;
};

export type ExistingEvents = EventDetails & {
    id: string;
    societyId?: string;
    date: string | null; // DD-MM-YY

};

export const EXISTING_EVENTS: ExistingEvents[] = [
    {
        id: 'e1',
        societyId: '1',
        title: 'Cirque De Slay',
        campus: 'Farnham',
        location: 'Glasshouse',
        date: '04-12',
        priceLabel: 'From £3.00',

    },

     {
        id: 'e2',
        title: 'SU Winter Market - Farnham',
        campus: 'Farnham',
        location: 'The Quad',
        date: '27-11',

    },

];


// event data made by students
export type CreateEventInput = EventDetails & {
    date: string;
};


// The save operation assigns id and records the submitting user's ID in createdBy
export type StudentEvent = CreateEventInput & {
    id: string;
    createdBy: string;
};
