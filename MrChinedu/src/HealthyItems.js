function filter(items) {
    let healthyItems = items.filter(item => item.isHealthy);
    healthyItems.forEach(item => console.log(item));
    return healthyItems;
}


module.exports = {filter};