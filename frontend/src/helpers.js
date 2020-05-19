export const stepCheck = (playerNow) => {
    const player = localStorage.getItem('player')
    if (player === playerNow) return true
    else return false
}
export const allActive = (...args) => {
    return args.reduce((res, arg) => {
        if (res && arg) return true
        else return false
    })
}