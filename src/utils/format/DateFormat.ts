export const format = (date_string: Date): string => {
    let date = new Date(date_string);

    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);

    return `${year}.${month}.${day} ${hours}:${minutes}`;
}