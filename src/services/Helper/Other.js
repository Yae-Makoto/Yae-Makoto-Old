export function NotImplemented() {
    console.log('Event Handler Not Implemented!')
}

export function TrueOrFalse() {
    return Math.random() < 0.5;
}

export function RandomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}