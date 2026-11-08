export function remainingUnlockTime(firstAccessAt:number,now:number,hours:number){return Math.max(0,hours*3600000-Math.max(0,now-firstAccessAt))}
export function completeDay(completed:number[],day:number){
 if(!Number.isInteger(day)||day<1||day>7)throw new Error('Dia inválido.');
 return [...new Set([...completed,day])].sort((a,b)=>a-b);
}
