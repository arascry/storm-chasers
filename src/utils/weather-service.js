const tornadoWarn = () => {
    return fetch('https://api.weather.gov/alerts/active?status=actual&message_type=alert&event=Tornado%20Warning', {
        method: 'GET',
        headers: new Headers({ "Content-Type": "application/json" })
    });
}

const tornadoWatch = () => {
    return fetch('https://api.weather.gov/alerts/active?status=actual&message_type=alert&event=Tornado%20Watch', {
        method: 'GET',
        headers: new Headers({ "Content-Type": "application/json" })
    });
}

export default {
    tornadoWarn,
    tornadoWatch
}