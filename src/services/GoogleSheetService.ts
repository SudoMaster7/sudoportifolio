
export interface LeadData {
    type: string;
    name?: string;
    contact?: string; // Email or Phone
    details?: string;
}

// TODO: User must replace this with their deployed Web App URL
const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzbMb_jFegSwHiLZfU79AIIS-WoMm7-lqV6GwFAQqeP4Xas3AG1BuIp5bphntLzQBT0/exec';

export const saveLead = async (data: LeadData): Promise<boolean> => {
    if (!SHEET_API_URL) {
        console.warn('Google Sheet URL not configured. Data not saved:', data);
        return false;
    }

    try {
        await fetch(SHEET_API_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return true;
    } catch (error) {
        console.error('Error saving lead:', error);
        return false;
    }
};
