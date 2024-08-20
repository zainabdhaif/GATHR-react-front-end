const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/events`;
const BASEURL = `${import.meta.env.VITE_BACKEND_URL}/bookings`;

// better to move it to event service 
const show = async (eventid) => {
    try {
        const res = await fetch(`${BASE_URL}/${eventid}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const create = async (bookingData) => {
    try {
        const res = await fetch(BASEURL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default { show, create };