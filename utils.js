export const includesAny = (msg, subs) => {
    let includes = false
    subs.forEach(sub => {
        if (msg.toLowerCase().includes(sub)) includes = true
    })

    return includes
}
