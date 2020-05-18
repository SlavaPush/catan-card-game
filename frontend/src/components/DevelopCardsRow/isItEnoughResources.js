export const isItEnoughResources = (name, resources) => {
    const prices = {
        'дорога': {
            'дерево': 1,
            'глина': 1,
        },
        'рыцарь': {
            'зерно': 1,
            'шерсть': 1,
            'руда': 1,
        },
        'город': {
            'зерно': 2,
            'руда': 3,
        },
        'здание': {
            'руда': 1,
            'шерсть': 3,
        },
    }
    for (let requiredResource in prices[name]) {
        if (prices[name][requiredResource] > resources[requiredResource] ||
             resources[requiredResource] === undefined) return false
    }
    return true
}