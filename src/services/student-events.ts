import type { CreateEventInput, StudentEvent } from "@/data/events";



// Temporary storage for local testing.

const studentEvents: StudentEvent[] = [];


// Validate a submission, stores it in memory, and returns the saved event.
export async function createEvent(
    input: CreateEventInput,
    demoUserId: string,
): Promise<StudentEvent> {
    // Trim whitespace before validating and storing the fields.

    const title = input.title.trim();
    const location = input.location.trim();
    const date = input.date.trim();

    if (!title || !location) {
        throw new Error('Enter an event title and location.');
    }

    // Convert the entered date to a JS timestamp.
    const timestamp = Date.parse(`${date}T00:00:00Z`);

    if (

        // Check that the date is in YYYY-MM-DD format and is a valid calendar date.
        !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        !Number.isFinite(timestamp) ||
        new Date(timestamp).
    )



    }

}

