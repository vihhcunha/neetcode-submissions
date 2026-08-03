class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = [];
        const fleetTime = [];

        for (let i = 0; i <= position.length - 1; i++){
            cars.push({
                position: position[i],
                speed: speed[i],
                time: ((target - position[i]) / speed[i])
            });
        }

        cars.sort((a,b) => b.position - a.position);
        for (let car of cars){
            if (fleetTime.length <= 0 || car.time > fleetTime[fleetTime.length - 1])
                fleetTime.push(car.time);
        }
        return fleetTime.length;
    }
}
